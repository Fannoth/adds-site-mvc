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

  deleteAd(id) {
    this.model.deleteAd(id);
    this.view.displayAds(this.model.getAllAds());
  }

  editAd(id, title, description, price, imageURL, category, release) {
    this.model.editAd(
      id,
      title,
      description,
      price,
      imageURL,
      category,
      release
    );
    this.view.displayAds(this.model.getAllAds());
  }
}

const dummy_data = [
  {
    id: 1,
    title: "Huawei",
    description: "Huawei MediaPad T2 7.0",
    release: 2016,
    category: "Phone",
    image: "images/huawei-mediapad-t2.jpg",
    price: 26284,
  },
  {
    id: 2,
    title: "Allview",
    description: "Allview P7 Xtreme",
    release: 2014,
    category: "Phone",
    image: "images/p7_xtreme_semiprofil_white_1_1.jpg",
    price: 114143,
  },
  {
    id: 3,
    title: "Celkon",
    description: "Celkon C44",
    release: 2011,
    category: "Phone",
    image: "images/images.jpg",
    price: 85618,
  },
  {
    id: 4,
    title: "Panasonic",
    description: "Panasonic P101",
    release: 2018,
    category: "Phone",
    image: "images/panasonic-p101.jpg",
    price: 103877,
  },
  {
    id: 5,
    title: "Sony",
    description: "Sony Ericsson Z320",
    release: 2007,
    category: "Phone",
    image: "images/153004_0_i300.jpg",
    price: 172241,
  },
  {
    id: 6,
    title: "LG",
    description: "LG KT520",
    release: 2008,
    category: "Phone",
    image: "images/images (1).jpg",
    price: 78973,
  },
  {
    id: 7,
    title: "Huawei",
    description: "Huawei Ascend G700",
    release: 2013,
    category: "Phone",
    image:
      "images/HUAWEI_Ascend_G700.jpg",
    price: 24293,
  },
  {
    id: 8,
    title: "Lava",
    description: "Lava Iris X1 Atom S",
    release: 2015,
    category: "Phone",
    image:
      "images/lava_iris_x1_atom_s.jpg",
    price: 165597,
  },
  {
    id: 9,
    title: "Samsung",
    description: "Samsung SGH-500",
    release: 1998,
    category: "Phone",
    image:
      "images/samsung-sgh-d500-02.jpg",
    price: 143185,
  },
  {
    id: 10,
    title: "Micromax",
    description: "Micromax Canvas Selfie 4",
    release: 2016,
    category: "Phone",
    image:
      "images/41k1N3Bby4L._AC_UF1000,1000_QL80_.jpg",
    price: 61704,
  },
  {
    id: 11,
    title: "Sagem",
    description: "Sagem MW 3026",
    release: 2001,
    category: "Phone",
    image:
      "images/KLASYK-SAGEM-MW3026-WADA-ZABYTEK.jpg",
    price: 114979,
  },
  {
    id: 12,
    title: "Plum",
    description: "Plum Bubby",
    release: 2012,
    category: "Phone",
    image:
      "images/15_14_30_plum-bu0bby.jpg",
    price: 101799,
  },
  {
    id: 13,
    title: "Nokia",
    description: "Nokia 3300",
    release: 2003,
    category: "Phone",
    image: "images/s-l1600.jpg",
    price: 93052,
  },
  {
    id: 14,
    title: "Samsung",
    description: "Samsung Galaxy A42 5G",
    release: 2020,
    category: "Phone",
    image:
      "images/Samsung-Galaxy-A42-5G-4-128GB-Prism-Dot-Black-Czarny-EAN-GTIN-8806090725012.jpg",
    price: 56813,
  },
  {
    id: 15,
    title: "Panasonic",
    description: "Panasonic Eluga L 4G",
    release: 2015,
    category: "Phone",
    image:
      "images/panasonic_eluga_l_4g_screen.jpg",
    price: 34506,
  },
  {
    id: 16,
    title: "Volvo",
    description: "940",
    release: 1994,
    category: "Car",
    image:
      "images/volvo_940_02.jpg",
    price: 164353,
  },
  {
    id: 17,
    title: "Cadillac",
    description: "Allante",
    release: 1992,
    category: "Car",
    image:
      "images/14607_p50_l.jpg",
    price: 53834,
  },
  {
    id: 18,
    title: "BMW",
    description: "5 Series",
    release: 1992,
    category: "Car",
    image:
      "images/2024-bmw-5-series-first-drive-review.jpg",
    price: 89687,
  },
  {
    id: 19,
    title: "Mitsubishi",
    description: "Tredia",
    release: 1987,
    category: "Car",
    image:
      "images/Mitsubishi-Tredia-1024x768.jpeg",
    price: 35293,
  },
  {
    id: 20,
    title: "Jeep",
    description: "Grand Cherokee",
    release: 2003,
    category: "Car",
    image:
      "images/ab475ddac2489938cac84437d18e7a2ffd2c8698.jpeg",
    price: 86355,
  },
  {
    id: 21,
    title: "Volkswagen",
    description: "Passat",
    release: 2003,
    category: "Car",
    image:
      "images/VW_Passat_CC_2.0_TDI_DSG_Reflexsilber.JPG",
    price: 197893,
  },
  {
    id: 22,
    title: "Alfa Romeo",
    description: "164",
    release: 1994,
    category: "Car",
    image:
      "images/Alfa_02_promo-HUB_Giulia_820x560.jpg",
    price: 75452,
  },
  {
    id: 23,
    title: "Toyota",
    description: "T100 Xtra",
    release: 1998,
    category: "Car",
    image:
      "images/toyota-t100-1996-toyota-t100-xtra-cab-sr5-4x4-5-speed-manual-only-187-000-miles_8541892410.jpg",
    price: 80570,
  },
  {
    id: 24,
    title: "Chevrolet",
    description: "Suburban 2500",
    release: 2007,
    category: "Car",
    image:
      "images/suburban-2500-big-block-454-gmt400-1.jpg",
    price: 35439,
  },
  {
    id: 25,
    title: "Infiniti",
    description: "QX",
    release: 2010,
    category: "Car",
    image:
      "images/infiniti-qx-monograph-concept-101-64da50e8b3085.jpg",
    price: 171882,
  },
  {
    id: 26,
    title: "Plymouth",
    description: "Colt",
    release: 1994,
    category: "Car",
    image:
      "images/bca49bc6448d42fa6c9b28687d96de7a.jpg",
    price: 77053,
  },
  {
    id: 27,
    title: "Cadillac",
    description: "DTS",
    release: 2008,
    category: "Car",
    image:
      "images/images (2).jpg",
    price: 76130,
  },
  {
    id: 28,
    title: "Mercury",
    description: "Sable",
    release: 2004,
    category: "Car",
    image:
      "images/3rd-Mercury-Sable-sedan.jpg",
    price: 15107,
  },
  {
    id: 29,
    title: "Kia",
    description: "Forte",
    release: 2011,
    category: "Car",
    image:
      "images/jhpdb4kbic08g00c80.jpg",
    price: 40059,
  },
  {
    id: 30,
    title: "Toyota",
    description: "Corolla",
    release: 1996,
    category: "Car",
    image:
      "images/BRMk9kqTURBXy9iZTIxMmNkMjg4MzJlZDYzMmQ2MmQ2ZTA0M2I1Y2I1NS5qcGVnkpUDAMxbzQUAzQLQkwXNBLDNAqTeAAKhMAWhMQA.webp",
    price: 82517,
  },
  {
    id: 31,
    title: "Shire LLC",
    description: "Vyvanse",
    release: 2009,
    category: "Drug",
    image:
      "images/AP755231934976.2e16d0ba.fill-735x490.jpg",
    price: 35876,
  },
  {
    id: 32,
    title: "Guna spa",
    description: "GUNA-STOMACH",
    release: 1998,
    category: "Drug",
    image: "images/GUNA-STOMACH_WEB.jpg",
    price: 16863,
  },
  {
    id: 33,
    title: "REMEDYREPACK INC.",
    description: "Nortriptyline Hydrochloride",
    release: 1963,
    category: "Drug",
    image:
      "images/product-photo-1330.png",
    price: 28181,
  },
  {
    id: 34,
    title: "Welder Services Of Fort Wayne, Inc.",
    description: "OXYGEN",
    release: 2007,
    category: "Drug",
    image:
      "images/image.jpg",
    price: 120653,
  },
  {
    id: 35,
    title: "Cardinal Health",
    description: "Risperidone",
    release: 1995,
    category: "Drug",
    image:
      "images/risperidone-risperdal-atypical-antipsychotic-medication.webp",
    price: 51268,
  },
  {
    id: 36,
    title: "KANEBO COSMETICS INC",
    description: "SENSAI FLUID FINISH FF203",
    release: 1999,
    category: "Drug",
    image:
      "images/4bd46c674ac986260ac4d9af3fc8.jpg",
    price: 182525,
  },
  {
    id: 37,
    title: "BluePoint Laboratories",
    description: "Amlodipine Besylate and Benazepril Hydrochloride",
    release: 2005,
    category: "Drug",
    image:
      "images/images (3).jpg",
    price: 80631,
  },
  {
    id: 38,
    title: "Laboratoires Boiron",
    description: "Children Coldcalm",
    release: 2008,
    category: "Drug",
    image:
      "https://m.media-amazon.com/images/I/71Rr-bB0EpL._AC_UF1000,1000_QL80_.jpg",
    price: 72117,
  },
  {
    id: 39,
    title: "Physicians Total Care, Inc.",
    description: "Fluocinolone Acetonide",
    release: 2006,
    category: "Drug",
    image:
      "https://dailymed.nlm.nih.gov/dailymed/image.cfm?name=fluo-60gram-carton.jpg&id=340732",
    price: 51452,
  },
  {
    id: 40,
    title: "Golden State Medical Supply",
    description: "FOSINOPRIL SODIUM",
    release: 2000,
    category: "Drug",
    image:
      "https://dailymed.nlm.nih.gov/dailymed/image.cfm?name=Fosinopril+10mg+90ct.jpg&id=445041",
    price: 22525,
  },
  {
    id: 41,
    title: "Conopco Inc. d/b/a Unilever",
    description: "Suave Fresh",
    release: 1993,
    category: "Drug",
    image:
      "https://dailymed.nlm.nih.gov/dailymed/image.cfm?name=SuaISFresh.jpg&id=33095",
    price: 27921,
  },
  {
    id: 42,
    title: "Roxane Laboratories, Inc",
    description: "Meperidine Hydrochloride",
    release: 2005,
    category: "Drug",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/160424152457-11-buprenorphine-dangerous-painkillers.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618",
    price: 188065,
  },
  {
    id: 43,
    title: "Menper Distributors, Inc.",
    description: "Gesteira",
    release: 1998,
    category: "Drug",
    image: "https://i.ebayimg.com/images/g/0w0AAOSwIDljRRGS/s-l1200.webp",
    price: 157278,
  },
  {
    id: 44,
    title: "Arbor Pharmaceuticals, Inc.",
    description: "Pediaderm TA",
    release: 1992,
    category: "Drug",
    image:
      "https://www.empr.com/wp-content/uploads/sites/7/2018/12/pediaderm_92127.jpg",
    price: 63709,
  },
  {
    id: 45,
    title: "American Sales",
    description: "Care One",
    release: 2007,
    category: "Drug",
    image:
      "https://dailymed.nlm.nih.gov/dailymed/image.cfm?name=mm1.jpg&id=620539",
    price: 96592,
  },
  {
    id: 46,
    title: "Oryx, fringe-eared",
    description: "Oryx gazella callotis",
    release: 1987,
    category: "Animal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Common_beisa_oryx_%28Oryx_beisa_beisa%29_female.jpg",
    price: 191236,
  },
  {
    id: 47,
    title: "Bee-eater, carmine",
    description: "Merops nubicus",
    release: 2004,
    category: "Animal",
    image:
      "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/245599991/1800",
    price: 55546,
  },
  {
    id: 48,
    title: "Antelope, four-horned",
    description: "Tetracerus quadricornis",
    release: 2010,
    category: "Animal",
    image: "https://www.biolib.cz/IMG/GAL/119952.jpg",
    price: 64859,
  },
  {
    id: 49,
    title: "Crested porcupine",
    description: "Hystrix cristata",
    release: 1999,
    category: "Animal",
    image:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/an-african-crested-porcupine-hystrix-cristata-derrick-neill.jpg",
    price: 153834,
  },
  {
    id: 50,
    title: "Civet, common palm",
    description: "Paradoxurus hermaphroditus",
    release: 2010,
    category: "Animal",
    image:
      "https://img.myloview.pl/fototapety/civette-palmiste-hermaphrodite-paradoxurus-hermaphroditus-700-189354476.jpg",
    price: 165168,
  },
  {
    id: 51,
    title: "Nutcracker, clark's",
    description: "Nucifraga columbiana",
    release: 1996,
    category: "Animal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Clark%27s_Nutcracker_%28Nucifraga_columbiana%29.jpg/1024px-Clark%27s_Nutcracker_%28Nucifraga_columbiana%29.jpg",
    price: 141122,
  },
  {
    id: 52,
    title: "Robin, kalahari scrub",
    description: "Certotrichas paena",
    release: 2006,
    category: "Animal",
    image:
      "https://s3.animalia.bio/animals/photos/full/original/kalahari-scrub-robin2c-erythropygia-paena-at-pilanesberg-national-park2c-northwest-province2c-south-africa-taken-in-early-sunrise-light-281560463692329.webp",
    price: 146852,
  },
  {
    id: 53,
    title: "Tortoise, burmese black mountain",
    description: "Manouria emys",
    release: 2012,
    category: "Animal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Manouria_emys.jpg",
    price: 122368,
  },
  {
    id: 54,
    title: "Monster, gila",
    description: "Heloderma horridum",
    release: 2002,
    category: "Animal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Heloderma_horridum_L%C3%B6bbecke_Museum.jpg/800px-Heloderma_horridum_L%C3%B6bbecke_Museum.jpg",
    price: 124539,
  },
  {
    id: 55,
    title: "Rat, white-faced tree",
    description: "Echimys chrysurus",
    release: 2006,
    category: "Animal",
    image:
      "https://www.scifacts.net/wp-content/uploads/2016/09/White-faced-Tree-Rat.jpg",
    price: 71310,
  },
  {
    id: 56,
    title: "Laughing dove",
    description: "Streptopelia senegalensis",
    release: 2008,
    category: "Animal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/04/Laughing_dove_%28Spilopelia_senegalensis_cambayensis%29.jpg",
    price: 51423,
  },
  {
    id: 57,
    title: "Barking gecko",
    description: "Phylurus milli",
    release: 1986,
    category: "Animal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2e/Thick-tailed_Gecko_%28Underwoodisaurus_milii%29_%288636519219%29.jpg",
    price: 96336,
  },
  {
    id: 58,
    title: "Red-cheeked cordon bleu",
    description: "Uraeginthus bengalus",
    release: 2007,
    category: "Animal",
    image:
      "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/240343061/1800",
    price: 198487,
  },
  {
    id: 59,
    title: "Black-winged stilt",
    description: "Himantopus himantopus",
    release: 1999,
    category: "Animal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Black-winged_stilt_%28Himantopus_himantopus%29.jpg/1200px-Black-winged_stilt_%28Himantopus_himantopus%29.jpg",
    price: 30112,
  },
  {
    id: 60,
    title: "Gulls (unidentified)",
    description: "Larus sp.",
    release: 2008,
    category: "Animal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/Larus_argentatus_ad.jpg",
    price: 173753,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  localStorage.setItem("ads", JSON.stringify(dummy_data));
});

const controller = new AdsController(new AdsModel(), new AdsView());
