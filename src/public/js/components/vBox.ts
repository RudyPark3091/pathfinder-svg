class VBox implements Component {
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
    this.container.classList.add("vbox-container")
  }

  public add(elem: HTMLElement): void {
    this.container.appendChild(elem)
  }

  public style(): string {
    return `
    .vbox-container {
      width: ${this.width};
      height: ${this.height};
      display: flex;
      flex-direction: column;
      justify-content: ${this.vAlign};
      align-items: ${this.hAlign};
    }
    `
  }

  public render(): void {
    // this.target.removeChild(this.container)
    this.target.appendChild(this.container)
  }
}
