class AdsView {
  constructor(model) {
    this.model = model;
    this.adList = document.getElementById("ad-list");
  }

  showSuccessMessage() {
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
  }

  createEditButton(id) {
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("id", `edit-${id}`);
    editButton.addEventListener("click", () => {
      const ad = this.model.getAd(id);
      this.fillFormForEditing(ad);
    });
    return editButton;
  }

  createDeleteButton(id) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("id", `delete-${id}`);
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
      this.model.deleteAd(id);
      this.displayAds(this.model.ads);
    });
    return deleteButton;
  }

  fillFormForEditing(ad) {
    const {id, title, description, price, image, category, release} = ad;
    const adElement = document.getElementById(`ad-${id}`);
    const titleElement = document.getElementById(`title-${id}`);
    const descriptionElement = document.getElementById(`description-${id}`);
    const priceElement = document.getElementById(`price-${id}`);
    const imageElement = document.getElementById(`image-${id}`);
    const categoryElement = document.getElementById(`category-${id}`);
    const releaseElement = document.getElementById(`release-${id}`);

    const labelForTitle = document.createElement("label");
    const labelForDescription = document.createElement("label");
    const labelForPrice = document.createElement("label");
    const labelForCategory = document.createElement("label");
    const labelForRelease = document.createElement("label");
    const labelForImage = document.createElement("label");

    labelForTitle.outerHTML = `<label for="title" id="label-title">Title</label>`;
    adElement.insertBefore(labelForTitle, titleElement);
    titleElement.outerHTML = `<input type="text" id="title-${id}" class="ad-input" value="${title}">`;

    adElement.insertBefore(labelForDescription, descriptionElement);
    labelForDescription.outerHTML = `<label for="description" id="label-description">Description</label>`;
    descriptionElement.outerHTML = `<input type="text" id="description-${id}"  class="ad-input ad-textarea" value="${description}">`;

    adElement.insertBefore(labelForPrice, priceElement);
    labelForPrice.outerHTML = `<label for="price" id="label-price">Price</label>`;
    priceElement.outerHTML = `<input type="number" id="price-${id}" class="ad-input" value="${price}">`;

    adElement.insertBefore(labelForCategory, categoryElement);
    labelForCategory.outerHTML = `<label for="category" id="label-category">Category</label>`;
    categoryElement.outerHTML = `
<select id="category-${id}" class="ad-input">
  <option value="Drug" ${category === "Drug" ? "selected" : ""}>Drug</option>
  <option value="Phone" ${category === "Phone" ? "selected" : ""}>Phone</option>
  <option value="Car" ${category === "Car" ? "selected" : ""}>Car</option>
  <option value="Animal" ${
    category === "Animal" ? "selected" : ""
  }>Animal</option>
</select>`;

    adElement.insertBefore(labelForRelease, releaseElement);
    labelForRelease.outerHTML = `<label for="release" id="label-release">Release</label>`;
    releaseElement.outerHTML = `<input type="number" id="release-${id}" class="ad-input" value="${release}">`;

    adElement.insertBefore(labelForImage, imageElement);
    labelForImage.outerHTML = `<label for="imageURL" id="label-image">Image URL</label>`;
    imageElement.outerHTML = `<input type="text" id="image-${id}" class="ad-input" value="${
      image || ""
    }">`;

    const editButton = document.getElementById(`edit-${id}`);
    const deleteButton = document.getElementById(`delete-${id}`);
    editButton.remove();
    deleteButton.remove();

    const acceptButton = document.createElement("button");
    acceptButton.textContent = "Accept";
    acceptButton.addEventListener("click", () => {
      const title = document.getElementById(`title-${id}`).value;
      const description = document.getElementById(`description-${id}`).value;
      const price = document.getElementById(`price-${id}`).value;
      const imageURL = document.getElementById(`image-${id}`).value;
      const category = document.getElementById(`category-${id}`).value;
      const release = document.getElementById(`release-${id}`).value;
      this.model.editAd(
        id,
        title,
        description,
        price,
        imageURL,
        category,
        release
      );
      this.displayAds(this.model.ads);
    });
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.classList.add("cancel-button");
    cancelButton.addEventListener("click", () => {
      this.displayAds(this.model.ads);
    });

    adElement.appendChild(acceptButton);
    adElement.appendChild(cancelButton);
  }

  displayAds(ads) {
    this.adList.innerHTML = "";
    ads.forEach((ad) => {
      const {id, title, description, price, category, image, release} = ad;
      const adElement = document.createElement("div");
      adElement.setAttribute("id", `ad-${id}`);
      adElement.classList.add("ad");

      const titleElement = document.createElement("h3");
      titleElement.textContent = title;
      titleElement.setAttribute("id", `title-${id}`);
      adElement.appendChild(titleElement);

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = description;
      descriptionElement.setAttribute("id", `description-${id}`);
      adElement.appendChild(descriptionElement);

      const priceElement = document.createElement("p");
      priceElement.textContent = `Price: ${price}`;
      priceElement.setAttribute("id", `price-${id}`);
      adElement.appendChild(priceElement);

      const categoryElement = document.createElement("p");
      categoryElement.textContent = `Category: ${category}`;
      categoryElement.setAttribute("id", `category-${id}`);
      adElement.appendChild(categoryElement);

      const releaseElement = document.createElement("p");
      releaseElement.textContent = `Release: ${release}`;
      releaseElement.setAttribute("id", `release-${id}`);
      adElement.appendChild(releaseElement);

      const imageElement = document.createElement("img");
      imageElement.src = image;
      imageElement.alt = "Ad Image";
      imageElement.setAttribute("id", `image-${id}`);
      adElement.appendChild(imageElement);

      const editButton = this.createEditButton(id);
      adElement.appendChild(editButton);

      const deleteButton = this.createDeleteButton(id);
      adElement.appendChild(deleteButton);

      this.adList.appendChild(adElement);
    });
  }

  clearInputs() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("imageURL").value = "";
    document.getElementById("category").value = "";
  }
}

const model = new AdsModel();
const view = new AdsView(model);
