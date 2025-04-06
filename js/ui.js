export class UI {
  //kurucu method
  constructor() {
    //Html'den elemanlara eriş
    this.list = document.querySelector('#list');
    this.form = document.querySelector("form");
    this.title = document.querySelector("#title");
  };

  //apidan gelen şarkı verilerene göre arayüzü renderlayan foksinyon
  renderCard(songs) {  //songs parametresi dışarıdan gelen şarkı verisini temsil ediyor.
    //htmldeki şarkı listelenen alanın içeriğini sıfırla
    this.list.innerHTML = ""; //html'deki liste elemanının içeriğini sıfırla.Bunu yapmamızın nedeni her seferinde yeni bir veri geldiğinde eski verilerin silinmesi ve yeni verilerin eklenmesidir.

    //Dışarıdan verilen şarkı verisini kullanarak  herbir şarkı için bir html oluştur
    songs.forEach((song) => {
      console.log(song);   //şarkı verisini konsola yazdır
      //bir tane card elemanı oluştur
      const card = document.createElement("div");

      //oluşturulan  elemana card class'ı ekle.Bunu yapnmamızın nedeni card clasının css de özellikler içermesi
      card.classList.add("card");

      //oluşturulan elemanın Html'ini belirle 
      card.innerHTML = `  <figure>
                                                                     
                                                                      <img src="${song.images.coverarthq} " alt="card-image"/>

                                                                      
                                                                      <div class="play">
                                                                                <i class="bi bi-play-fill"></i>
                                                                      </div>
                                                            </figure>
                                                            <div class="card-info">
                                                                      <h4>${song.title} </h4>
                                                                      <h4>${song.subtitle} </h4>
                                                            </div>`;

      //oluşturulan ve içeriği belirlenen  ve class atanan cardları html kısmındaki liste içerisine aktar
      //this kullanmamızın nedeni class içerisinde tanımlanan list elemanına erişim sağlamak.
      this.list.appendChild(card);
    });



  };

  //loader render eden fonskiyon
  renderLoader() {
    this.list.innerHTML = ` 
<!-- From Uiverse.io by JkHuger --> 
<div class="section-center">
  <div class="section-path">
    <div class="globe">
      <div class="wrapper">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
 </div>`;
  }



};