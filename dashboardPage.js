import page from './page.js';

class dashboardPage extends page {

    get textKasirAja () {
        return $('//h3[contains(text(),"kasirAja")]')
    }

    get menuCategory () {
        return $('a[href="/categories"]')
    }

    get menuPengguna () {
        return $('a[href="/users"]')
    }
}
export default new dashboardPage();