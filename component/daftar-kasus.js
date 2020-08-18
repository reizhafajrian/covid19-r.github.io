class DaftarKasus extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `<div class="covid">
        <div class="case">
            <h3>Jakarta</h3>
            <h5>Jumlah kasus :</h5>
            <h5>Kasus berhasil di sembuhkan :</h5>
        </div>
    </div>`;
    }
}
customElements.define("daftar-kasus", DaftarKasus);
export default DaftarKasus;