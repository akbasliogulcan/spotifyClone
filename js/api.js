// Özellikle kapsam api'a lara istek atıldığında bizim kim olduğumuzu tespit edebilmek için bir options objesi  verir.Bu options objesi bizim kim olduğumuzu api'a belirtir.Bunu bir spor salonundaki üyelik kartı uygulamasına benzetebiliriz.
const options = {
          method: "GET",
          headers: {
                    "x-rapidapi-key": "e52e3bfef4msh2b3dc66d0cfb4a8p16624ejsn1c91d9af0240",
                    "x-rapidapi-host": "shazam.p.rapidapi.com",
          },
};

export class API {

          //populer müzikleri Apiden  alan fonk.
          async getPopular() {
                    //apiye istek at
                    const response = await fetch("https://shazam.p.rapidapi.com/search?term=duman", options);

                    //Apiden gelen cevabı Js nesnesine çevir.
                    const data = await response.json();

                    //APiden gelen veriyi proje içerisinde kullanabileceğimiz formata çevirdik
                    const formattedData = data.tracks.hits.map((item) => item.track);
                    return formattedData;
          };


}; 