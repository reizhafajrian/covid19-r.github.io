class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `<div class="wrapper">
        <div class="downside-wrapper">
            <div class="downside-left">
                <h1>Reizha fajrian</h1>
                <img src="https://pbs.twimg.com/profile_images/1243529876159655939/ttr5sb--_400x400.jpg" alt="">
                <ul class="left-links">
                    <li>Mahasiswa aktif UPNVJ</li>
                    <li>Jurusan Informatika</li>
                    <li>Thanks!</li>
                </ul>
            </div>
            <div class="downside-right">
                <ul class="right-links">
                    <li>reizha77@gmail.com</li>
                    <a href="https://www.instagram.com/reizhafajrian/" target="_blank">
                        <li>Instagram</li>
                    </a>
                    <a href="https://twitter.com/jezzjerry" target="_blank">
                        <li>Twitter</li>
                    </a>
                    <a href="https://www.dicoding.com/users/515609" target="_blank">
                        <li>About me</li>
                    </a>
                </ul>
            </div>
        </div>
        <div class="information">
            <p>© 2020 Reizha fajrian-submission dicoding</p>
        </div>
    </div>`;
    }
}
customElements.define('footer-element', Footer);
export default Footer;