class App {
  css: string = ""
  elems: Component[] = new Array<Component>()

  constructor() {
    const splash = new Splash(document.body)
    this.elems.push(splash)

    const vbox = new Shape(document.body, {})

    this.elems.push(vbox)

    window.onload = () => {
      splash.toggleHidden()
    }
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
