class Ad {
  constructor(title, description, price, image = null) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
    this.createdAt = new Date();
  }
}

class AdsModel {
  constructor() {
    this.ads = JSON.parse(localStorage.getItem("ads")) || [];
  }

  saveAdsToLocalStorage() {
    localStorage.setItem("ads", JSON.stringify(this.ads));
  }

  addAd(title, description, price, image) {
    const ad = new Ad(title, description, price, image);
    this.ads.push(ad);
    this.saveAdsToLocalStorage();
  }

  getAllAds() {
    return this.ads;
  }

  deleteAd(index) {
    this.ads.splice(index, 1);
    this.saveAdsToLocalStorage();
  }
}
