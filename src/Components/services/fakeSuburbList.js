const suburbs = [
  {
    id: "1",
    city: "Geelong",
    name: "Bellarine",
    description: "very good area, you are welcome to move here",
    rating: {
      healthScore: 20,
      educationScore: 79,
      propertyBuy: 34,
      PropertyRent: 55,
      jobScore: 47
    }
  },
  {
    id: "2",
    city: "Geelong",
    name: "Brownbill",
    description: "very good area, you are welcome to move here",
    rating: {
      healthScore: 90,
      educationScore: 29,
      propertyBuy: 64,
      PropertyRent: 15,
      jobScore: 87
    }
  },
  {
    id: "3",
    city: "Ballarat",
    name: "Ballarat East",
    description: "very good area, you are welcome to move here",
    rating: {
      healthScore: 1,
      educationScore: 1,
      propertyBuy: 4,
      PropertyRent: 5,
      jobScore: 7
    }
  },
  {
    id: "4",
    city: "Bendigo",
    name: "Huntly",
    description: "very good area, you are welcome to move here",
    rating: {
      healthScore: 70,
      educationScore: 89,
      propertyBuy: 34,
      PropertyRent: 85,
      jobScore: 26
    }
  },
  {
    id: "5",
    city: "Bendigo",
    name: "Eaglehawk",
    description: "very good area, you are welcome to move here",
    rating: {
      healthScore: 30,
      educationScore: 29,
      propertyBuy: 90,
      PropertyRent: 15,
      jobScore: 70
    }
  }
];

export function getAllSuburbs() {
  return suburbs;
}
