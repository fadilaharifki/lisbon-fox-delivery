// Data
const database = [
    { city: ['Bandung', 'Bandung'], cost: '9000' },
    { city: ['Jakarta', 'Jakarta'], cost: '9000' },
    { city: ['Semarang', 'Semarang'], cost: '9000' },
    { city: ['Surabaya', 'Surabaya'], cost: '9000' },
    { city: ['Bandung', 'Jakarta'], cost: '11000' },
    { city: ['Jakarta', 'Surabaya'], cost: '11000' },
    { city: ['Bandung', 'Surabaya'], cost: '12500' },
    { city: ['Jakarta', 'Semarang'], cost: '17500' },
    { city: ['Semarang', 'Surabaya'], cost: '19000' },
    { city: ['Bandung', 'Semarang'], cost: '22000' },
]

const order = []

const cityList = ['Bandung', 'Jakarta', 'Semarang', 'Surabaya']

// Function
function tambahKota(asal, tujuan, tarif) {
    asal = capitalizeWord(asal)
    tujuan = capitalizeWord(tujuan)
    console.log(asal,tujuan)

    const result = database.push({ city: [asal, tujuan].sort(), cost: tarif })

    for (let i = 0; i <= cityList.length; i++) {
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
    }
}

    
function generateTarif(asal, tujuan, berat) {
    const price = cekTarif(asal, tujuan, berat)
    const origin = capitalizeWord(asal)
    const destination = capitalizeWord(tujuan)
    berat = Number(berat)
    console.log(price,origin,destination)

    // creat table
    const divTable = document.getElementsByClassName('grid-item-table')[0]
    divTable.innerHTML = ''

    const table = document.createElement('table')
    divTable.appendChild(table)

    const tableTr = document.createElement('tr')
    table.appendChild(tableTr)

    let judul = ['Origin', 'Destination', 'Price']
    for (let i = 0; i < judul.length; i++) {
        const tableTh = document.createElement('th')
        tableTh.innerHTML = judul[i]
        tableTr.appendChild(tableTh)
    }

    const tableIsi = document.createElement('tr')
    table.appendChild(tableIsi)

    let isi = [origin, destination, price]
    for (let i = 0; i < isi.length; i++) {
        const tableTd = document.createElement('td')
        tableTd.innerHTML = isi[i]
        tableIsi.appendChild(tableTd)
    }
}

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



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

// generateTarif('Jakarta', 'Surabaya', 3)



/* [
    { city: [ 'bekasi', 'Jakarta' ], cost: '15000' },
    { city: [ 'Jakarta', 'tangerang' ], cost: '14000' },
    { city: [ 'Bandung', 'Jakarta' ], cost: '15000' }
] */


// Invoke function

if(document.getElementById("admin")){
    let selectorTarif = document.getElementById("Add")
    let asal = document.getElementById("addOrigin")
    let tujuan = document.getElementById("addDestination")
    let harga = document.getElementById("addPrice")

    generateCity(cityList)
    viewDatabase(database)
    selectorTarif.addEventListener('click', function () {
        tambahKota(asal.value, tujuan.value, harga.value)
        viewDatabase(database)        
    })
} 

if(document.getElementById("index")){
    let selectorTarif = document.getElementById("checkButton")
    console.log(selectorTarif)
    let asal = document.getElementById("origin")
    let tujuan = document.getElementById("destination")
    let harga = document.getElementById("weight")

    generateCity(cityList)
    selectorTarif.addEventListener('click', function () {
        generateTarif(asal.value,tujuan.value,harga.value)
    })
}


// Js Admin
function viewDatabase(data){
    // for (let i = 0; i < data.length; i++){
    const divTable = document.getElementsByClassName('grid-item-table')[0]
    divTable.innerHTML = ''

    const table = document.createElement('table')
    divTable.appendChild(table)

    const tableTr = document.createElement('tr')
    table.appendChild(tableTr)

    let judul = ['Origin', 'Destination', 'Price']
    for (let i = 0; i < judul.length; i++) {
        const tableTh = document.createElement('th')
        tableTh.innerHTML = judul[i]
        tableTr.appendChild(tableTh)
    }

    // const tableIsi = document.createElement('tr')
    // table.appendChild(tableIsi)
    
    let isi = []
    for(let j=0;j<data.length;j++){
        let origin = data[j].city[0]
        let destination = data[j].city[1]
        let price = data[j].cost
        isi.push([origin,destination,price])
        
    }

    for (let i = 0; i < isi.length; i++) {
        // for(let k=0;k<isi[i].length;k++){
            const tableTr = document.createElement('tr')
            tableTr.innerHTML = `<td>${isi[i][0]}</td>
            <td>${isi[i][1]}</td>
            <td>${isi[i][2]}</td>`
            table.appendChild(tableTr)
        // }
    }
}


// let selectorAdd = document.getElementById("number")

// selectorAdd.addEventListener('click', function () {
//     generateAdd(document.getElementById("origin").value, document.getElementById("destination").value, document.getElementById("weight").value)
// })
