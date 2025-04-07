export class UI {
  //kurucu method
  constructor() {
    //Html'den elemanlara eriş
    this.list = document.querySelector('#list');
    this.form = document.querySelector("form");
    this.title = document.querySelector("#title");
    this.player = document.querySelector(".player");
  };

  //apidan gelen şarkı verilerene göre arayüzü renderlayan foksinyon
  renderCard(songs) {  //songs parametresi dışarıdan gelen şarkı verisini temsil ediyor.
    //htmldeki şarkı listelenen alanın içeriğini sıfırla
    this.list.innerHTML = ""; //html'deki liste elemanının içeriğini sıfırla.Bunu yapmamızın nedeni her seferinde yeni bir veri geldiğinde eski verilerin silinmesi ve yeni verilerin eklenmesidir.

    //Dışarıdan verilen şarkı verisini kullanarak  herbir şarkı için bir html oluştur
    songs.forEach((song) => {
      // console.log(song);   //şarkı verisini konsola yazdır
      //bir tane card elemanı oluştur
      const card = document.createElement("div");

      //oluşturulan  elemana card class'ı ekle.Bunu yapnmamızın nedeni card clasının css de özellikler içermesi
      card.classList.add("card");

      //*Card'a şarkıya ait resim müzik şarkı adı ve  şarkıcı veya  şarkı gurubu adı bilgilerini ata 
      // console.log(song);   //şarkı verisini konsola yazdır ,bunu yazmamızın nedeni şarkı verisini incelemek ve hangi özelliklerin olduğunu görmek için
      //oluşturulan card elemanına şarkı bilgilerini ekle
      //aşapıda kartı oluşturuyoruz
      card.dataset.title = song.title;
      card.dataset.subtitle = song.subtitle;
      card.dataset.image = song.images.coverarthq;
      card.dataset.mp3 = song.hub.actions[1].uri;



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


  // Animasyon ekleyen fonksiyon
  toggleAnimation() {
    // Player içerisindeki image'e erişmeli
    const image = document.querySelector(".info img");
    // Erişilen resime eğer animate classı yoksa bunu ekle varsa bunu kaldır
    image.classList.toggle("animate");
  }


  //player dinamik renderlayan fonsk.
  renderPlayer(song) {

    //player kısmının içeriğini dışarıdan parametre olarak verilen değer ile dinamik renderla
    this.player.innerHTML = ` 
    <div class="info">
      <img
        src="${song.image}"
        alt=""
      />
      <div>
        <h5>${song.title}</h5>
        <p>${song.subtitle}</p>
      </div>
    </div>


    <audio
      controls
      autoplay
      src="${song.mp3}"
    ></audio>


    <div class="icons">
      <i class="bi bi-music-note-list"></i>
      <i class="bi bi-boombox"></i>
      <i class="bi bi-pc-display"></i>
    </div>`;

    // Şarkı resminin oynatılma durumuna bağlı olarak resime bir animasyon ekleyebilmek için audio etiketine play ve pause addEventListenerları eklemeliyiz.
    const audio = document.querySelector("audio");
    audio.addEventListener("play", this.toggleAnimation);
    audio.addEventListener("pause", this.toggleAnimation);
  };







};