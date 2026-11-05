import { useState, useEffect } from 'react';
import './App.css';

import FormTransaksi from './component/FormTransaksi';
import DaftarTransaksi from './component/DaftarTransaksi';
import type { Transaksi } from './types';

function App() {
    const [daftarTransaksi, setDaftarTransaksi] = useState<Transaksi[]>(() => {
        const dataTersimpan = localStorage.getItem('catatan-keuangan');

        return dataTersimpan ? JSON.parse(dataTersimpan) as Transaksi[] : [];
    });

    useEffect(() => {
        localStorage.setItem(
            'catatan-keuangan',
            JSON.stringify(daftarTransaksi)
        );
    }, [daftarTransaksi]);

    const tambahTransaksi = (data: Omit<Transaksi, 'id'>) => {
        const transaksiBaru: Transaksi = {
            id: Date.now(),
            ...data
        };

        setDaftarTransaksi([...daftarTransaksi, transaksiBaru]);
    };

    const hapusTransaksi = (id: number) => {
        setDaftarTransaksi(
            daftarTransaksi.filter((transaksi) => transaksi.id !== id)
        );
    };

    const totalPemasukan = daftarTransaksi
        .filter((t) => t.jenis === 'pemasukan')
        .reduce((total, t) => total + t.nominal, 0);

    const totalPengeluaran = daftarTransaksi
        .filter((t) => t.jenis === 'pengeluaran')
        .reduce((total, t) => total + t.nominal, 0);

    const saldo = totalPemasukan - totalPengeluaran;

    const formatRupiah = (angka: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0
        }).format(angka);
    };

    return (
        <div className="wadah">
            <h1 className="judul">Catatan Keuangan Mini</h1>

            <p className="subjudul">
                Kelola pemasukan dan pengeluaranmu dengan mudah.
            </p>

            <div className="ringkasan">
                <div className="kartu saldo">
                    <h3>Total Saldo</h3>
                    <h2>{formatRupiah(saldo)}</h2>
                </div>

                <div className="kartu pemasukan">
                    <h3>Total Pemasukan</h3>
                    <h2>{formatRupiah(totalPemasukan)}</h2>
                </div>

                <div className="kartu pengeluaran">
                    <h3>Total Pengeluaran</h3>
                    <h2>{formatRupiah(totalPengeluaran)}</h2>
                </div>
            </div>

            <section className="kartu">
                <h2>Tambah Transaksi</h2>
                <FormTransaksi onTambah={tambahTransaksi} />
            </section>

            <section className="kartu">
                <h2>Riwayat Transaksi</h2>

                <DaftarTransaksi
                    daftarTransaksi={daftarTransaksi}
                    onHapus={hapusTransaksi}
                />
            </section>
        </div>
    );
}

export default App;