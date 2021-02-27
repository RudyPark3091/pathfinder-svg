class DetailArea extends VBox implements Component {
  target: HTMLElement
  container: HTMLElement
  width: string

  constructor(
    target: HTMLElement,
    options: {
      width?: string
    },
  ) {
    super(target, {
      width: !!options.width ? options.width : "100px",
      hAlign: "center",
    })
    this.target = target
    this.width = !!options.width ? options.width : "100px"

    this.container = document.createElement("div")
    this.container.classList.add("vbox")
    this.container.classList.add("detailarea-container")
  }

  public style(): string {
    let styleString = ""

    const isSuperDeclared = window.styled.find((it) => it === "HBox")
    styleString += isSuperDeclared ? "" : super.style()

    return `
    .detailarea-container {
      width: ${this.width};
      background-color: #555;
    }
    `
  }

  public render(): void {
    this.target.appendChild(this.container)
  }
}
