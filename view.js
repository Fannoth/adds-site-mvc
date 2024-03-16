class AdsView {
  constructor() {
    this.adList = document.getElementById("ad-list");
  }

  displayAds(ads) {
    this.adList.innerHTML = "";
    ads.forEach((ad, index) => {
      const adElement = document.createElement("div");
      adElement.classList.add("ad");

      const titleElement = document.createElement("h3");
      titleElement.textContent = ad.title;
      adElement.appendChild(titleElement);

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = ad.description;
      adElement.appendChild(descriptionElement);

      const priceElement = document.createElement("p");
      priceElement.textContent = `Price: ${ad.price}`;
      adElement.appendChild(priceElement);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        controller.deleteAd(index);
      });
      adElement.appendChild(deleteButton);

      this.adList.appendChild(adElement);
    });
  }

  clearInputs() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
  }
}

const view = new AdsView();
const model = new AdsModel();
const controller = new AdsController(model, view);

view.displayAds(model.getAllAds());
