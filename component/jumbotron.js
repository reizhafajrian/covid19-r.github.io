class Jumbotron extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="jumbotron">
            <h1 class="display-4">Selamat datang di website kami</h1>
            <p class="lead">Website ini menunjukan informasi tentang covid 19 yang aktif di 33 provinsi di indonesia.</p>
            <hr class="my-4">
          `;
    }
}
customElements.define("custom-jumbotron", Jumbotron);
export default Jumbotron;