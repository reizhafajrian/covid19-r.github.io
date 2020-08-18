import '../component/nav-bar.js';
import '../component/jumbotron.js';
import '../component/search-bar.js';
import '../component/list_item.js';
import '../component/footer.js'
import DataSource from '../data_covid/api_covid.js';
import Search from '../component/search-bar.js';
const main = () => {
    const buttonJumbotron = document.querySelector("custom-jumbotron");
    const searchElement = document.querySelector("search-bar");
    window.onload = async() => {
        var hasil = [];
        const listCovidElement = document.querySelector("list-item");

        searchElement.clickEvent = async() => { fun(hasil) }
        try {
            const results = await DataSource.listCovid();
            results.pop();
            hasil = results
            listCovidElement.covid = results
        } catch (message) {
            alert(message)
        }

        const fun = (hasil) => {
            const keywords = searchElement.value
            var pencarian = hasil.filter(function(search) {
                return search.provinsi.toUpperCase().includes(keywords.toUpperCase());
            });
            hasil = pencarian
            listCovidElement.covid = hasil
            return hasil
        }


    }


};
export default main;