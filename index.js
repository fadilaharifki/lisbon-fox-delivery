function tambahKota(asal, tujuan, tarif) {
    let result = database.push({ kota: [asal, tujuan].sort(), cost: tarif })
    return result
}

function cekTarif(asal, tujuan, berat, data) {
    const kota = [asal, tujuan].sort()
    let tarif = 0

    for (let j = 0; j < data.length; j++) {
        if (kota[0] === data[j].kota[0] && kota[1] === data[j].kota[1]) {
            tarif = data[j].cost
            break
        }
    }
    tarif*=berat
    return tarif
}


// kota: bandung, jakarta, semarang, surabaya
const database = [
    { kota: ['bandung', 'jakarta'], cost: '9000' },
    { kota: ['bandung', 'semarang'], cost: '19500' },
    { kota: ['bandung', 'surabaya'], cost: '12500' },
    { kota: ['jakarta', 'semarang'], cost: '20000' },
    { kota: ['jakarta', 'surabaya'], cost: '22000' },
    { kota: ['semarang', 'surabaya'], cost: '19000' },

]


/* // DOM
const submitButton = document.getElementById('submit')
submitButton.addEventListener("click", tambahKota) */


tambahKota('bekasi', 'jakarta', '8500')
tambahKota('jakarta', 'tangerang', '8500')
// tambahKota('jakarta', 'bandung', '9000')
console.log(cekTarif('jakarta', 'bekasi', 5, database))
// console.log(database)


/* [
    { kota: [ 'bekasi', 'jakarta' ], cost: '15000' },
    { kota: [ 'jakarta', 'tangerang' ], cost: '14000' },
    { kota: [ 'bandung', 'jakarta' ], cost: '15000' }
  ] */