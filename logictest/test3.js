/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

//Jawaban 
function jumlahTabungan(listHarga, history) {
    let result = {
      historyPembelian : {},
      exchange: 0,
    }

    if (history  === undefined) return `this no history`;

    let i = 0;
    while (history >= 175){
      if(history >= listHarga[i].harga){
        if(result.historyPembelian[listHarga[i].nama] === undefined){
          result.historyPembelian[listHarga[i].nama] = 1;
          history -= listHarga[i].price;
        }else{
          result.historyPembelian[listHarga[i].nama] += 1;
          history -= listHarga[i].price;
        }
      }
      i++;

      if(i === listHarga.length){
        i = 0;
      }
    }

    result.exchange = history;
    
    return result;

}

var hargaMakanan = [
  {
    nama: "ayam",
    harga: 5000
    
  },
  {
    nama: "nasi",
    harga: 2000
  },
  {
    nama: "cola",
    harga: 1000
  },
  {
    nama: "chiki",
    harga: 1500
  },
  {
    nama: "hotdog",
    harga: 3000
  },
  {
    nama: "aqua",
    harga: 2000
  }
]

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`
console.log(jumlahTabungan(hargaMakanan, historyPembelian))