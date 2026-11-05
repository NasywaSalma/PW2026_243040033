import type { Transaksi } from '../types';

interface ItemTransaksiProps {
    transaksi: Transaksi;
    onHapus: (id: number) => void;
}

function ItemTransaksi({ transaksi, onHapus }: ItemTransaksiProps) {
    const formatRupiah = (angka: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0
        }).format(angka);
    };

    return (
        <li className="item-transaksi">
            <div className="info-transaksi">
                <strong>{transaksi.keterangan}</strong>
                <small>
                    {transaksi.jenis === 'pemasukan'
                        ? 'Pemasukan'
                        : 'Pengeluaran'}
                </small>
            </div>

            <span className={
                transaksi.jenis === 'pemasukan'
                    ? 'nominal masuk'
                    : 'nominal keluar'
            }>
                {transaksi.jenis === 'pemasukan' ? '+' : '-'}
                {formatRupiah(transaksi.nominal)}
            </span>

            <button
                className="tombol-hapus"
                onClick={() => onHapus(transaksi.id)}
            >
                Hapus
            </button>
        </li>
    );
}

export default ItemTransaksi;