class Dragger {
  elem: HTMLElement
  callback: Function
  target?: HTMLElement
  public startX: number = 0
  public startY: number = 0
  public endX: number = 0
  public endY: number = 0

  constructor(elem: HTMLElement, callback: Function) {
    this.elem = elem
    this.callback = callback

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
    document.documentElement.addEventListener("mousemove", this.handleMouseMove)
  }

  private handleMouseMove(e: MouseEvent) {
    this.endX = e.screenX
    this.endY = e.screenY
    this.callback(e)
  }

  private handleMouseStop(e: MouseEvent) {
    document.documentElement.removeEventListener(
      "mousemove",
      this.handleMouseMove,
    )
  }
}
