function tambahKota(asal, tujuan, tarif) {
    let result = database.push({ kota: [asal, tujuan].sort(), cost: tarif })
    return result
}

function cekTarif(asal, tujuan, data) {
    const kota = [asal, tujuan].sort()
    let tarif = 0

    for (let j = 0; j < data.length; j++) {
        if (kota[0] === data[j].kota[0] && kota[1] === data[j].kota[1]) {
            tarif = data[j].cost
            break
        }
    }
    return tarif
}


const database = [
    { kota: ['semarang', 'surabaya'], cost: '15000' }
]


/* // DOM
const submitButton = document.getElementById('submit')
submitButton.addEventListener("click", tambahKota) */


tambahKota('bekasi', 'jakarta', '12000')
tambahKota('jakarta', 'tangerang', '14000')
tambahKota('jakarta', 'bandung', '15000')
// console.log(cekTarif('jakarta', 'bekasi', database))
// console.log(database)


/* [
    { kota: [ 'bekasi', 'jakarta' ], cost: '15000' },
    { kota: [ 'jakarta', 'tangerang' ], cost: '14000' },
    { kota: [ 'bandung', 'jakarta' ], cost: '15000' }
  ] */