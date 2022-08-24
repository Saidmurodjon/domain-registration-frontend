const lan = "uz";
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
      url: "./assets/Domain names-amico.png",
      title: "DOMENINGIZNI TEZ VA QULAY RO‘YXATDAN O‘TKAZING",
      about: "600 MB hosting+domen Marketing uchun yangi imkoniyat",
    },
    {
      url: "./assets/site.png",
      title: "SAYT YARATIB BERISH XIZMATI",
      about: "Istagingiz va didingizga mos keladigan saytga buyurtma bering",
    },
  ],
};
const ru = {
  category: [
    { name: "Bosh sahifa ru", slug: "" }
  ],
  sliderData: [
    {
      url: "./assets/Cloud hosting-amico.png",
      title: "ISHONCHLI HOSTING XIZMATI",
      about:
        "-haftasiga 7 kun   24 soat uzluksiz -rezerevda saqlash -cheksiz internet trafik",
    },
    {
      url: "./assets/Domain names-amico.png",
      title: "DOMENINGIZNI TEZ VA QULAY RO‘YXATDAN O‘TKAZING",
      about: "600 MB hosting+domen Marketing uchun yangi imkoniyat",
    },
    {
      url: "./assets/site.png",
      title: "SAYT YARATIB BERISH XIZMATI",
      about: "Istagingiz va didingizga mos keladigan saytga buyurtma bering",
    },
  ],
};
export default lan === "uz" ? uz : lan === "ru"?ru:[]
