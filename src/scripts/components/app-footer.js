class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const currentYear = new Date().getFullYear();
    this.innerHTML = `
            <footer>
                <p>copyright &#169 ${currentYear} - RestFood</p>
            </footer>
        `;
  }
}

customElements.define("app-footer", AppFooter);
