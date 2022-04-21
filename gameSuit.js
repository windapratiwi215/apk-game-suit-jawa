var tanya = true;
alert('SELAMAT DATANG DI GAME SUIT JAWA')
while(tanya){
    //menangkap pilihan player
    var play = prompt('Pilih : gunting / batu / kertas')

    //menangkap pilihan komputer
    //membangkitkan bil random
    var comp = Math.random();

    if(comp <= 0.33){
        comp = 'gunting';
    }else if(comp > 0.33 && comp <= 0.66){
        comp = 'batu';
    }else{
        comp = 'kertas';
    }

    //menentukan rule
    hasil = '';
    if(play == comp){
        hasil = 'SERI!!!'
    }else  if(play =='gunting'){
        hasil = (comp == 'batu') ? 'Anda KALAH!!!':'Anda MENANG!!!' ;
    }else if(play == 'batu'){
        hasil = (comp == 'gunting') ? 'Anda MENANG!!!': 'Anda KALAH!!!';
    }else if(play == 'kertas'){
        hasil = (comp == 'gunting') ? 'Anda KALAH!!!' : 'Anda MENANG!!!';
    }else{
        hasil = 'Tidak ada kerena inputan salah! Harap masukkan "gunting","batu" atau "kertas"';
    }
    //tampilkan hasil
    alert('Anda memilih : '+play +' dan Komputer memilih : '+comp + '\nmaka hasilnya '+hasil)    
    tanya = confirm('lagi?');
}
alert('TERIMAKASIH SUDAH BERMAIN GAME SUIT JAWA')