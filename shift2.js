
// Array nama-nama Shift 2
let namaShift2 = [
    "Febria",
    "Suci",
    "Herlina",
    "Madina",
    "Lina",
    "Hikmatuz",
    "Meiva",
    "Rima",
    "Naya",
    "Saskia",
    "Wisnu",
    "Rafa",
    "Akbar",
    "Ridho"
];

// Menampilkan daftar nama
console.log("Daftar Nama Shift 2:");

namaShift2.forEach((nama, index) => {
    console.log(`${index + 1}. ${nama}`);
});

// Menambahkan nama menggunakan push()
namaShift2.push("Nama Baru");

// Menampilkan array setelah push
console.log("Setelah menggunakan push():");
console.log(namaShift2);
