class Dragger {
  elem: HTMLElement
  onStart: Function
  onDrag: Function
  onEnd: Function
  target?: HTMLElement
  public startX: number = 0
  public startY: number = 0
  public endX: number = 0
  public endY: number = 0
  public propX: number = 0
  public propY: number = 0

  constructor({
    elem,
    onStart,
    onDrag,
    onEnd
  }: {
    elem: HTMLElement,
    onStart: Function,
    onDrag: Function,
    onEnd: Function
  }) {
    this.elem = elem
    this.onStart = onStart
    this.onDrag = onDrag
    this.onEnd = onEnd

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseStop = this.handleMouseStop.bind(this)

    this.elem.addEventListener("mousedown", this.handleMouseDown)
    this.elem.addEventListener("mouseup", this.handleMouseStop)
  }

  private handleMouseDown(e: MouseEvent) {
    this.startX = e.screenX
    this.startY = e.screenY

    this.target = e.target as HTMLElement
    this.onStart(e)

    document.documentElement.addEventListener("mousemove", this.handleMouseMove)
  }

  private handleMouseMove(e: MouseEvent) {
    this.endX = e.screenX
    this.endY = e.screenY
    this.onDrag(e)
  }

  private handleMouseStop(e: MouseEvent) {
    this.onEnd(e)

    document.documentElement.removeEventListener(
      "mousemove",
      this.handleMouseMove,
    )
  }
}
