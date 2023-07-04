import page from './page.js';

class categoryPage extends page {

    get buttonTambah(){
        return $('a[href="/categories/create"]')
    }

    get successMessage(){
        return $('//*[contains(text(),"success")]')
    }

    get itemDitambahkan(){
        return $('//*[contains(text(),"item ditambahkan")]')
    }

    get itemDihapus(){
        return $('//*[contains(text(),"item dihapus")]')
    }

    get searchBox(){
        return $('.chakra-input.css-2s2hk4')
    }

    get resultSearch(){
        return $('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/table/tbody/tr')
    }

    get namaField () {
        return $('#nama')
    }
    
    get deskripsiField () {
        return $('#deskripsi')
    }
    
    get buttonSimpan () {
        return $('//*[contains(text(),"simpan")]')
    }

    get errorMessage () {
        return $('div[role="alert"]')
    }
}
export default new categoryPage();