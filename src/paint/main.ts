export class Paint {
  private _canvas: HTMLCanvasElement;

  private _ctx: CanvasRenderingContext2D | null;

  private _coords: { x: number; y: number };

  private _drawHandler: any;

  private _redoHistory: string[] = [];

  private _undoHistory: string[] = [];

  public _lineCap: CanvasLineCap | "eraser" = "round";

  public _lineWidth = 5;

  public _opacity = 255;

  constructor(canvas: HTMLCanvasElement | null) {
    this._canvas = canvas ? canvas : document.createElement('canvas');
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
    this._canvas.addEventListener("mousedown", this.start.bind(this));
    document.addEventListener("mouseup", this.stop.bind(this));
    window.addEventListener("resize", this.resize.bind(this));

    this._ctx!.canvas.width = this._canvas.parentElement?.clientWidth || 0;
    this._ctx!.canvas.height = this._canvas.parentElement?.clientHeight || 0;
  }

  public resize() {
    this._ctx!.canvas.style.width =
      (this._canvas.parentElement?.clientWidth || 0) + "px";
    this._ctx!.canvas.style.height =
      (this._canvas.parentElement?.clientHeight || 0) + "px";
  }
  public reposition(event: MouseEvent) {
    this._coords.x = event.clientX - this._canvas.offsetLeft;
    this._coords.y = event.clientY - this._canvas.offsetTop;
  }
  public start(event: MouseEvent) {
    this._drawHandler = this.draw.bind(this);
    this.saveState();

    document.addEventListener("mousemove", this._drawHandler);
    this.reposition(event);
  }
  public stop() {
    document.removeEventListener("mousemove", this._drawHandler);
  }
  public draw(event: MouseEvent) {
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
    this._ctx!.strokeStyle = this._lineCap == "eraser" ? '#000' : this.ConvertRGBtoHex(
      parseInt(red),
      parseInt(green),
      parseInt(blue),
      this._opacity
    );
    this._ctx!.moveTo(this._coords.x, this._coords.y);
    this.reposition(event);
    this._ctx!.lineTo(this._coords.x, this._coords.y);
    this._ctx!.stroke();
  }
  public eraseAll() {
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
    console.log(this._undoHistory, this._redoHistory);

    if ((isUndo ? this._undoHistory : this._redoHistory).length) {
      this.saveState(isUndo, true);
      const img = new Image();
      img.src = (isUndo ? this._undoHistory : this._redoHistory).pop()!;
      img.onload = () => {
        this.eraseAll();
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

    console.log(this._undoHistory, this._redoHistory);
    
  }

  public undo() {
    console.log('undo');
    
    this.restoreState(true);
  }

  public redo() {
    this.restoreState();
  }

  public save() {
    const link = document.createElement('a')
    link.download = 'webpaint.png'
    link.href = this._canvas.toDataURL()
    link.click()
    link.remove()
  }
}
