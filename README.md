## Skilvul Technical Project Assignment (TPA) #3 - Movie App with TMDB API

### Specs

1. membuat aplikasi website yang menampilkan list Movie menggunakan data external API [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction)

2. Page menampilkan list movie (judul, overview, tanggal rilis, dan rating) dengan kategori terpopuler.

3. untuk membatasi list movie yang akan ditampilkan, kita akan menggunakan query string `page` yang disediakan pada [documentation](https://developers.themoviedb.org/3/discover/movie-discover), sehingga endpoint yang digunakan menjadi seperti lampiran 'fetch' di bawah

4. Untuk fitur search, digunakan fetch URL pada lampiran 'search' di bawah. atau sesuai yang ada pada [documentation](https://developers.themoviedb.org/3/search/search-movies)

5. Tampilan website dibuat menggunakan HTML5, JS dan Bootstrap

6. Tampilan sudah responsif

### Fitur

1. halaman yang pertama dikunjungi disebut homepage, menampilkan navbar yang berisi logo 'Skilmovie' dan search bar, dibawahnya terdapat list film

2. apabila hendak mencari film, ginakan fitur search bar pada pojok atas kanan
3. apabila hendakkembali ke homepage, tekan logo Skilmovie di pojok kiri atas

### Lampiran

-   API Key (v3 auth) : fa5d5abd2e9cb85ddc41a029e999ecd3

-   API Read Access Token (v4 auth) : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTVkNWFiZDJlOWNiODVkZGM0MWEwMjllOTk5ZWNkMyIsInN1YiI6IjYzNDU2Njc1NmEzMDBiMDA5MWEwNzJmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LK2NihC6agIWc02Szd2U9APz9xdnYjKyfYl9c8HaXJ8

-   fetch : https://api.themoviedb.org/3/discover/movie?api_key=fa5d5abd2e9cb85ddc41a029e999ecd3&sort_by=popularity.desc&page=1

-   search : https://api.themoviedb.org/3/search/movie?api_key=fa5d5abd2e9cb85ddc41a029e999ecd3&query=${input.value}&page=1
