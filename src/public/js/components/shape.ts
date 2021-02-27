class Shape extends HBox implements Component {
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
      width: !!options.width ? options.width : "50px",
      height: "100%",
      hAlign: "center",
    })
    this.target = target
    this.width = !!options.width ? options.width : "50px"

    this.container = document.createElement("div")
    this.container.classList.add("hbox")
    this.container.classList.add("shape-container")

    const hand = document.createElement("div")
    hand.classList.add("shape-hand")
    super.add(hand)
  }

  public style(): string {
    let styleString: string = ""

    const isSuperDeclared = window.styled.find((it) => it === "HBox")
    styleString += isSuperDeclared ? "" : super.style()

    return (
      styleString +
      `
    .shape-container {
      background-color: #333;
    }

    .shape-hand {
      width: 100%;
      height: ${this.width};
      background-color: #444;
    }
    `
    )
  }

  public render(): void {
    this.target.appendChild(this.container)
  }
}
