import page from './page.js';

class dashboardPage extends page {

    get textKasirAja () {
        return $('//h3[contains(text(),"kasirAja")]')
    }

    get menuCategory () {
        return $('a[href="/categories"]')
    }

    get menuPelanggan () {
        return $('a[href="/customers"]')
    }
}
export default new dashboardPage();