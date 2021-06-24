class AppJumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="jumbotron">
                <div class="jumbotron__inner">
                <h1 class="jumbotron__title">Bingung Hari Ini Mau Makan Apa ?</h1>
                <p class="jumbotron__tagline">Tenang, Kami akan memberikan beberapa informasi beberapa restoran yang cukup relevan
                    untuk makan hari ini.</p>
                </div>
            </div>
        `;
  }
}

customElements.define("app-jumbotron", AppJumbotron);
