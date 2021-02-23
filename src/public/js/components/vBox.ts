class VBox {
  target: HTMLElement
  container: HTMLElement
  vAlign: string
  hAlign: string

  constructor(target: HTMLElement, vAlign?: string, hAlign?: string) {
    this.target = target
    this.vAlign = vAlign ?? "flex-start"
    this.hAlign = hAlign ?? "flex-start"

    this.container = document.createElement("div")
    this.container.classList.add("vbox-container")
  }

  public add(elem: HTMLElement): void {
    this.container.appendChild(elem)
  }

  public render(): void {
    // this.target.removeChild(this.container)
    this.target.appendChild(this.container)
  }

  public style(): string {
    return `
    .vbox-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: ${this.hAlign};
      align-items: ${this.vAlign};
    }
    `
  }
}