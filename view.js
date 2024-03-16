class AdsView {
  constructor(model) {
    this.model = model;
    this.adList = document.getElementById("ad-list");
  }

  showSuccessMessage() {
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
  }

  createEditButton(adIndex) {
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("id", `edit-${adIndex}`);
    editButton.addEventListener("click", () => {
      const ad = this.model.getAd(adIndex);
      this.fillFormForEditing(ad, adIndex);
    });
    return editButton;
  }

  createDeleteButton(adIndex) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("id", `delete-${adIndex}`);
    deleteButton.addEventListener("click", () => {
      this.model.deleteAd(adIndex);
      this.displayAds(this.model.ads);
    });
    return deleteButton;
  }

  fillFormForEditing(ad, adIndex) {
    const titleElement = document.getElementById(`title-${adIndex}`);
    const descriptionElement = document.getElementById(
      `description-${adIndex}`
    );
    const priceElement = document.getElementById(`price-${adIndex}`);
    const imageElement = document.getElementById(`image-${adIndex}`);
    const categoryElement = document.getElementById(`category-${adIndex}`);

    titleElement.outerHTML = `<input type="text" id="title-${adIndex}" class="ad-input" value="${ad.title}">`;
    descriptionElement.outerHTML = `<input type="text" id="description-${adIndex}"  class="ad-input ad-textarea" value="${ad.description}">`;
    priceElement.outerHTML = `<input type="number" id="price-${adIndex}" class="ad-input" value="${ad.price}">`;
    categoryElement.outerHTML = `<input type="text" id="category-${adIndex}" class="ad-input" value="${ad.category}">`;
    imageElement.outerHTML = `<input type="text" id="image-${adIndex}" class="ad-input" value="${
      ad.image || ""
    }">`;

    const editButton = document.getElementById(`edit-${adIndex}`);
    const deleteButton = document.getElementById(`delete-${adIndex}`);
    editButton.remove();
    deleteButton.remove();

    const acceptButton = document.createElement("button");
    acceptButton.textContent = "Accept";
    acceptButton.addEventListener("click", () => {
      const title = document.getElementById(`title-${adIndex}`).value;
      const description = document.getElementById(
        `description-${adIndex}`
      ).value;
      const price = document.getElementById(`price-${adIndex}`).value;
      const imageURL = document.getElementById(`image-${adIndex}`).value;
      this.model.editAd(adIndex, title, description, price, imageURL);
      this.displayAds(this.model.ads);
    });
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
      this.displayAds(this.model.ads);
    });

    const adElement = document.getElementById(`ad-${adIndex}`);
    adElement.appendChild(acceptButton);
    adElement.appendChild(cancelButton);
  }

  displayAds(ads) {
    this.adList.innerHTML = "";
    ads.forEach((ad, index) => {
      const adElement = document.createElement("div");
      adElement.setAttribute("id", `ad-${index}`);
      adElement.classList.add("ad");

      const titleElement = document.createElement("h3");
      titleElement.textContent = ad.title;
      titleElement.setAttribute("id", `title-${index}`);
      adElement.appendChild(titleElement);

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = ad.description;
      descriptionElement.setAttribute("id", `description-${index}`);
      adElement.appendChild(descriptionElement);

      const priceElement = document.createElement("p");
      priceElement.textContent = `Price: ${ad.price}`;
      priceElement.setAttribute("id", `price-${index}`);
      adElement.appendChild(priceElement);

      const categoryElement = document.createElement("p");
      categoryElement.textContent = `Category: ${ad.category}`;
      categoryElement.setAttribute("id", `category-${index}`);
      adElement.appendChild(categoryElement);

      if (ad.image) {
        const imageElement = document.createElement("img");
        imageElement.src = ad.image;
        imageElement.alt = "Ad Image";
        imageElement.setAttribute("id", `image-${index}`);
        adElement.appendChild(imageElement);
      }

      const editButton = this.createEditButton(index);
      adElement.appendChild(editButton);

      const deleteButton = this.createDeleteButton(index);
      adElement.appendChild(deleteButton);

      this.adList.appendChild(adElement);
    });
  }

  clearInputs() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("imageURL").value = "";
  }
}

const model = new AdsModel();
const view = new AdsView(model);
