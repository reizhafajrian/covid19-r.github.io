class Search extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#SearchElement").value;
    }
    render() {
        this.innerHTML = ` 
        <div class="search_wrap" id="search-wrap">
             <div class="search_box" id="search_box">
                <input type="text" class="input" placeholder="search..." id="SearchElement">
                <a  id="pencarian">
                <div class="btn btn_common" id="button">
                <i class="fas fa-search" aria-hidden="true" ></i>
                 </div></a>
            </div>
        </div>`;
        const button = this.querySelector("#button").addEventListener("click", this._clickEvent);
    }
}
customElements.define("search-bar", Search);
export default Search;