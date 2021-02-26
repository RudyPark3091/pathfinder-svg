class HBox implements Component {
  target: HTMLElement
  container: HTMLElement
  vAlign: string
  hAlign: string
  width: string
  height: string

  constructor(
    target: HTMLElement,
    options: {
      width?: string
      height?: string
      vAlign?: string
      hAlign?: string
    },
  ) {
    this.target = target
    this.vAlign = options.vAlign ?? "flex-start"
    this.hAlign = options.hAlign ?? "flex-start"
    this.width = options.width ?? "100%"
    this.height = options.height ?? "100%"

    this.container = document.createElement("div")
    this.container.classList.add("hbox-container")
  }

  public add(elem: HTMLElement): void {
    this.container.appendChild(elem)
  }

  public style(): string {
    return `
    .hbox-container {
      width: ${this.width};
      height: ${this.height};
      display: flex;
      justify-content: ${this.hAlign};
      align-items: ${this.vAlign};
    }
    `
  }

  public render(): void {
    // this.target.removeChild(this.container)
    this.target.appendChild(this.container)
  }
}
