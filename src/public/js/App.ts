class App {
  css: string = ""
  elems: Component[] = new Array<Component>()

  constructor(
    private target: HTMLElement
  ) {
    const splash = new Splash(target)
    this.elems.push(splash)

    const main = new MainArea(target)
    const toolBox = new ToolBox(target, {})
    const detail = new DetailArea(target, {})

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
