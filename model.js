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

  addAd(title, description, price, image, category) {
    const ad = new Ad(title, description, price, image, category);
    this.ads.push(ad);
    this.saveAdsToLocalStorage();
  }

  getAd(index) {
    return this.ads[index];
  }

  getAllAds() {
    return this.ads;
  }

  sortAdsByTitleAZ(ads) {
    return ads.sort((a, b) => a.title.localeCompare(b.title));
  }

  sortAdsByTitleZA(ads) {
    return ads.sort((a, b) => b.title.localeCompare(a.title));
  }

  sortAdsByLowestPrice(ads) {
    return ads.sort((a, b) => a.price - b.price);
  }

  sortAdsByHighestPrice(ads) {
    return ads.sort((a, b) => b.price - a.price);
  }

  filterAndSortAds(title, minPrice, maxPrice, category, sortCriteria) {
    let result = this.ads;

    if (title) {
      result = result.filter((ad) => ad.title.includes(title));
    }

    if (minPrice || maxPrice) {
      result = result.filter(
        (ad) => ad.price >= minPrice && ad.price <= maxPrice
      );
    }

    if (category) {
      result = result.filter((ad) => ad.category === category);
    }

    switch (sortCriteria) {
      case "title-A-Z":
        result = this.sortAdsByTitleAZ(result);
        break;
      case "title-Z-A":
        result = this.sortAdsByTitleZA(result);
        break;
      case "lowest-price":
        result = this.sortAdsByLowestPrice(result);
        break;
      case "highest-price":
        result = this.sortAdsByHighestPrice(result);
        break;
    }

    return result;
  }

  deleteAd(index) {
    this.ads.splice(index, 1);
    this.saveAdsToLocalStorage();
  }
  editAd(index, title, description, price, image) {
    this.ads[index].title = title;
    this.ads[index].description = description;
    this.ads[index].price = price;
    this.ads[index].image = image;
    this.saveAdsToLocalStorage();
  }
}
