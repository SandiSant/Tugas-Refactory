const arr = [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3];

const barisSatu = arr.splice(0,11);
barisSatu.sort();
console.log("-baris Satu : " + barisSatu);
let totalSatu = 0;
for (let num of barisSatu) {
    totalSatu += num;
}
console.log("-Total baris Satu : " + totalSatu);
let rataRataSatu = totalSatu / barisSatu.length;
console.log("-rata-rata: " + rataRataSatu);
let TertinggiSatu = barisSatu[0];
for (let i in barisSatu) {
    if (barisSatu[i] > TertinggiSatu) {
    TertinggiSatu = barisSatu[i];
    }
}
console.log("Angka Tertingginya: " + TertinggiSatu)

const barisDua = arr.splice(0, 11);
barisDua.sort();
console.log("--baris Dua : " +barisDua);
let totalDua = 0;
for (let num of barisDua) {
    totalDua += num;
}
console.log("--Total baris Dua : " + totalDua);
let rataRataDua = totalDua / barisDua.length;
console.log("--rata-rata: " + rataRataDua);
let TertinggiDua = barisDua[0];
for (let i in barisDua) {
    if (barisDua[i] > TertinggiDua) {
    TertinggiDua = barisDua[i];
    }
}
console.log("Angka Tertingginya: " + TertinggiDua)

const barisTiga = arr.splice(0, 10)
barisTiga.sort();
console.log("---baris Tiga : " +barisTiga);
let totalTiga = 0;
for (let num of barisTiga) {
    totalTiga += num;
}
console.log("---Total baris Tiga : " + totalTiga);
let rataRataTiga = totalTiga / barisTiga.length;
console.log("---rata-rata: " + rataRataTiga);
let TertinggiTiga = barisTiga[0];
for (let i in barisTiga) {
    if (barisTiga[i] > TertinggiTiga) {
    TertinggiTiga = barisTiga[i];
    }
}
console.log("Angka Tertingginya: " + TertinggiTiga)