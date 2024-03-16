class AdsController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  addAd(title, description, price, imageURL, category) {
    this.model.addAd(title, description, price, imageURL, category);
    this.view.clearInputs();
    this.view.displayAds(this.model.getAllAds());
    this.view.showSuccessMessage();
  }

  deleteAd(index) {
    this.model.deleteAd(index);
    this.view.displayAds(this.model.getAllAds());
  }

  editAd(adIndex, title, description, price, imageURL) {
    this.model.editAd(adIndex, title, description, price, imageURL);
    this.view.displayAds(this.model.getAllAds());
  }
}

const dummy_data = [
  {
    title: "Cat",
    description: "Brown cat",
    price: "500",
    category: "Lost",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2814000%2Fpexels-photo-2814000.jpeg%3Fcs%3Dsrgb%26dl%3Dbrown-tabby-cat-2814000.jpg%26fm%3Djpg&f=1&nofb=1&ipt=c1d777edea5c6445e5eb952c84c6f01076f43cb99db4e95c36a06336f5513741&ipo=images",
  },
  {
    title: "Dog",
    description: "Black dog",
    price: "1000",
    category: "Lost",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjooinn.com%2Fimages%2Fblack-dog-portrait-2.jpg&f=1&nofb=1&ipt=4526cb5141be12542e85089128701b198a449e01fe08d31f3a795e9567be9ee3&ipo=images",
  },
  {
    title: "Bird",
    description: "Yellow bird",
    price: "200",
    category: "Found",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.download.ams.birds.cornell.edu%2Fapi%2Fv1%2Fasset%2F44314641%2F1800&f=1&nofb=1&ipt=633b68f2efe7a93167fe940ce4adabb691ffcfb76e7f92a74e5154c239b7ae1c&ipo=images",
  },
  {
    title: "Rabbit",
    description: "White rabbit",
    price: "300",
    category: "Found",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F3761639.jpg&f=1&nofb=1&ipt=cc37d9f9ef2cc84a438cc44cc93619a5fbee689d1660fe26f6f18083ed57a4f5&ipo=images",
  },
  {
    title: "Hamster",
    description: "Brown hamster",
    price: "100",
    category: "Lost",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F21%2Fa0%2F57%2F21a057af5ea8dd2dc4f5359c96bda757.jpg&f=1&nofb=1&ipt=490cd39a97afe88d60ce863463071c6a89569002eeec86d2fac777babb1d9e44&ipo=images",
  },
  {
    title: "Fish",
    description: "Gold fish",
    price: "50",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fishkeepingworld.com%2Fwp-content%2Fuploads%2F2019%2F10%2FGoldfish-A-Z-Best-Types-Of-Goldfish-Single-Tail-And-Fancy-Banner.jpg&f=1&nofb=1&ipt=7afacadd7fc3f874afe4308a803bf0e2f092cc2a5f442301b0ad903d38265b91&ipo=images",
  },
  {
    title: "Turtle",
    description: "Green turtle",
    price: "150",
    category: "Found",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thoughtco.com%2Fthmb%2F7GrX-92o9Rp9-w8pGXRsjen2dKo%3D%2F3859x2583%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fgreenturtlegetty-56ac215d5f9b58b7d00a5261.jpg&f=1&nofb=1&ipt=485670501bf5979e12617f5a4fdba78a04c61baf815f81cee410269752534a91&ipo=images",
  },
  {
    title: "Snake",
    description: "Black snake",
    price: "200",
    category: "Lost",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F29%2F125629-050-F944A851%2FBlack-snake.jpg&f=1&nofb=1&ipt=69a8bf486c018e70b26671221a3de8f7f43153e76dd4d0791a51319263943b58&ipo=images",
  },
  {
    title: "Lizard",
    description: "Blue lizard",
    price: "250",
    category: "Lost",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F2%2F1-blue-crested-lizard-laura-j-p-richardson.jpg&f=1&nofb=1&ipt=12f71c834791fd80589fedbac2e1609b437e3d503b6566f3565f7f718e78e08b&ipo=images",
  },
  {
    title: "Monkey",
    description: "Brown monkey",
    price: "300",
    category: "Found",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3839695%2Fpexels-photo-3839695.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D650%26w%3D940&f=1&nofb=1&ipt=023810f617e922f6548b3d5949e01b2ce021ba3afc41a19cadf00d75c357f234&ipo=images",
  },
];

document.addEventListener("DOMContentLoaded", (event) => {
  localStorage.setItem("ads", JSON.stringify(dummy_data));
});

const controller = new AdsController(new AdsModel(), new AdsView());
