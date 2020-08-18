import './list_kasus.js';

class ListItem extends HTMLElement {
    set covid(covids) {
        this._covids = covids;
        this.render();
    }
    render() {
        this.innerHTML = ""
        this._covids.forEach(covid => {
            const CovidItemELement = document.createElement('list-kasus');
            CovidItemELement.covid = covid;
            this.appendChild(CovidItemELement);
        })
    }
    renderError() {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}
customElements.define('list-item', ListItem);
export default ListItem;