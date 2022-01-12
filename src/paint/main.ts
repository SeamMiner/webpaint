export class Paint {
  private _canvas: HTMLCanvasElement;

  private _ctx: CanvasRenderingContext2D | null;

  private _coords: { x: number; y: number };

  private _drawHandler: any;

  public _redoHistory: string[] = [];

  public _undoHistory: string[] = [];

  public _lineCap: CanvasLineCap | "eraser" = "round";

  public _lineWidth = 5;

  public _opacity = 1;

  public _scale = 1;

  public _currentButton: number | null = null;

  constructor(canvas: HTMLCanvasElement | null) {
    this._canvas = canvas ? canvas : document.createElement("canvas");
    this._ctx = this._canvas.getContext("2d");
    this._coords = { x: 0, y: 0 };
  }

  public rgba2rgb(red=0, green=0, blue=0) {
    return '#' + 
    Math.round((1 - this._opacity) * 255 + this._opacity * red).toString(16) +
    Math.round((1 - this._opacity) * 255 + this._opacity * green).toString(16) +
    Math.round((1 - this._opacity) * 255 + this._opacity * blue).toString(16)
  }

  public init() {
    this._canvas.addEventListener("pointerdown", this.start.bind(this));
    document.addEventListener("pointerup", this.stop.bind(this));
    this._canvas.addEventListener("contextmenu", (e) => {
      this._currentButton = e.button
      this.undo()
      this.stop(e);
      e.preventDefault();
    });
    //window.addEventListener("resize", this.resize.bind(this));

    this._canvas.parentElement!.style.height =
      (this._canvas.parentElement?.clientHeight || 0) + "px";
    this._ctx!.canvas.width =
      (this._canvas.parentElement?.clientWidth || 0) - 14;
    this._ctx!.canvas.height =
      (this._canvas.parentElement?.clientHeight || 0) - 14;
  }

  public resize() {
    if (
      (parseInt(this._ctx!.canvas.style.width) || 0) <
      (this._canvas.parentElement?.clientWidth || 0)
    ) {
      this._ctx!.canvas.style.width =
        (this._canvas.parentElement?.clientWidth || 0) + "px";
      this._ctx!.canvas.style.height =
        (this._canvas.parentElement?.clientHeight || 0) + "px";
    }
  }
  public reposition(event: PointerEvent) {
    this._coords.x =
      (event.clientX -
        this._canvas.getBoundingClientRect().left -
        this._canvas.scrollLeft) /
      this._scale;
    this._coords.y =
      (event.clientY -
        this._canvas.getBoundingClientRect().top -
        this._canvas.scrollTop) /
      this._scale;
  }
  public start(event: PointerEvent) {
    if (this._currentButton == event.button) {
      this.stop(event);
    } else if (!event.button) {
      this._currentButton = event.button;
      this._drawHandler = this.draw.bind(this);
      this.saveState();

      document.addEventListener("pointermove", this._drawHandler);
      this.reposition(event);
    }
  }
  public stop(event: PointerEvent | MouseEvent) {
    if (this._currentButton === event.button) {
      document.removeEventListener("pointermove", this._drawHandler);
      this._currentButton = null;
    }
  }
  public draw(event: PointerEvent) {
    const [red, green, blue] = document.documentElement.style
      .getPropertyValue("--active")
      .trim()
      .split(" ");

    if (this._lineCap == "eraser") {
      this._ctx!.globalCompositeOperation = "destination-out";
    } else {
      this._ctx!.globalCompositeOperation = "source-over";
    }
    this._ctx!.beginPath();
    this._ctx!.lineWidth =
      this._lineCap == "eraser" ? this._lineWidth * 4 : this._lineWidth;
    this._ctx!.lineCap = this._lineCap == "eraser" ? "round" : this._lineCap;
    this._ctx!.strokeStyle =
      this._lineCap == "eraser"
        ? "#000"
        : this.rgba2rgb(
            parseInt(red),
            parseInt(green),
            parseInt(blue),
          );
    this._ctx!.moveTo(this._coords.x, this._coords.y);
    this.reposition(event);
    this._ctx!.lineTo(this._coords.x, this._coords.y);
    this._ctx!.stroke();
  }
  public eraseAll(keepRedo = true) {
    keepRedo ? this.saveState(false, keepRedo) : '';
    this._ctx?.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

  private saveState(isRedo = false, keepRedo = false) {
    if (!keepRedo) {
      this._redoHistory = [];
    }
    (isRedo ? this._redoHistory : this._undoHistory).push(
      this._canvas.toDataURL()
    );
  }

  private restoreState(isUndo = false) {
    if ((isUndo ? this._undoHistory : this._redoHistory).length) {
      this.saveState(isUndo, true);
      const img = new Image();
      img.src = (isUndo ? this._undoHistory : this._redoHistory).pop()!;
      img.onload = () => {
        this.eraseAll(false);
        this._ctx?.drawImage(
          img,
          0,
          0,
          this._canvas.width,
          this._canvas.height,
          0,
          0,
          this._canvas.width,
          this._canvas.height
        );
      };
    }
  }

  public undo() {
    this.restoreState(true);
  }

  public redo() {
    this.restoreState();
  }

  public save() {
    const link = document.createElement("a");
    link.download = "webpaint.png";
    link.href = this._canvas.toDataURL();
    link.click();
    link.remove();
  }

  public magnifier() {
    this._scale = this._scale === 1 ? 2 : 1;

    this._ctx!.canvas.style.width =
      this._scale * (this._ctx!.canvas.width || 0) + "px";
    this._ctx!.canvas.style.height =
      this._scale * (this._ctx!.canvas.height || 0) + "px";
  }
}
