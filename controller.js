class AdsController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  addAd(title, description, price) {
    this.model.addAd(title, description, price);
    this.view.clearInputs();
    this.view.displayAds(this.model.getAllAds());
  }

  deleteAd(index) {
    this.model.deleteAd(index);
    this.view.displayAds(this.model.getAllAds());
  }
}
