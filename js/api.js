// Özellikle kapsam api'a lara istek atıldığında bizim kim olduğumuzu tespit edebilmek için bir options objesi  verir.Bu options objesi bizim kim olduğumuzu api'a belirtir.Bunu bir spor salonundaki üyelik kartı uygulamasına benzetebiliriz.
const options = {
          method: 'GET',
          headers: {
                    'x-rapidapi-key': '8b1e983dedmsh3268031e2c3c296p19ea34jsn5df2ab48bc52',
                    'x-rapidapi-host': 'shazam.p.rapidapi.com'
          }
};

export class API {

          //populer müzikleri Apiden  alan fonk.
          async getPopular() {
                    try {
                              //apiye istek at ve gelen veriyi projede kullanabileceğimiz formata çevir

                              const response = await fetch("https://shazam.p.rapidapi.com/search?term=kiss", options);
                              //Apiden gelen cevabı Js nesnesine çevir.

                              const data = await response.json();
                              // console.log(data);
                              //APiden gelen veriyi proje içerisinde kullanabileceğimiz formata çevirdik
                              const formattedData = data.tracks.hits.map((item) => item.track);
                              //fonskiyon çağırıldığında formattedData'yı return et
                              return formattedData;

                    } catch (error) {
                              alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
                              console.error(error); //hata konsola yazdır

                    }


          }
          //aratılan kelimeye göre  şarkıları  api'dan alan fonks.
          async getSearchMusics(query) {


                    try {
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

                    } catch (error) {
                              alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
                              console.error(error); //hata konsola yazdır

                    }

          };

};