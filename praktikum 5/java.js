class Produk {
    constructor(namaProduk, harga, jumlahStok) {
        this.namaProduk = namaProduk;
        this.harga = harga;
        this.jumlahStok = jumlahStok;
    }

    displayInfo() {
        console.log(`Nama Produk: ${this.namaProduk}, Harga: ${this.harga}, Stok: ${this.jumlahStok}`);
    }
}

class Elektronik extends Produk {
    constructor(namaProduk, harga, jumlahStok, garansi) {
        super(namaProduk, harga, jumlahStok);
        this.garansi = garansi;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Garansi: ${this.garansi} tahun`);
    }
}

class Pakaian extends Produk {
    constructor(namaProduk, harga, jumlahStok, ukuran, warna) {
        super(namaProduk, harga, jumlahStok);
        this.ukuran = ukuran;
        this.warna = warna;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Ukuran: ${this.ukuran}, Warna: ${this.warna}`);
    }
}

class Makanan extends Produk {
    constructor(namaProduk, harga, jumlahStok, tanggalKadaluwarsa) {
        super(namaProduk, harga, jumlahStok);
        this.tanggalKadaluwarsa = tanggalKadaluwarsa;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Tanggal Kadaluwarsa: ${this.tanggalKadaluwarsa}`);
    }
}

class KeranjangBelanja {
    constructor() {
        this.daftarProduk = [];
    }

    tambahProduk(produk, jumlah) {
        if (produk.jumlahStok >= jumlah) {
            this.daftarProduk.push({ produk: produk, jumlah: jumlah });
            produk.jumlahStok -= jumlah;
            console.log(`${produk.namaProduk} berhasil ditambahkan ke keranjang.`);
        } else {
            console.log(`Stok untuk ${produk.namaProduk} tidak mencukupi.`);
        }
    }

    hitungTotalBelanja() {
        return this.daftarProduk.reduce((total, item) => total + (item.produk.harga * item.jumlah), 0);
    }

    displayKeranjang() {
        console.log("Isi Keranjang:");
        this.daftarProduk.forEach(item => {
            item.produk.displayInfo();
            console.log(`Jumlah: ${item.jumlah}`);
        });
        console.log(`Total Harga: ${this.hitungTotalBelanja()}`);
    }
}

const produk1 = new Elektronik("Laptop", 15000000, 5, 2);
const produk2 = new Pakaian("Kaos", 100000, 20, "L", "Hitam");
const produk3 = new Makanan("Biskuit", 5000, 50, "2024-12-31");

const keranjang = new KeranjangBelanja();
keranjang.tambahProduk(produk1, 2);
keranjang.tambahProduk(produk2, 3);
keranjang.tambahProduk(produk3, 10);

keranjang.displayKeranjang();
