const suburbs = [
  {
    city: "Ballarat",
    suburbName: "Alfredton",
    rating: {
      healthScore: 28.7628405538,
      educationScore: 7.3366808473,
      propertyScore: 39.3873085339,
      jobScore: 30.0881517097
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Anakie",
    rating: {
      healthScore: 0.0,
      educationScore: 2.1811010568,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Armstrong creek",
    rating: {
      healthScore: 0.0,
      educationScore: 9.5064451341,
      propertyScore: 48.1400437637,
      jobScore: 23.1257482833
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Avalon",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Ballarat",
    suburbName: "Bakery hill",
    rating: {
      healthScore: 6.2527914247,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Ballarat",
    suburbName: "Ballarat central",
    rating: {
      healthScore: 100.0,
      educationScore: 2.4194390689,
      propertyScore: 36.9803063457,
      jobScore: 0.0
    }
  },
  {
    city: "Ballarat",
    suburbName: "Ballarat east",
    rating: {
      healthScore: 1.2505582849,
      educationScore: 10.5209977408,
      propertyScore: 29.7592997812,
      jobScore: 16.1593029387
    }
  },
  {
    city: "Ballarat",
    suburbName: "Ballarat north",
    rating: {
      healthScore: 0.0,
      educationScore: 4.9962037142,
      propertyScore: 34.6170678337,
      jobScore: 18.2227994681
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Balliang",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Barwon heads",
    rating: {
      healthScore: 2.044938076,
      educationScore: 2.6169279264,
      propertyScore: 84.4638949672,
      jobScore: 18.0643163946
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Batesford",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 13.2948253648
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Bell park",
    rating: {
      healthScore: 0.0,
      educationScore: 4.7093183402,
      propertyScore: 41.8818380744,
      jobScore: 20.3698912031
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Bell post hill",
    rating: {
      healthScore: 1.3632920507,
      educationScore: 18.1293338197,
      propertyScore: 42.8884026258,
      jobScore: 19.9226082331
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Bellarine",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 14.2319704944
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Belmont",
    rating: {
      healthScore: 19.7677347348,
      educationScore: 22.4670231449,
      propertyScore: 49.1728665208,
      jobScore: 47.9847528262
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "Bendigo",
    rating: {
      healthScore: 97.434680661,
      educationScore: 100.0,
      propertyScore: 34.7921225383,
      jobScore: 15.6457324351
    }
  },
  {
    city: "Ballarat",
    suburbName: "Black hill",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 36.8490153173,
      jobScore: 21.1393663812
    }
  },
  {
    city: "Ballarat",
    suburbName: "Bo peep",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Ballarat",
    suburbName: "Bonshaw",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Breakwater",
    rating: {
      healthScore: 0.0,
      educationScore: 0.5273136432,
      propertyScore: 33.6980306346,
      jobScore: 27.8786186107
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Breamlea",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 18.0643163946
    }
  },
  {
    city: "Ballarat",
    suburbName: "Brown hill",
    rating: {
      healthScore: 0.0,
      educationScore: 4.1637828189,
      propertyScore: 35.010940919,
      jobScore: 21.1393663812
    }
  },
  {
    city: "Ballarat",
    suburbName: "Bunkers hill",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "California gully",
    rating: {
      healthScore: 0.0,
      educationScore: 3.890250696,
      propertyScore: 23.6323851204,
      jobScore: 18.9017878668
    }
  },
  {
    city: "Ballarat",
    suburbName: "Canadian",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 32.3851203501,
      jobScore: 36.7090294811
    }
  },
  {
    city: "Ballarat",
    suburbName: "Cardigan",
    rating: {
      healthScore: 0.0,
      educationScore: 0.8064796896,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Ballarat",
    suburbName: "Cardigan village",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Ceres",
    rating: {
      healthScore: 0.0,
      educationScore: 2.0906533607,
      propertyScore: 0.0,
      jobScore: 20.0719269459
    }
  },
  {
    city: "Ballarat",
    suburbName: "Chapel flat",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Charlemont",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 14.762648174
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Clifton springs",
    rating: {
      healthScore: 0.6816460253,
      educationScore: 3.169205699,
      propertyScore: 40.2625820569,
      jobScore: 25.8212204088
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Connewarre",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 100.0,
      jobScore: 18.0643163946
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Corio",
    rating: {
      healthScore: 17.0411506335,
      educationScore: 18.3302272782,
      propertyScore: 33.2603938731,
      jobScore: 36.3784645109
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Curlewis",
    rating: {
      healthScore: 2.044938076,
      educationScore: 0.0,
      propertyScore: 43.8774617068,
      jobScore: 8.6591299655
    }
  },
  {
    city: "Ballarat",
    suburbName: "Delacombe",
    rating: {
      healthScore: 0.0,
      educationScore: 7.3601508195,
      propertyScore: 32.8227571116,
      jobScore: 32.2172179637
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Drumcondra",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Drysdale",
    rating: {
      healthScore: 14.3145665321,
      educationScore: 22.2976926415,
      propertyScore: 47.1772428884,
      jobScore: 14.2319704944
    }
  },
  {
    city: "Ballarat",
    suburbName: "Durham lead",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "Eaglehawk",
    rating: {
      healthScore: 19.0514738723,
      educationScore: 22.3652951342,
      propertyScore: 24.9452954048,
      jobScore: 15.3143667854
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "East bendigo",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 27.352297593,
      jobScore: 10.4542016277
    }
  },
  {
    city: "Greater geelong",
    suburbName: "East geelong",
    rating: {
      healthScore: 3.7490531394,
      educationScore: 5.9023685648,
      propertyScore: 62.8008752735,
      jobScore: 11.206013072
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "Epsom",
    rating: {
      healthScore: 7.6205895489,
      educationScore: 4.5226108654,
      propertyScore: 30.1969365427,
      jobScore: 16.7968600111
    }
  },
  {
    city: "Ballarat",
    suburbName: "Eureka",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 28.0087527352,
      jobScore: 16.1593029387
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "Flora hill",
    rating: {
      healthScore: 0.0,
      educationScore: 2.1092545729,
      propertyScore: 28.8840262582,
      jobScore: 31.1096921316
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Fyansford",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 48.5776805252,
      jobScore: 16.2689267422
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Geelong",
    rating: {
      healthScore: 43.244962795,
      educationScore: 9.4680407262,
      propertyScore: 63.8949671772,
      jobScore: 26.4199638023
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Geelong west",
    rating: {
      healthScore: 3.7490531394,
      educationScore: 4.5742195059,
      propertyScore: 61.8818380744,
      jobScore: 100.0
    }
  },
  {
    city: "Ballarat",
    suburbName: "Glen park",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Ballarat",
    suburbName: "Glendaurel",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Ballarat",
    suburbName: "Glendonald",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Ballarat",
    suburbName: "Golden point",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 36.7090294811
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "Golden square",
    rating: {
      healthScore: 6.3504912908,
      educationScore: 8.2025265971,
      propertyScore: 30.9409190372,
      jobScore: 28.1100113097
    }
  },
  {
    city: "Ballarat",
    suburbName: "Gong gong",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Grovedale",
    rating: {
      healthScore: 8.1797523041,
      educationScore: 15.3928406799,
      propertyScore: 43.7636761488,
      jobScore: 49.9420650285
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Hamlyn heights",
    rating: {
      healthScore: 0.6816460253,
      educationScore: 9.9994154491,
      propertyScore: 44.9015317287,
      jobScore: 29.5382897684
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Herne hill",
    rating: {
      healthScore: 0.0,
      educationScore: 6.4109354615,
      propertyScore: 44.6389496718,
      jobScore: 16.2689267422
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Highton",
    rating: {
      healthScore: 6.134814228,
      educationScore: 15.5417532444,
      propertyScore: 59.9562363239,
      jobScore: 38.1303756859
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Indented head",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 50.0481400438,
      jobScore: 13.1820488895
    }
  },
  {
    city: "Ballarat",
    suburbName: "Invermay",
    rating: {
      healthScore: 0.0,
      educationScore: 3.4547033232,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Ballarat",
    suburbName: "Invermay park",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 36.9803063457,
      jobScore: 18.2227994681
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "Ironbark",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 26.3719912473,
      jobScore: 18.4499931531
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "Jackass flat",
    rating: {
      healthScore: 0.0,
      educationScore: 0.7030848576,
      propertyScore: 27.466083151,
      jobScore: 19.9600110151
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "Junortoun",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 43.7636761488,
      jobScore: 0.0
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "Kangaroo flat",
    rating: {
      healthScore: 16.511277356,
      educationScore: 22.189533338,
      propertyScore: 28.5776805252,
      jobScore: 28.9499212226
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "Kennington",
    rating: {
      healthScore: 5.0803930326,
      educationScore: 6.7733030023,
      propertyScore: 33.4442013129,
      jobScore: 23.0284259344
    }
  },
  {
    city: "Ballarat",
    suburbName: "Lake gardens",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 59.9562363239,
      jobScore: 0.0
    }
  },
  {
    city: "Ballarat",
    suburbName: "Lake wendouree",
    rating: {
      healthScore: 0.0,
      educationScore: 3.3382306477,
      propertyScore: 67.8336980306,
      jobScore: 37.8163656302
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Lara",
    rating: {
      healthScore: 9.8838673674,
      educationScore: 10.9962979915,
      propertyScore: 46.6520787746,
      jobScore: 29.9026588524
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Leopold",
    rating: {
      healthScore: 7.1572832661,
      educationScore: 3.1557258087,
      propertyScore: 43.3260393873,
      jobScore: 19.3231813558
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Little river",
    rating: {
      healthScore: 0.0,
      educationScore: 0.5273136432,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "Long gully",
    rating: {
      healthScore: 0.0,
      educationScore: 0.7030848576,
      propertyScore: 25.3391684902,
      jobScore: 18.4499931531
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "Longlea",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Lovely banks",
    rating: {
      healthScore: 0.0,
      educationScore: 7.6116782767,
      propertyScore: 45.9518599562,
      jobScore: 13.2948253648
    }
  },
  {
    city: "Ballarat",
    suburbName: "Lucas",
    rating: {
      healthScore: 2.5011165699,
      educationScore: 3.4772568244,
      propertyScore: 37.1991247265,
      jobScore: 0.0
    }
  },
  {
    city: "Ballarat",
    suburbName: "Magpie",
    rating: {
      healthScore: 0.0,
      educationScore: 3.3900287414,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "Maiden gully",
    rating: {
      healthScore: 0.0,
      educationScore: 19.3934411447,
      propertyScore: 45.9606126915,
      jobScore: 18.4857025301
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Manifold heights",
    rating: {
      healthScore: 0.0,
      educationScore: 4.0622406928,
      propertyScore: 68.7527352298,
      jobScore: 100.0
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Mannerim",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Marcus hill",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Marshall",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 42.4507658643,
      jobScore: 14.762648174
    }
  },
  {
    city: "Ballarat",
    suburbName: "Miners rest",
    rating: {
      healthScore: 0.0,
      educationScore: 4.1432824193,
      propertyScore: 35.4048140044,
      jobScore: 16.4510766566
    }
  },
  {
    city: "Ballarat",
    suburbName: "Mitchell park",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 26.9584245077,
      jobScore: 16.4510766566
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Moolap",
    rating: {
      healthScore: 0.0,
      educationScore: 2.1141012056,
      propertyScore: 0.0,
      jobScore: 26.6059233349
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Moorabool",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 13.2948253648
    }
  },
  {
    city: "Ballarat",
    suburbName: "Mount clear",
    rating: {
      healthScore: 3.7516748548,
      educationScore: 30.0094584411,
      propertyScore: 35.010940919,
      jobScore: 15.2313569226
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Mount duneed",
    rating: {
      healthScore: 0.0,
      educationScore: 2.1101852552,
      propertyScore: 47.9212253829,
      jobScore: 23.1257482833
    }
  },
  {
    city: "Ballarat",
    suburbName: "Mount helen",
    rating: {
      healthScore: 3.7516748548,
      educationScore: 2.4194390689,
      propertyScore: 35.6673960613,
      jobScore: 15.2313569226
    }
  },
  {
    city: "Ballarat",
    suburbName: "Mount pleasant",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 31.5536105033,
      jobScore: 36.7090294811
    }
  },
  {
    city: "Ballarat",
    suburbName: "Nerrina",
    rating: {
      healthScore: 0.0,
      educationScore: 3.3597412125,
      propertyScore: 56.2363238512,
      jobScore: 21.1393663812
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Newcomb",
    rating: {
      healthScore: 7.8389292914,
      educationScore: 10.1167756811,
      propertyScore: 39.5623632385,
      jobScore: 26.6059233349
    }
  },
  {
    city: "Ballarat",
    suburbName: "Newington",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 41.1378555799,
      jobScore: 0.0
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Newtown",
    rating: {
      healthScore: 3.4082301267,
      educationScore: 28.1621155432,
      propertyScore: 0.0,
      jobScore: 14.0100397594
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Norlane",
    rating: {
      healthScore: 4.089876152,
      educationScore: 3.3671709148,
      propertyScore: 32.3851203501,
      jobScore: 10.5220881829
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "North bendigo",
    rating: {
      healthScore: 0.0,
      educationScore: 0.7030848576,
      propertyScore: 26.6958424508,
      jobScore: 18.9017878668
    }
  },
  {
    city: "Greater geelong",
    suburbName: "North geelong",
    rating: {
      healthScore: 8.7853217641,
      educationScore: 5.8958617982,
      propertyScore: 41.6630196937,
      jobScore: 10.0271126562
    }
  },
  {
    city: "Greater geelong",
    suburbName: "North shore",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 57.3304157549,
      jobScore: 10.5220881829
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Ocean grove",
    rating: {
      healthScore: 10.2246903801,
      educationScore: 7.5448646905,
      propertyScore: 59.9562363239,
      jobScore: 22.2075342376
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Point lonsdale",
    rating: {
      healthScore: 5.4531682027,
      educationScore: 0.0,
      propertyScore: 69.0590809628,
      jobScore: 0.0
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Point wilson",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Portarlington",
    rating: {
      healthScore: 0.3408230127,
      educationScore: 2.6925952907,
      propertyScore: 52.95404814,
      jobScore: 19.1138491138
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "Quarry hill",
    rating: {
      healthScore: 3.8102947745,
      educationScore: 6.0792544411,
      propertyScore: 29.1028446389,
      jobScore: 31.1096921316
    }
  },
  {
    city: "Ballarat",
    suburbName: "Redan",
    rating: {
      healthScore: 0.0,
      educationScore: 3.3766256395,
      propertyScore: 29.2166301969,
      jobScore: 21.3184513681
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Rippleside",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 89.9343544858,
      jobScore: 10.0271126562
    }
  },
  {
    city: "Ballarat",
    suburbName: "Sebastopol",
    rating: {
      healthScore: 7.5033497097,
      educationScore: 39.6976915588,
      propertyScore: 25.1991247265,
      jobScore: 21.3184513681
    }
  },
  {
    city: "Ballarat",
    suburbName: "Soldiers hill",
    rating: {
      healthScore: 4.3546225994,
      educationScore: 3.3810724292,
      propertyScore: 40.7002188184,
      jobScore: 21.1393663812
    }
  },
  {
    city: "Greater geelong",
    suburbName: "South geelong",
    rating: {
      healthScore: 0.0,
      educationScore: 2.1280170815,
      propertyScore: 44.7527352298,
      jobScore: 27.8786186107
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "Spring gully",
    rating: {
      healthScore: 0.0,
      educationScore: 0.7030848576,
      propertyScore: 36.3238512035,
      jobScore: 31.1096921316
    }
  },
  {
    city: "Greater geelong",
    suburbName: "St albans park",
    rating: {
      healthScore: 4.3546225994,
      educationScore: 0.5273136432,
      propertyScore: 38.5120350109,
      jobScore: 35.7817825459
    }
  },
  {
    city: "Greater geelong",
    suburbName: "St leonards",
    rating: {
      healthScore: 0.6816460253,
      educationScore: 2.1891363123,
      propertyScore: 51.7286652079,
      jobScore: 13.1820488895
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Staughton vale",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "Strathdale",
    rating: {
      healthScore: 10.1607860652,
      educationScore: 16.5756686393,
      propertyScore: 34.1619256018,
      jobScore: 36.6807386232
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "Strathfieldsaye",
    rating: {
      healthScore: 8.8906878071,
      educationScore: 8.1717238888,
      propertyScore: 39.8249452954,
      jobScore: 38.9560934021
    }
  },
  {
    city: "Ballarat",
    suburbName: "Sulky",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Swan bay",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Thomson",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 0.0,
      jobScore: 27.8786186107
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Wallington",
    rating: {
      healthScore: 0.0,
      educationScore: 2.1336428289,
      propertyScore: 0.0,
      jobScore: 0.0
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Wandana heights",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 60.6126914661,
      jobScore: 38.1303756859
    }
  },
  {
    city: "Ballarat",
    suburbName: "Warrenheip",
    rating: {
      healthScore: 0.0,
      educationScore: 3.4802700453,
      propertyScore: 0.0,
      jobScore: 16.1593029387
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Waurn ponds",
    rating: {
      healthScore: 12.1935518908,
      educationScore: 5.5448521982,
      propertyScore: 54.6170678337,
      jobScore: 20.0719269459
    }
  },
  {
    city: "Ballarat",
    suburbName: "Wendouree",
    rating: {
      healthScore: 21.8624385887,
      educationScore: 54.9035193977,
      propertyScore: 29.3216630197,
      jobScore: 31.4667393553
    }
  },
  {
    city: "Greater bendigo",
    suburbName: "White hills",
    rating: {
      healthScore: 5.0803930326,
      educationScore: 7.5143689195,
      propertyScore: 26.47702407,
      jobScore: 19.9600110151
    }
  },
  {
    city: "Greater geelong",
    suburbName: "Whittington",
    rating: {
      healthScore: 0.0,
      educationScore: 3.2166936068,
      propertyScore: 36.761487965,
      jobScore: 10.7812678295
    }
  },
  {
    city: "Ballarat",
    suburbName: "Winter valley",
    rating: {
      healthScore: 0.0,
      educationScore: 0.0,
      propertyScore: 36.8052516411,
      jobScore: 0.0
    }
  }
];

export function getallSuburbs() {
  return suburbs;
}
