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
    image: "https://fdn2.gsmarena.com/vv/bigpic/huawei-mediapad-t2.jpg",
    price: 26284,
  },
  {
    id: 2,
    title: "Allview",
    description: "Allview P7 Xtreme",
    release: 2014,
    category: "Phone",
    image:
      "https://www.allviewmobile.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/p/7/p7_xtreme_semiprofil_white_1_1.jpg",
    price: 114143,
  },
  {
    id: 3,
    title: "Celkon",
    description: "Celkon C44",
    release: 2011,
    category: "Phone",
    image: "https://files.mgsm.pl/phones/celkon_c44/celkon_c44-01.jpg",
    price: 85618,
  },
  {
    id: 4,
    title: "Panasonic",
    description: "Panasonic P101",
    release: 2018,
    category: "Phone",
    image: "https://fdn2.gsmarena.com/vv/bigpic/panasonic-p101.jpg",
    price: 103877,
  },
  {
    id: 5,
    title: "Sony",
    description: "Sony Ericsson Z320",
    release: 2007,
    category: "Phone",
    image: "https://images.morele.net/i300/153004_0_i300.jpg",
    price: 172241,
  },
  {
    id: 6,
    title: "LG",
    description: "LG KT520",
    release: 2008,
    category: "Phone",
    image: "https://files.mgsm.pl/phones/lg-kt520/lg-kt520-big.jpg",
    price: 78973,
  },
  {
    id: 7,
    title: "Huawei",
    description: "Huawei Ascend G700",
    release: 2013,
    category: "Phone",
    image:
      "https://media.cdn.videotesty.pl/media/pliki/produkty/2013/12/06/HUAWEI_Ascend_G700.jpg",
    price: 24293,
  },
  {
    id: 8,
    title: "Lava",
    description: "Lava Iris X1 Atom S",
    release: 2015,
    category: "Phone",
    image:
      "https://imei24.com/img/lava/14_02_31_622201562610PM_635_lava_iris_x1_atom_s.jpg",
    price: 165597,
  },
  {
    id: 9,
    title: "Samsung",
    description: "Samsung SGH-500",
    release: 1998,
    category: "Phone",
    image:
      "https://files.mgsm.pl/phones/samsung-sgh-500/samsung-sgh-500-big.jpg",
    price: 143185,
  },
  {
    id: 10,
    title: "Micromax",
    description: "Micromax Canvas Selfie 4",
    release: 2016,
    category: "Phone",
    image:
      "https://5.imimg.com/data5/QU/KK/MY-20388692/micromax-canvas-selfie-4-plus-q349-mobiles-silver.jpg",
    price: 61704,
  },
  {
    id: 11,
    title: "Sagem",
    description: "Sagem MW 3026",
    release: 2001,
    category: "Phone",
    image:
      "https://a.allegroimg.com/original/116b82/fca9e4e2489681695d3434ea21a2/KLASYK-SAGEM-MW3026-WADA-ZABYTEK",
    price: 114979,
  },
  {
    id: 12,
    title: "Plum",
    description: "Plum Bubby",
    release: 2012,
    category: "Phone",
    image:
      "https://m-cdn.phonearena.com/images/phones/42675-350/Plum-Bubby.jpg?w=1",
    price: 101799,
  },
  {
    id: 13,
    title: "Nokia",
    description: "Nokia 3300",
    release: 2003,
    category: "Phone",
    image: "https://files.mgsm.pl/phones/nokia-3300/nokia-3300-07.jpg",
    price: 93052,
  },
  {
    id: 14,
    title: "Samsung",
    description: "Samsung Galaxy A42 5G",
    release: 2020,
    category: "Phone",
    image:
      "https://image.ceneostatic.pl/data/products/100463610/p-samsung-galaxy-a42-5g-sm-a426-4-128gb-czarny.jpg",
    price: 56813,
  },
  {
    id: 15,
    title: "Panasonic",
    description: "Panasonic Eluga L 4G",
    release: 2015,
    category: "Phone",
    image:
      "https://files.mgsm.pl/phones/panasonic-eluga-l-4g/panasonic-eluga-l-4g-04.jpg",
    price: 34506,
  },
  {
    id: 16,
    title: "Volvo",
    description: "940",
    release: 1994,
    category: "Car",
    image:
      "https://ocdn.eu/rankings-content-transforms/1/QT0k9ktY2FyQ2F0YWxvZ3VlLzg1MDk4ZDE0YWQzNWE0MGM4MzVkM2NlYzc3MzNjNWRjkpUDAAHNDdfNBq-TBc0DFM0BvN4AAqEwBaExAA",
    price: 164353,
  },
  {
    id: 17,
    title: "Cadillac",
    description: "Allante",
    release: 1992,
    category: "Car",
    image:
      "https://images.ctfassets.net/uaddx06iwzdz/2xCDBGM6Xo5rk3BEV40VkA/fa94193e556fd6fa46f7e5deb663341e/cadillac-allante-l-01.jpg",
    price: 53834,
  },
  {
    id: 18,
    title: "BMW",
    description: "5 Series",
    release: 1992,
    category: "Car",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/5-Series-2024/10182/1685002609273/front-left-side-47.jpg",
    price: 89687,
  },
  {
    id: 19,
    title: "Mitsubishi",
    description: "Tredia",
    release: 1987,
    category: "Car",
    image:
      "https://parkers-images.bauersecure.com/wp-images/20360/cut-out/420x280/mitsi_tredia82.jpg",
    price: 35293,
  },
  {
    id: 20,
    title: "Jeep",
    description: "Grand Cherokee",
    release: 2003,
    category: "Car",
    image:
      "https://www.motortrend.com/uploads/2022/10/008-2022-Jeep-Grand-Cherokee.jpg",
    price: 86355,
  },
  {
    id: 21,
    title: "Volkswagen",
    description: "Passat",
    release: 2003,
    category: "Car",
    image:
      "https://uploads.vw-mms.de/system/production/images/vwn/029/415/images/869424d4159b91be4431c309c1e63f53ea727f0f/DB2019AU00902_web_1600.jpg?1649155074",
    price: 197893,
  },
  {
    id: 22,
    title: "Alfa Romeo",
    description: "164",
    release: 1994,
    category: "Car",
    image:
      "https://www.historics.co.uk/media/1667227/ref-70-alfa-romeo-164-1.jpg?anchor=center&mode=crop&width=1000",
    price: 75452,
  },
  {
    id: 23,
    title: "Toyota",
    description: "T100 Xtra",
    release: 1998,
    category: "Car",
    image:
      "https://i0.wp.com/www.curbsideclassic.com/wp-content/uploads/2019/10/iaGA8HHR1KoFBkxKCqNw_thumb_9df5.jpg",
    price: 80570,
  },
  {
    id: 24,
    title: "Chevrolet",
    description: "Suburban 2500",
    release: 2007,
    category: "Car",
    image:
      "https://edgecast-img.yahoo.net/mysterio/api/E14A3AFD19D33EFB8DFD7CBC55EA7D81BBE1F5171FEDC2ED8A4483384CA36DA7/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/20CTGEZ1.jpg",
    price: 35439,
  },
  {
    id: 25,
    title: "Infiniti",
    description: "QX",
    release: 2010,
    category: "Car",
    image:
      "https://cdn.motor1.com/images/mgl/JO9eXE/745:1207:6382:4789/infiniti-qx-monograph-front-quarter.webp",
    price: 171882,
  },
  {
    id: 26,
    title: "Plymouth",
    description: "Colt",
    release: 1994,
    category: "Car",
    image:
      "https://cdn11.bigcommerce.com/s-rnmf5r1skr/product_images/VehicleImages/1984PlymouthColt.jpg",
    price: 77053,
  },
  {
    id: 27,
    title: "Cadillac",
    description: "DTS",
    release: 2008,
    category: "Car",
    image:
      "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/10q1/339566/2010-cadillac-dts-photo-344749-s-986x603.jpg",
    price: 76130,
  },
  {
    id: 28,
    title: "Mercury",
    description: "Sable",
    release: 2004,
    category: "Car",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/3rd-Mercury-Sable-sedan.jpg/800px-3rd-Mercury-Sable-sedan.jpg",
    price: 15107,
  },
  {
    id: 29,
    title: "Kia",
    description: "Forte",
    release: 2011,
    category: "Car",
    image:
      "https://cdn.jdpower.com/ArticleImages/JDPA_2020%20Kia%20Forte%20GT%20Fire%20Orange%20Front%20View.jpg",
    price: 40059,
  },
  {
    id: 30,
    title: "Toyota",
    description: "Corolla",
    release: 1996,
    category: "Car",
    image:
      "https://mag.toyota.co.uk/wp-content/uploads/sites/2/2023/02/2023-Toyota-Corolla-UK-review-01.png",
    price: 82517,
  },
  {
    id: 31,
    title: "Shire LLC",
    description: "Vyvanse",
    release: 2009,
    category: "Drug",
    image:
      "https://media.phillyvoice.com/media/images/AP755231934976.2e16d0ba.fill-1200x630-c0.jpg",
    price: 35876,
  },
  {
    id: 32,
    title: "Guna spa",
    description: "GUNA-STOMACH",
    release: 1998,
    category: "Drug",
    image: "https://guna.com/wp-content/uploads/2022/05/GUNA-STOMACH_WEB.jpg",
    price: 16863,
  },
  {
    id: 33,
    title: "REMEDYREPACK INC.",
    description: "Nortriptyline Hydrochloride",
    release: 1963,
    category: "Drug",
    image:
      "https://www.gnhindia.com/wp-content/uploads/2020/04/setidb58d473a-b19f-4d2a-b1ae-dd398d7a29e1nameimage-2.jpg",
    price: 28181,
  },
  {
    id: 34,
    title: "Welder Services Of Fort Wayne, Inc.",
    description: "OXYGEN",
    release: 2007,
    category: "Drug",
    image:
      "https://dailymed.nlm.nih.gov/dailymed/image.cfm?name=oxygen2.jpg&id=737515",
    price: 120653,
  },
  {
    id: 35,
    title: "Cardinal Health",
    description: "Risperidone",
    release: 1995,
    category: "Drug",
    image:
      "https://www.solcohealthcare.com/wp-content/uploads/2019/07/Risperidone_1.jpg",
    price: 51268,
  },
  {
    id: 36,
    title: "KANEBO COSMETICS INC",
    description: "SENSAI FLUID FINISH FF203",
    release: 1999,
    category: "Drug",
    image:
      "https://image.ceneostatic.pl/data/products/29168226/c9be22c6-4baa-4cc5-b82b-fe3e5ab0fe01_p-kanebo-sensai-fluid-finish-podklad-nawilzajacy-30ml-206-golden-dune.jpg",
    price: 182525,
  },
  {
    id: 37,
    title: "BluePoint Laboratories",
    description: "Amlodipine Besylate and Benazepril Hydrochloride",
    release: 2005,
    category: "Drug",
    image:
      "https://greenpharmacyonline.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/0/00591375701_1.jpg",
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
