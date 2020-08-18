import GambarIbukota from '../data_covid/GambarIbukota.js'
class ListKasus extends HTMLElement {
    set covid(covid) {
        this._covid = covid;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="case" id="${this._covid.provinsi}">
                <h3>${this._covid.provinsi}</h3>
                <img src="${GambarIbukota[`${this._covid.provinsi}`]}" alt="">
                <p>Jumlah kasus positif : ${this._covid.kasusPosi}</p>
                <p>Jumlah kasus meinggal : ${this._covid.kasusMeni}</p>
                <p class="last-txt">Kasus berhasil di sembuhkan : ${this._covid.kasusSemb}</p>
            </div>`;
    }
}
customElements.define('list-kasus', ListKasus);
export default ListKasus;