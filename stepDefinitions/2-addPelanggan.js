import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '../pageObjects/loginPage';
import dashboardPage from '../pageObjects/dashboardPage';
import pelangganPage from '../pageObjects/pelangganPage';

Given('I already login with email {string} and password {string}', async function (email, password) {
    await loginPage.open()
    await loginPage.emailField.setValue(email);
    await loginPage.passwordField.setValue(password);
    await loginPage.loginButton.click();
});

Then ('I redirect to the dashboard page', async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
    await expect(dashboardPage.textKasirAja).toExist();
});

When('I click on menu Pelanggan', async () => {
    await dashboardPage.menuPelanggan.click();
});

When('I click on button tambah', async () => {
    await pelangganPage.buttonTambah.click();
});

When('I input nama pelanggan {string} and no.hp {string} and alamat {string} and keterangan {string}', async function (namaPelanggan, nomorhp, alamat, keterangan) {
    await pelangganPage.namaField.setValue(namaPelanggan);
    await pelangganPage.nomorhpField.setValue(nomorhp);
    await pelangganPage.alamatField.setValue(alamat);
    await pelangganPage.keteranganField.setValue(keterangan);
});

When('I click on button simpan', async () => {
    await pelangganPage.buttonSimpan.click();
})

Then('I should see a successful message {string} {string}', async (sukses, ditambahkan) => {
    await expect(pelangganPage.successMessage).toExist()
    await expect(pelangganPage.successMessage).toHaveTextContaining(sukses);
    await expect(pelangganPage.itemDitambahkan).toExist()
    await expect(pelangganPage.itemDitambahkan).toHaveTextContaining(ditambahkan);
});