class MainArea extends VBox implements Component {
  target: HTMLElement
  container: HTMLElement

  constructor(target: HTMLElement) {
    super(target, {
      width: "calc(100% - 150px)",
      vAlign: "center",
    })
    this.target = target

    this.container = document.createElement("div")
    this.container.classList.add("vbox")
    this.container.classList.add("mainarea-container")
  }

  public style(): string {
    let styleString: string = ""

    const isSuperDeclared = window.styled.find((it) => it === "VBox")
    styleString += isSuperDeclared ? "" : super.style()

    return (
      styleString +
      `
      .mainarea-container {
        background-color: #433;
      }
      `
    )
  }

  public render(): void {
    this.target.appendChild(this.container)
  }
}
