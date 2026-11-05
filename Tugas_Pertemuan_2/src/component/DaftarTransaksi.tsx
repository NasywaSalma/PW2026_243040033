import ItemTransaksi from './ItemTransaksi';
import type { Transaksi } from '../types';

interface DaftarTransaksiProps {
    daftarTransaksi: Transaksi[];
    onHapus: (id: number) => void;
}

function DaftarTransaksi({
    daftarTransaksi,
    onHapus
}: DaftarTransaksiProps) {
    return (
        <div>
            {daftarTransaksi.length === 0 ? (
                <p className="kosong">
                    Belum ada transaksi. Yuk, tambahkan transaksi pertamamu!
                </p>
            ) : (
                <ul className="daftar-transaksi">
                    {daftarTransaksi.map((transaksi) => (
                        <ItemTransaksi
                            key={transaksi.id}
                            transaksi={transaksi}
                            onHapus={onHapus}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DaftarTransaksi;