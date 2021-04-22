
function tambahKota(asal, tujuan, tarif) {
    const result = database.push({ city: [asal, tujuan].sort(), cost: tarif })
    return result
}

function hapusKota(asal, tujuan) {
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

function tambahOrder(asal, tujuan, berat, deskripsi) {
    let result = {
        id: 1,
        origin: asal,
        destination: tujuan,
        weight: Number(berat),
        description: deskripsi,
    }

    // result.id+=
    if (order[order.length - 1]) {
        result.id += order[order.length - 1].id
    }
    // console.log(order[order.length - 1])

    order.push(result)
}

function lacakOrder(id) {
    let result = {}
    for (let i = 0; i <= order.length; i++) {
        if (!order[i]){
            result='paket tidak ditemukan'
            break
        }   

        if (id === order[i].id){
            result = order[i]
            break
        }
    }
    return result
}


const database = [
    { city: ['bandung', 'jakarta'], cost: '9000' },
    { city: ['bandung', 'semarang'], cost: '22000' },
    { city: ['bandung', 'surabaya'], cost: '12500' },
    { city: ['jakarta', 'semarang'], cost: '17500' },
    { city: ['jakarta', 'surabaya'], cost: '11000' },
    { city: ['semarang', 'surabaya'], cost: '19000' },
]

const order = []

// DOM
/* const addCity = document.getElementById('addCity')
addCity.addEventListener("click", tambahKota)
const removeCity = document.getElementById('removeCity')
removeCity.addEventListener("click", hapusKota)
const checkRates = document.getElementById('checkRates')
checkRates.addEventListener("click", cekTarif)
const trackOrder = document.getElementById('trackOrder')
trackOrder.addEventListener("click", lacakOrder) */


// TestCode
// tambahKota('bekasi', 'jakarta', '12000')
// tambahKota('jakarta', 'tangerang', '14000')

// hapusKota('jakarta','bekasi')
// console.log(cekTarif('jakarta', 'bandung', 5))
// console.log(database) 

// tambahOrder('jakarta', 'bandung', 5, 'mainan')
// tambahOrder('semarang', 'bandung', 2, 'makanan')
// tambahOrder('jakarta', 'surabaya', 3, 'mobil')
// console.log(order)
// console.log(lacakOrder(7))


/* [
    { city: [ 'bekasi', 'jakarta' ], cost: '15000' },
    { city: [ 'jakarta', 'tangerang' ], cost: '14000' },
    { city: [ 'bandung', 'jakarta' ], cost: '15000' }
  ] */