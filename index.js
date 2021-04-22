function tambahKota(asal, tujuan, tarif) {
    const result = database.push({ city: [asal, tujuan].sort(), cost: tarif })
    return result
}

function hapusKota(asal, tujuan) {
    // delete database[]
    let array = [asal, tujuan].sort()

    for (let i = 0; i < database.length; i++) {
        if (array[0] === database[i].city[0] && array[1] === database[i].city[1]) {
            database.splice(i, 1)
        }
    }
}

function cekTarif(asal, tujuan, berat) {
    const city = [asal, tujuan].sort()
    let tarif = 0

    for (let j = 0; j < database.length; j++) {
        if (city[0] === database[j].city[0] && city[1] === database[j].city[1]) {
            tarif = database[j].cost
            break
        }
    }
    tarif *= berat
    return tarif
}


const database = [
    { city: ['bandung', 'jakarta'], cost: '9000' },
    { city: ['bandung', 'semarang'], cost: '22000' },
    { city: ['bandung', 'surabaya'], cost: '12500' },
    { city: ['jakarta', 'semarang'], cost: '17500' },
    { city: ['jakarta', 'surabaya'], cost: '11000' },
    { city: ['semarang', 'surabaya'], cost: '19000' },
]


/* // DOM
const submitButton = document.getElementById('submit')
submitButton.addEventListener("click", tambahKota) */


/* // TestCode
tambahKota('bekasi', 'jakarta', '12000')
tambahKota('jakarta', 'tangerang', '14000')

hapusKota('jakarta','bekasi')
console.log(cekTarif('jakarta', 'bandung', 5))
console.log(database) */


/* [
    { city: [ 'bekasi', 'jakarta' ], cost: '15000' },
    { city: [ 'jakarta', 'tangerang' ], cost: '14000' },
    { city: [ 'bandung', 'jakarta' ], cost: '15000' }
  ] */