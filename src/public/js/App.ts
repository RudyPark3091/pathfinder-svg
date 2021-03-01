class App {
  css: string = ""
  elems: Component[] = new Array<Component>()

  constructor() {
    const splash = new Splash(document.body)
    this.elems.push(splash)

    const main = new MainArea(document.body)
    const toolBox = new ToolBox(document.body, {})
    const detail = new DetailArea(document.body, {})

    this.elems.push(toolBox)
    this.elems.push(main)
    this.elems.push(detail)

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
