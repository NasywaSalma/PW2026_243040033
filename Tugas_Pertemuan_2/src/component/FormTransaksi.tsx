import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Transaksi } from '../types';

interface FormTransaksiProps {
    onTambah: (data: Omit<Transaksi, 'id'>) => void;
}

function FormTransaksi({ onTambah }: FormTransaksiProps) {
    const [keterangan, setKeterangan] = useState('');
    const [nominal, setNominal] = useState('');
    const [jenis, setJenis] = useState<'pemasukan' | 'pengeluaran'>('pemasukan');

    const tanganiKirim = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (keterangan.trim() === '' || nominal === '' || Number(nominal) <= 0) {
            return;
        }

        onTambah({
            keterangan: keterangan.trim(),
            nominal: Number(nominal),
            jenis
        });

        setKeterangan('');
        setNominal('');
        setJenis('pemasukan');
    };

    return (
        <form onSubmit={tanganiKirim}>
            <div className="form-group">
                <label>Keterangan</label>
                <input
                    type="text"
                    className="input"
                    placeholder="Contoh: Uang bekal"
                    value={keterangan}
                    onChange={(e) => setKeterangan(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Nominal (Rp)</label>
                <input
                    type="number"
                    className="input"
                    placeholder="Contoh: 50000"
                    min="1"
                    value={nominal}
                    onChange={(e) => setNominal(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Jenis Transaksi</label>
                <select
                    className="input"
                    value={jenis}
                    onChange={(e) =>
                        setJenis(e.target.value as 'pemasukan' | 'pengeluaran')
                    }
                >
                    <option value="pemasukan">Pemasukan</option>
                    <option value="pengeluaran">Pengeluaran</option>
                </select>
            </div>

            <button
                type="submit"
                className="tombol"
                disabled={
                    keterangan.trim() === '' ||
                    nominal === '' ||
                    Number(nominal) <= 0
                }
            >
                Tambah Transaksi
            </button>
        </form>
    );
}

export default FormTransaksi;