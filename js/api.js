// Özellikle kapsam api'a lara istek atıldığında bizim kim olduğumuzu tespit edebilmek için bir options objesi  verir.Bu options objesi bizim kim olduğumuzu api'a belirtir.Bunu bir spor salonundaki üyelik kartı uygulamasına benzetebiliriz.
const options = {
          method: 'GET',
          headers: {
                    'x-rapidapi-key': 'f4a4a70765msh66883dcb5a788a9p1c9303jsn525125bf3efa',
                    'x-rapidapi-host': 'shazam.p.rapidapi.com',
          },
};

export class API {

          //populer müzikleri Apiden  alan fonk.
          async getPopular() {
                    //apiye istek at
                    const response = await fetch("https://shazam.p.rapidapi.com/search?term=metallica", options);
                    //Apiden gelen cevabı Js nesnesine çevir.

                    const data = await response.json();
                    console.log(data);
                    //APiden gelen veriyi proje içerisinde kullanabileceğimiz formata çevirdik
                    const formattedData = data.tracks.hits.map((item) => item.track);
                    //fonskiyon çağırıldığında formattedData'yı return et
                    return formattedData;
          }
          //aratılan kelimeye göre  şarkıları  api'dan alan fonks.
          async getSearchMusics(query) {
                    //apiye istek at
                    const res = await fetch(
                              `https://shazam.p.rapidapi.com/search?term=${query}`, options

                    );
                    //Apiden gelen cevabı Js nesnesine çevir.
                    const data = await res.json();
                    //APiden gelen veriyi proje içerisinde kullanabileceğimiz formata çevirdik
                    const formattedData = data.tracks.hits.map((item) => item.track);
                    //fonskiyon çağırıldığında formattedData'yı return et
                    return formattedData;

          };

};