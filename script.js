const texts = {
  tr: {
    title: "Uluslararası Yaşam Kalitesi Konferansı",
    subtitle: "Akademi, sağlık, toplum ve sürdürülebilir yaşam ekseninde uluslararası buluşma."
  },
  en: {
    title: "International Quality of Life Conference",
    subtitle: "An international gathering on quality of life."
  }
};

function setLang(lang){
  document.getElementById('title').innerText = texts[lang].title;
  document.getElementById('subtitle').innerText = texts[lang].subtitle;
}
