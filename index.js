// Function
function tambahKota(asal, tujuan, tarif) {
    asal = capitalizeWord(asal)
    tujuan = capitalizeWord(tujuan)

    const result = database.push({ city: [asal, tujuan].sort(), cost: tarif })

    for (let i = 0; i <= cityList.length; i++) {
        // console.log(cityList[i]);
        if (cityList[i] === asal) {
            break
        } else if (i === cityList.length) {
            cityList.push(asal)
            break
        }
    }
    for (let i = 0; i <= cityList.length; i++) {
        // console.log(cityList[i]);
        if (cityList[i] === tujuan) {
            break
        } else if (i === cityList.length) {
            cityList.push(tujuan)
            break
        }
    }

    return result
}

function hapusKota(asal, tujuan) {
    asal = capitalizeWord(asal)
    tujuan = capitalizeWord(tujuan)
    let array = [asal, tujuan].sort()

    for (let i = 0; i < database.length; i++) {
        if (array[0] === database[i].city[0] && array[1] === database[i].city[1]) {
            database.splice(i, 1)
        }
    }

}

function cekTarif(asal, tujuan, berat) {
    asal = capitalizeWord(asal)
    tujuan = capitalizeWord(tujuan)
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
    asal = capitalizeWord(asal)
    tujuan = capitalizeWord(tujuan)
    deskripsi = capitalizeWord(deskripsi)
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
        if (!order[i]) {
            result = 'paket tidak ditemukan'
            break
        }

        if (id === order[i].id) {
            result = order[i]
            break
        }
    }
    return result
}

function generateCity(data) {
    const list = document.getElementById('browsers');

    for (let i = 0; i < data.length; i++) {
        const option = document.createElement('option')
        option.value = data[i]
        list.appendChild(option);
        // console.log(data[i])
    }
}

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Data

const database = [
    { city: ['Bandung', 'Jakarta'], cost: '9000' },
    { city: ['Bandung', 'Semarang'], cost: '22000' },
    { city: ['Bandung', 'Surabaya'], cost: '12500' },
    { city: ['Jakarta', 'Semarang'], cost: '17500' },
    { city: ['Jakarta', 'Surabaya'], cost: '11000' },
    { city: ['Semarang', 'Surabaya'], cost: '19000' },
]

const order = []

const cityList = ['Bandung', 'Jakarta', 'Semarang', 'Surabaya']

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
// tambahKota('bekasi', 'Jakarta', '12000')
// tambahKota('Jakarta', 'tangerang', '14000')

// console.log(cityList)
// hapusKota('Jakarta','bekasi')
// console.log(cekTarif('Jakarta', 'Bandung', 5))
// console.log(database)

// tambahOrder('Jakarta', 'Bandung', 5, 'mainan')
// tambahOrder('Semarang', 'Bandung', 2, 'makanan')
// tambahOrder('Jakarta', 'Surabaya', 3, 'mobil')
// console.log(order)
// console.log(lacakOrder(7))


/* [
    { city: [ 'bekasi', 'Jakarta' ], cost: '15000' },
    { city: [ 'Jakarta', 'tangerang' ], cost: '14000' },
    { city: [ 'Bandung', 'Jakarta' ], cost: '15000' }
  ] */


// Invoke function
// generateCity(cityList)