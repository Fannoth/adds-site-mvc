class AdsController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  addAd(title, description, price, imageURL) {
    this.model.addAd(title, description, price, imageURL);
    this.view.clearInputs();
    this.view.displayAds(this.model.getAllAds());
    this.view.showSuccessMessage();
  }

  deleteAd(index) {
    this.model.deleteAd(index);
    this.view.displayAds(this.model.getAllAds());
  }
}

const model = new AdsModel();
const view = new AdsView();
const controller = new AdsController(model, view);
