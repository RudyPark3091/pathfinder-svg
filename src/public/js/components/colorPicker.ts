class Color implements Component {
  target: HTMLElement
  color: string
  container: HTMLElement

  constructor(target: HTMLElement, options: { color: string }) {
    this.target = target
    this.color = options.color

    this.container = document.createElement("input")
    this.container.setAttribute("type", "color")
    this.container.setAttribute("value", this.color)
    this.container.onchange = (e: Event): void => {
      const target: HTMLInputElement = e.target as HTMLInputElement
      console.log(target.value)
    }
  }

  public style(): string {
    return `
    input[type=color] {
      width: 50px;
      height: 50px;
      padding: 0px;
      margin: 0px;
      background-color: transparent;
      border: none;
      outline: none;
    }
    `
  }

  public render(): void {
    this.target.appendChild(this.container)
  }
}

class ColorPicker implements Component {
  target: HTMLElement
  container: HTMLElement
  children: Component[] = []
  width: string
  height: string

  constructor(
    target: HTMLElement,
    options: {
      width?: string
      height?: string
    },
  ) {
    this.target = target
    this.width = options.width ?? "500px"
    this.height = options.height ?? "350px"

    this.container = document.createElement("div")
    this.container.classList.add("colorpicker-container")
    this.container.classList.add("hidden")

    const color = new Color(this.container, { color: "#000000" })
    this.children.push(color)
  }

  public style(): string {
    let styleString = ""
    this.children.forEach((it) => (styleString += it.style()))

    return (
      styleString +
      `
    .colorpicker-container {
      width: ${this.width};
      height: ${this.height};
      position: absolute;
      bottom: 0px;
      background-color: #fff;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .colorpicker-container.hidden {
      display: none;
    }
    `
    )
  }

  public render(): void {
    this.children.forEach((it) => it.render())
    this.target.appendChild(this.container)
  }
}
