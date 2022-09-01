const uz = {
  category: [
    { name: "Bosh sahifa", slug: "" },
    { name: "Domen", slug: "domen" },
    { name: "Hosting", slug: "hosting" },
    { name: "Pochta", slug: "pochta" },
    { name: "Sayt", slug: "sayt" },
    { name: "Aloqa", slug: "aloqa" },
  ],
  sliderData: [
    {
      url: "./assets/Cloud hosting-amico.png",
      title: "ISHONCHLI HOSTING XIZMATI",
      about:
        "-haftasiga 7 kun   24 soat uzluksiz -rezerevda saqlash -cheksiz internet trafik",
    },
    {
      url: "./assets/Domain.png",
      title: "DOMENINGIZNI TEZ VA QULAY RO‘YXATDAN O‘TKAZING",
      about: "600 MB hosting+domen Marketing uchun yangi imkoniyat",
    },
    {
      url: "./assets/site.png",
      title: "SAYT YARATIB BERISH XIZMATI",
      about: "Istagingiz va didingizga mos keladigan saytga buyurtma bering",
    },
  ],
  headerCard: [
    {
      url: "./assets/headerCard/domain.png",
      title: "Domenni ro‘yxatdan o‘tkazish",
      info: "Milliy domen bilan biznesga ilk qadam ",
    },
    {
      url: "./assets/headerCard/hosting.png",
      title: "Ishonchli hosting xizmati",
      info: "Ishlash uchun qulaylik haftasiga 7 kun 24 soat uzluksiz",
    },
    {
      url: "./assets/headerCard/site.png",
      title: "Websaytlar yaratib berish",
      info: "Istalgan murakkablikdagi saytlar biz uchun sifat birinchi o‘rinda",
    },
  ],
};
const ru = {
  category: [
    { name: "Bosh sahifa ru", slug: "" },
    { name: "Domen", slug: "domen" },
    { name: "Hosting", slug: "hosting" },
    { name: "Pochta", slug: "pochta" },
    { name: "Sayt", slug: "sayt" },
    { name: "Aloqa", slug: "aloqa" },
  ],
  sliderData: [
    {
      url: "./assets/Cloud hosting-amico.png",
      title: "ISHONCHLI HOSTING XIZMATI",
      about:
        "-haftasiga 7 kun   24 soat uzluksiz -rezerevda saqlash -cheksiz internet trafik",
    },
    {
      url: "./assets/Domain.png",
      title: "DOMENINGIZNI TEZ VA QULAY RO‘YXATDAN O‘TKAZING",
      about: "600 MB hosting+domen Marketing uchun yangi imkoniyat",
    },
    {
      url: "./assets/site.png",
      title: "SAYT YARATIB BERISH XIZMATI",
      about: "Istagingiz va didingizga mos keladigan saytga buyurtma bering",
    },
  ],
  headerCard: [
    {
      url: "./assets/headerCard/domain.png",
      title: "Domenni ro‘yxatdan o‘tkazish",
      info: "Milliy domen bilan biznesga ilk qadam ",
    },
    {
      url: "./assets/headerCard/hosting.png",
      title: "Ishonchli hosting xizmati",
      info: "Ishlash uchun qulaylik haftasiga 7 kun 24 soat uzluksiz",
    },
    {
      url: "./assets/headerCard/site.png",
      title: "Websaytlar yaratib berish",
      info: "Istalgan murakkablikdagi saytlar biz uchun sifat birinchi o‘rinda",
    },
  ],
};
var language = localStorage.getItem("language");
window.addEventListener("language", () => {
  window.location.reload(false); 
});

export default language === "uz" ? uz : language === "ru" ? ru : [];
