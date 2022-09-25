//object literal
var mhs1 = {
    nama : 'Dolla',
    nim : '136',
    email : 'yevadolla@gmail.com',
    jurusan : 'Informatika'
}

var mhs2 = {
    nama: 'Jeno',
    nim: '140',
    email: 'jeno@gmail.com',
    jurusan: 'informatika',
}

//function declaration
function buatObjectMhs(nama, nim, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}
var mhs3 = buatObjectMhs('Renjun', '141', 'renjun@gmail.com', 'informatika');

//constructor (khusus untuk buat object)
//this (yang keluar window(object global))
function Mahasiswa(nama, nim, email, jurusan){
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}
var mhs4 = new Mahasiswa('Jie', '142', 'ji@gmail.com', 'informatika');  


//
//function declaration
function halo(){
    console.log(this);
    console.log('halo');
}
this.halo();
//this mengembalikan object global

//object literal
var obj = {a : 18, nm : 'dola'};
obj.halo2 = function(){
    console.log(this);
    console.log('halo2');
}
obj.halo2();

//conctructor 
function Halo3() {
    console.log(this);
    console.log('halo3');
}
new Halo3();
//this mengembalikan objevt yg baru dibuat