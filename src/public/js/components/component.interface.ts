interface Component {
  target: HTMLElement
  container: HTMLElement
  style(): string
  render(): void
}
