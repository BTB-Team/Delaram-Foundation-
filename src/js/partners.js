




function changeLanguage(lang){

  if(lang === "dr"){

     document.getElementById("title1").innerText =
    "با همدیگر جوامع قوی تر بسازیم";

     document.getElementById("description1").innerText =
    "همکاری با سازمان  های جهانی برای تاثیر ماندگار از سال 214."

    document.getElementById("title2").innerText =
    "ما باهم روی پروژه کار میکنیم";

    document.getElementById("description2").innerText =
    "سازمان بین‌المللی مهاجرت با ECAO روی پروژه‌های سرپناه همکاری می‌کند.";

      document.getElementById("title3").innerText =
    "افغانستان";

    document.getElementById("description3").innerText =
    "سازمان های بین المللی مهاجرت ECAO در پروزه های سر پناه همکاری می کند";

     document.getElementById("span1").innerText =
    "فعالیت همکاران";

      document.getElementById("title4").innerText =
    "ایا دوست دارید با ما همکاری کنید؟";

     document.getElementById("description4").innerText =
    "ما همیشه به دنبال همکاری با سازمان هاییهستیم که دیدگاه ما را برای اینده بهتر در افغانستان شریک باشند";

     document.getElementById("span2").innerText =
    "شریک ما شوید";

    document.body.dir = "rtl";

  }

  else{

      document.getElementById("title1").innerText =
    "Building stronger communities tigether";

     document.getElementById("description1").innerText =
    "Collaborating with global organizations to create lasting impact since 2014";

    document.getElementById("title2").innerText =
    "We are working together on project";

    document.getElementById("description2").innerText =
    "International Organization for Migration working with ECAO on shelter projects.";

    document.getElementById("title3").innerText =
    "Afghanestan";

     document.getElementById("description3").innerText =
    "    International Organization for Migration working with ECAO on shelter projects.";

     document.getElementById("span1").innerText =
    "Active Partner";

    
      document.getElementById("title4").innerText =
    "Would you like to interested with us";

     document.getElementById("description4").innerText =
    " We're always looking to collaborate with organizations that share our vision for a better future in Afghanistan.";

     document.getElementById("span2").innerText =
    "Become a Partner";

    document.body.dir = "ltr";

  }

}






const partnerCardsData = [
  {
    icon: "./src/assets/svg/icon.svg",
    titleEn: "Afghanistan",
    titleDr: "افغانستان",
    descriptionEn: "International Organization for Migration working with ECAO on shelter projects.",
    descriptionDr: "سازمان بین‌المللی مهاجرت با ECAO روی پروژه‌های سرپناه همکاری می‌کند.",
    statusEn: "Active partner",
    statusDr: "همکار فعال"
  },
  {
    icon: "./src/assets/svg/icon.svg",
    titleEn: "Education Partner",
    titleDr: "همکار آموزشی",
    descriptionEn: "Supporting education programs and learning opportunities for young people.",
    descriptionDr: "حمایت از برنامه‌های آموزشی و فرصت‌های یادگیری برای جوانان.",
    statusEn: "Active partner",
    statusDr: "همکار فعال"
  },
  {
    icon: "./src/assets/svg/icon.svg",
    titleEn: "Community Partner",
    titleDr: "همکار اجتماعی",
    descriptionEn: "Working together to strengthen communities and create lasting impact.",
    descriptionDr: "همکاری برای تقویت جوامع و ایجاد تاثیر ماندگار.",
    statusEn: "Active partner",
    statusDr: "همکار فعال"
  }
];

function renderPartnersCards(containerId, lang = "en") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = partnerCardsData.map(card => `
    <div class="partner-card">
      <div class="partner-card__icon">
        <img src="${card.icon}" alt="${lang === "dr" ? card.titleDr : card.titleEn}">
      </div>
      <h3 class="partner-card__title">
        ${lang === "dr" ? card.titleDr : card.titleEn}
      </h3>
      <p class="partner-card__description">
        ${lang === "dr" ? card.descriptionDr : card.descriptionEn}
      </p>
      <span class="partner-card__status">
        ${lang === "dr" ? card.statusDr : card.statusEn}
      </span>
    </div>
  `).join("");
}

function renderHomePartnerCards(lang = "en") {
  renderPartnersCards("home-partners-container", lang);
}

function renderPartnersPageCards(lang = "en") {
  renderPartnersCards("partners-page-cards-container", lang);
}

window.addEventListener("load", () => {
  renderHomePartnerCards("en");
  renderPartnersPageCards("en");
});