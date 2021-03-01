class Selector {
  target: SVGElement
  rects: SVGRectElement[]
  selectedElement?: HTMLElement
  pointWidth: number = 5
  pointHeight: number = 5
  fillColor: string = "#444444bb"

  constructor(
    target: SVGElement,
    x: number,
    y: number,
    width: number,
    height: number,
  ) {
    this.target = target
    this.rects = Array.from(new Array<SVGRectElement>(8), () =>
      document.createElementNS("http://www.w3.org/2000/svg", "rect"),
    )

    this.rects.forEach((rect) => {
      rect.setAttribute("width", this.pointWidth.toString())
      rect.setAttribute("height", this.pointHeight.toString())
      rect.setAttribute("fill", this.fillColor)
    })
    this.setPosition(x, y, width, height)
  }

  public setPosition(x: number, y: number, width: number, height: number) {
    this.rects.forEach((rect) => {
      rect.setAttribute("x", x.toString())
      rect.setAttribute("y", y.toString())
    })
    this.rects[0].setAttribute("x", x.toString())
    this.rects[0].setAttribute("y", y.toString())

    this.rects[1].setAttribute("x", (x + width / 2).toString())
    this.rects[1].setAttribute("y", y.toString())

    this.rects[2].setAttribute("x", (x + width).toString())
    this.rects[2].setAttribute("y", y.toString())

    this.rects[3].setAttribute("x", x.toString())
    this.rects[3].setAttribute("y", (y + width / 2).toString())

    this.rects[4].setAttribute("x", (x + width).toString())
    this.rects[4].setAttribute("y", (y + width / 2).toString())

    this.rects[5].setAttribute("x", x.toString())
    this.rects[5].setAttribute("y", (y + height).toString())

    this.rects[6].setAttribute("x", (x + width / 2).toString())
    this.rects[6].setAttribute("y", (y + width).toString())

    this.rects[7].setAttribute("x", (x + width).toString())
    this.rects[7].setAttribute("y", (y + height).toString())
  }

  public setColor(color: string): void {
    this.rects.forEach((rect) => rect.setAttribute("fill", color))
  }

  public setStroke(color: string): void {
    this.rects.forEach((rect) => rect.setAttribute("stroke", color))
  }

  public setStrokeWidth(width: string): void {
    this.rects.forEach((rect) => rect.setAttribute("stroke-width", width))
  }

  public render(): void {
    this.rects.forEach((rect) => this.target.appendChild(rect))
  }
}

class Canvas implements Component {
  target: HTMLElement
  container: HTMLElement
  svg: SVGElement

  constructor(target: HTMLElement) {
    this.target = target
    this.container = document.createElement("div")
    this.container.classList.add("main-canvas")

    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    this.svg.classList.add("main-canvas-svg")

    this.svg.setAttribute("width", "600px")
    this.svg.setAttribute("height", "400px")
    this.svg.innerHTML = `
    <rect x="100" y="100" width="100" height="100" fill="red"></rect>
    <rect x="250" y="100" width="100" height="100" fill="green"></rect>
    <rect x="100" y="250" width="100" height="100" fill="blue"></rect>
    `

    const selector = new Selector(this.svg, 5, 5, 200, 200)
    this.svg.onclick = (e) => {
      const target = e.target as HTMLElement

      if (target.localName === "rect") {
        selector.selectedElement = target
        selector.setPosition(
          +target.getAttribute("x")! - selector.pointWidth / 2,
          +target.getAttribute("y")! - selector.pointHeight / 2,
          +target.getAttribute("width")!,
          +target.getAttribute("height")!,
        )
        selector.render()
        console.log("selected item:", selector.selectedElement)
      }
    }

    this.container.appendChild(this.svg)
  }

  public style(): string {
    return `
    .main-canvas {
      background-color: #fff;
    }
    `
  }

  public render(): void {
    this.target.appendChild(this.container)
  }
}
