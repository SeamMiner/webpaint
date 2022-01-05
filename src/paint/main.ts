export class Paint {
  private _canvas: HTMLCanvasElement;

  private _ctx: CanvasRenderingContext2D | null;

  private _coords: { x: number; y: number };

  private _drawHandler: any;

  public _lineCap: CanvasLineCap = "round";

  public _lineWidth = 5;

  public _opacity = 255;

  constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas;
    this._ctx = canvas.getContext("2d");
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
    this._canvas.addEventListener("mouseup", this.stop.bind(this));
    window.addEventListener("resize", this.resize.bind(this));

    this._ctx!.canvas.width = this._canvas.parentElement?.clientWidth || 0;
    this._ctx!.canvas.height = this._canvas.parentElement?.clientHeight || 0;
  }

  public resize() {
    this._ctx!.canvas.style.width = (this._canvas.parentElement?.clientWidth || 0) + 'px';
    this._ctx!.canvas.style.height = (this._canvas.parentElement?.clientHeight || 0) + 'px';
  }
  public reposition(event: MouseEvent) {
    this._coords.x = event.clientX - this._canvas.offsetLeft;
    this._coords.y = event.clientY - this._canvas.offsetTop;
  }
  public start(event: MouseEvent) {
    this._drawHandler = this.draw.bind(this);

    this._canvas.addEventListener("mousemove", this._drawHandler);
    this.reposition(event);
  }
  public stop() {
    this._canvas.removeEventListener("mousemove", this._drawHandler);
  }
  public draw(
    event: MouseEvent,
  ) {
    const [red, green, blue] = document.documentElement.style
      .getPropertyValue("--active")
      .split(" ");

    this._ctx!.beginPath();
    this._ctx!.lineWidth = this._lineWidth;
    this._ctx!.lineCap = this._lineCap;
    this._ctx!.strokeStyle = this.ConvertRGBtoHex(
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
    this._ctx?.clearRect(0, 0, this._canvas.width, this._canvas.height)
  }
}
