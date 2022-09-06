const features = document.querySelector("[data-feature]");
const company = document.querySelector("[data-company]");
const menuFeatures = document.querySelector(".featuresMenu");
const menuCompany = document.querySelector(".companyMenu");
const featuresArrow = document.querySelector("#features-arrow");
const companyArrow = document.querySelector("#company-arrow");

const showSubMenuFeatures = () => {
  menuFeatures.classList.toggle("show-sub-menu");
  if (menuFeatures.classList.contains("show-sub-menu")) {
    featuresArrow.setAttribute("src", "./assets/images/icon-arrow-up.svg");
  } else {
    featuresArrow.setAttribute("src", "./assets/images/icon-arrow-down.svg");
  }
};

const showSubMenuCompany = () => {
  menuCompany.classList.toggle("show-sub-menu");
  if (menuCompany.classList.contains("show-sub-menu")) {
    companyArrow.setAttribute("src", "./assets/images/icon-arrow-up.svg");
  } else {
    companyArrow.setAttribute("src", "./assets/images/icon-arrow-down.svg");
  }
};

features.addEventListener("click", showSubMenuFeatures);
company.addEventListener("click", showSubMenuCompany);
