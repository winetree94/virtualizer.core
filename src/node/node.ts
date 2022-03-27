export class VNode<V> {
  private _top: number | null = null;
  private _left: number | null = null;
  private _width: number | null = null;
  private _height: number | null = null;
  private _next: VNode<V> | null = null;

  public get top(): number | null {
    return this._top;
  }

  public get left(): number | null {
    return this._left;
  }

  public get width(): number | null {
    return this._width;
  }

  public get height(): number | null {
    return this._height;
  }
}

interface V {
  trackBy: string;
  rectBy: string;
}
