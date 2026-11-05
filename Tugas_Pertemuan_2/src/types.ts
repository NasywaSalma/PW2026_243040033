export interface Transaksi {
    id: number;
    keterangan: string;
    nominal: number;
    jenis: 'pemasukan' | 'pengeluaran';
}