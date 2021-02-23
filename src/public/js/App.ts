class App {
  vbox: VBox
  css: string = ""

  constructor() {
    this.vbox = new VBox(document.body, {
      vAlign: "flex-end",
      hAlign: "center",
    })

    const hello = document.createElement("div")
    hello.innerText = "Hello World"

    const hello2 = document.createElement("div")
    hello2.innerText = "Hello World"

    this.vbox.add(hello)
    this.vbox.add(hello2)
    this.vbox.render()
  }

  public style() {
    this.css += this.vbox.style()
    const style = document.createElement("style")
    style.textContent = this.css
    document.head.appendChild(style)
  }

  public greet() {
    console.log("hello world")
  }
}
