class Splash {
  target: HTMLElement
  container: HTMLElement

  constructor(target: HTMLElement) {
    this.target = target

    this.container = document.createElement("div")
    this.container.classList.add("splash-container")
    this.container.innerText = "Hello"
  }

  public toggleHidden() {
    this.container.classList.toggle("hidden")
  }

  public style(): string {
    return `
    .splash-container {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #444;
    }

    .splash-container.hidden {
      display: none;
    }
    `
  }

  public render(): void {
    this.target.appendChild(this.container)
  }
}
