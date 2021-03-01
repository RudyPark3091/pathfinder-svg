class MainArea extends VBox implements Component {
  target: HTMLElement
  container: HTMLElement
  children: Component[] = []

  constructor(target: HTMLElement) {
    super(target, {
      width: "calc(100% - 150px)",
      vAlign: "center",
      hAlign: "center",
    })
    this.target = target

    this.container = document.createElement("div")
    this.container.classList.add("vbox")
    this.container.classList.add("mainarea-container")

    const colorPicker = new ColorPicker(this.container, {})
    this.children.push(colorPicker)
    const canvas = new Canvas(this.container)
    this.children.push(canvas)
  }

  public style(): string {
    let styleString: string = ""

    const isSuperDeclared = window.styled.find((it) => it === "VBox")
    styleString += isSuperDeclared ? "" : super.style()
    this.children.forEach((it) => (styleString += it.style()))

    return (
      styleString +
      `
      .mainarea-container {
        background-color: #666;
        overflow: scroll;
      }
      `
    )
  }

  public render(): void {
    this.children.forEach((it) => it.render())
    this.target.appendChild(this.container)
  }
}
