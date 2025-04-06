//API  clasını import et
import { API } from "./api.js";
//UI clasını import et
import { UI } from "./ui.js";

//API Classını   yapısını kullanabilmek için bunun örneğini al
const api = new API();
//UI Classını   yapısını kullanabilmek için bunun örneğini al
const ui = new UI();


//!sayfa yüklendiği an api isteği at.
document.addEventListener("DOMContentLoaded", async () => {


          //loaderı render et
          ui.renderLoader();
          //API'den popüler müzikleri al ve data değişkenine ata
          const data = await api.getPopular();
          //API'den gelen veriyi ile  cardları renderla
          ui.renderCard(data);
});

//!form gönderildiğinde inputtaki değere eriş ve apiden inputtaki kelimeye ait şarkıları al
ui.form.addEventListener("submit", async (e) => {
          //form gönderildiğinde sayfanın yenilenmesini engelle  çünkü animasyonun çıkmasını istiyoruz     
          e.preventDefault();
          const query = (e.target[0].value); //inputtaki değeri al ve konsola yazdır

          //eğer query değeri yoksa api isteği atma ve kullanıcıya bir uyarı ver
          if (!query.trim()) { //trim() metodu boşlukları temizler
                    alert("Lütfen bir kelime giriniz.");
                    //fons.durdur
                    return;
          }

          //loaderı render et
          ui.renderLoader();

          //titile dinamik şekilde renderla
          ui.title.innerText = `${query} İçin Sonuçlar`;

          //form içerisinden elde edilen query değeri ile  apiden istek at ve gelen veriyi data değişkenine ata
          const data = await api.getSearchMusics(query);

          //aratılan şarkıları arayüzde render et
          ui.renderCard(data);
});


