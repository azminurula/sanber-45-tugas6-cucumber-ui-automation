Feature: Feature: Testing in Pelanggan Page "kasirAja"

    Scenario: I success add Pelanggan
        Given I already login with email "amoorastore2022@gmail.com" and password "Azminurul28"
        Then I redirect to the dashboard page
        When I click on menu Pelanggan
        When I click on button tambah
        When I input nama pelanggan "<namaPelanggan>" and no.hp "<nomorhp>" and alamat "<alamat>" and keterangan "<keterangan>"
        When I click on button simpan
        Then I should see a successful message "<sukses>" "<ditambahkan>"

        Examples:
            | namaPelanggan  | nomorhp          | alamat                | keterangan    | sukses     | ditambahkan       |
            | Sintyabela     | 081888181890     | Jalan Petojo V        | VIP member    | success    | item ditambahkan  |
