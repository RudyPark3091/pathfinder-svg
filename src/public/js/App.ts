class App {
  css: string = ""
  elems: Component[] = new Array<Component>()

  constructor() {
    const vbox = new VBox(document.body, {
      width: "300px",
      height: "300px",
      vAlign: "flex-end",
      hAlign: "center",
    })
    this.elems.push(vbox)

    const hello = document.createElement("div")
    hello.innerText = "Hello World"

    const hello2 = document.createElement("div")
    hello2.innerText = "Hello World"

    vbox.add(hello)
    vbox.add(hello2)
  }

  public style() {
    this.elems.forEach((it) => (this.css += it.style()))
    const style = document.createElement("style")
    style.textContent = this.css
    document.head.appendChild(style)
  }

  public render() {
    this.elems.forEach((it) => it.render())
  }
}
