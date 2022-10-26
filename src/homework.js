//ASAL SAYI KONTROL

function primeNumber(...numbers) {
    for (let i = 0; i < numbers.length; i++){
        let motherFucker = true
        for (let j = 2; j < numbers[i]; j++){
            if (numbers[i] % j == 0) {
            motherFucker = false
            
        }
    }
    if (motherFucker == true && numbers[i] !== 1) {
        console.log(numbers[i] + "asaldır.")
        }
    }
}

primeNumber(11111)


//ARKADAŞ SAYI KONTROL

function amicables(sayi1,sayi2) {
    let toplam1 = 0
    for (let i = 1; i <= (sayi1/2); i++){
        if (sayi1 % i == 0) {
            toplam1 = i + toplam1
        }
    }
    if (toplam1 != sayi2) {
        console.log(sayi1 + " ve " + sayi2 + ", arkadaş sayı değiller.")
    }
    else {
        let toplam2 = 0
        for (let j = 1; j <= (sayi2/2); j++){
            if (sayi2 % j == 0) {
                toplam2 = j + toplam2
            }
        }
        if (toplam2 != sayi1) {
            console.log(sayi1 + " ve " + sayi2 + ", arkadaş sayı değiller.")
        }
        else {
            console.log(sayi1 + " ve " + sayi2 + ", arkadaş sayıdır.")
        }
                   
    }
}

amicables(66928,66991)

//1000'E KADAR OLAN MÜKEMMEL SAYILAR

function perfectNumber() {
    let perfectList = []
    let perfect = true
    for (let x = 1; x <= 1000; x++ ) {
        let toplam = 0
        for(let i = 1; i <= (x/2); i++ ) {
            if (x % i == 0) {
                toplam = toplam + i
                }
        }
        if (toplam != x) {
        perfect = false
        }
        else {
        perfectList.push(x)
        }
    }
    console.log(perfectList)
}
perfectNumber()

//1000'E KADAR OLAN ASAL SAYILAR

function primes() {
    let primeList = []
    for (let x = 2; x <= 1000; x++) {
        let cunt = true
        for (let i = 2; i < x; i++){
            if (x % i == 0) {
                cunt = false
                break
            }
        }
    if (cunt == true) {
        primeList.push(x)
        }

    }
    console.log(primeList)
}
    

primes()