export class Paint {
  private _canvas: HTMLCanvasElement;

  private _memCanvas: HTMLCanvasElement = document.createElement("canvas");

  private _ctx: CanvasRenderingContext2D | null;

  private _memCtx: CanvasRenderingContext2D | null =
    this._memCanvas.getContext("2d");

  private _coords: { x: number; y: number };

  private _points: { x: number; y: number }[] = [];

  private _drawHandler: any;

  public _redoHistory: string[] = [];

  public _undoHistory: string[] = [];

  public _lineCap: CanvasLineCap | "eraser" = "round";

  public _lineWidth = 10;

  public _opacity = 255;

  public _scale = 2;

  public _currentButton: number | null = null;

  constructor(canvas: HTMLCanvasElement | null) {
    this._canvas = canvas ? canvas : document.createElement("canvas");
    this._ctx = this._canvas.getContext("2d");
    this._coords = { x: 0, y: 0 };
  }

  public ColorToHex(color: number) {
    const hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }

  public ConvertRGBtoHex(
    red: number,
    green: number,
    blue: number,
    opacity = 255
  ) {
    return (
      "#" +
      this.ColorToHex(red) +
      this.ColorToHex(green) +
      this.ColorToHex(blue) +
      this.ColorToHex(opacity)
    );
  }

  public init() {
    this._canvas.addEventListener("pointerdown", this.start.bind(this));
    document.addEventListener("pointerup", this.stop.bind(this));
    this._canvas.addEventListener("contextmenu", (e) => {
      if (!this._currentButton) {
        this._currentButton = e.button;
        this.undo();
        this.stop(e);
        e.preventDefault();
      }
    });

    this._canvas.parentElement!.style.height =
      (this._canvas.parentElement?.clientHeight || 0) + "px";

    this._canvas.width =
      this._scale * (this._canvas.parentElement?.clientWidth || 0);
    this._canvas.height =
      this._scale * (this._canvas.parentElement?.clientHeight || 0);

    this._memCanvas.width = this._canvas.width;
    this._memCanvas.height = this._canvas.height;
    this.resize();
  }

  public resize() {
    this._canvas.style.width = (1 / this._scale) * this._canvas.width + "px";
    this._canvas.style.height = (1 / this._scale) * this._canvas.height + "px";
  }
  public reposition(event: PointerEvent) {
    this._coords.x =
      (event.clientX -
        this._canvas.getBoundingClientRect().left -
        this._canvas.scrollLeft) *
      this._scale;
    this._coords.y =
      (event.clientY -
        this._canvas.getBoundingClientRect().top -
        this._canvas.scrollTop) *
      this._scale;

    this._points.push(Object.assign({}, this._coords));
  }
  public start(event: PointerEvent) {
    if (this._currentButton == event.button) {
      this.stop(event);
    } else if (!event.button) {
      this.saveState(this._undoHistory, true);
      this._currentButton = event.button;
      this._drawHandler = this.draw.bind(this);
      const [red, green, blue] = document.documentElement.style
        .getPropertyValue("--active")
        .trim()
        .split(" ");

      if (this._lineCap == "eraser") {
        this._ctx!.globalCompositeOperation = "destination-out";
      } else {
        this._ctx!.globalCompositeOperation = "sorce-over";
      }
      this._ctx!.lineWidth =
        this._lineCap == "eraser" ? this._lineWidth * 4 : this._lineWidth;
      this._ctx!.lineCap = this._lineCap == "eraser" ? "round" : this._lineCap;
      this._ctx!.strokeStyle =
        this._lineCap == "eraser"
          ? "#000"
          : this.ConvertRGBtoHex(
              parseInt(red),
              parseInt(green),
              parseInt(blue),
              this._opacity
            );

      document.addEventListener("pointermove", this._drawHandler);
      this.reposition(event);
    }
  }
  public stop(event: PointerEvent | MouseEvent) {
    if (this._currentButton === event.button) {
      this.updateCanvas(this._canvas, this._memCtx);

      document.removeEventListener("pointermove", this._drawHandler);
      this._currentButton = null;
      this._points = [];
    }
  }
  public draw(event: PointerEvent) {
    this.updateCanvas(this._memCanvas, this._ctx);

    this.reposition(event);

    if (this._points.length < 6) {
      const b = this._points[0];
      this._ctx!.beginPath();
      this._ctx!.arc(b.x, b.y, this._ctx!.lineWidth / 2, 0, Math.PI * 2, !0);
      this._ctx!.closePath();
      this._ctx!.fill();
      return;
    }
    this._ctx!.beginPath();
    this._ctx!.moveTo(this._points[0].x, this._points[0].y);
    // draw a bunch of quadratics, using the average of two points as the control point
    for (let i = 1; i < this._points.length - 2; i++) {
      const c = (this._points[i].x + this._points[i + 1].x) / 2,
        d = (this._points[i].y + this._points[i + 1].y) / 2;
      this._ctx!.quadraticCurveTo(this._points[i].x, this._points[i].y, c, d);
    }
    this._ctx!.quadraticCurveTo(
      this._points[this._points.length - 2].x,
      this._points[this._points.length - 2].y,
      this._points[this._points.length - 1].x,
      this._points[this._points.length - 1].y
    );
    this._ctx!.stroke();
  }
  public eraseAll(ctx = this._ctx) {
    ctx?.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  private saveState(history = this._undoHistory, keepRedo = false) {
    if (!keepRedo) {
      this._redoHistory = [];
    }
    history.push(this._memCanvas.toDataURL());
  }

  private restoreState(
    history = this._undoHistory,
    saveTo = this._redoHistory
  ) {
    if (history.length) {
      this.saveState(saveTo, true);
      const img = new Image();
      img.src = history.pop()!;
      img.onload = () => {
        this.eraseAll(this._memCtx);
        this._memCtx?.drawImage(img, 0, 0);
        this.updateCanvas(this._memCanvas, this._ctx);
      };
    }
    console.log(this._undoHistory, this._redoHistory);
  }

  public undo() {
    this.restoreState(this._undoHistory, this._redoHistory);
  }

  public redo() {
    this.restoreState(this._redoHistory, this._undoHistory);
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

    this.resize();
  }

  public clear() {
    this.eraseAll(this._ctx);
    this.eraseAll(this._memCtx);
    this.saveState(this._undoHistory);
  }

  public updateCanvas(canvas = this._canvas, ctx = this._ctx) {
    this.eraseAll(ctx);
    ctx!.drawImage(canvas, 0, 0);
  }
}
