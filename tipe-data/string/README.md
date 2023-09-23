string adalah kumpulan kosong atau lebih karakter yang dibungkus dengan menggunakan petik dua (") atau petik satu (').

string juga bisa digabungkan dari beberapa string menggunakan karakter +.

javascript juga mendukung fitur escape sequence seperti tab, enter, kutip dua, kutip satu dll.
berikut beberapa escape sequence yang didukung javascript

|escape sequence|keterangan|
|---------------|----------|
|\n|enter|
|\t|tab|
|\'|'|
|\"|"|
| \\\ | \ |

pada kasus tertentu penggunaan karakter + untuk menambahkan beberapa data kedalam string sangat menyulitkan, apalagi dalam jumplah banyak. 
untuk mengatasi masalah tersebut, kita bisa menggunakan fitur string template, dimana kita bisa mensubstitusi data dari luar string ke string, atau bahkan melakukan operasi matematika.

untuk menggunakan string template, cara pembuatan stringnya harus disimpan di dalam backtick (`).
untuk mengambil variabel ataupun melakukan operasi matematika didalam string template, maka harus disimpan didalam `${tempat menaruh data / operasi matematika}`.

string template juga bisa digunakan untuk membuat string multiline, kita cukup menambahkan enter saja, ataupun untuk menambahkan tab, kita cukup menekan tab saja.