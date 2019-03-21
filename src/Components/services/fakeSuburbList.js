const suburbs = [
  {
    id: "1",
    city: "Geelong",
    name: "Carnegie",
    description: "very good area, you are welcome to move here",
    rating: {
      healthScore: 20,
      educationScore: 79,
      propertyBuy: 34,
      PropertyRent: 55,
      jobScore: 87
    }
  },
  {
    id: "2",
    city: "Geelong",
    name: "Huntly",
    description: "very good area, you are welcome to move here",
    rating: {
      healthScore: 90,
      educationScore: 29,
      propertyBuy: 64,
      PropertyRent: 15,
      jobScore: 77
    }
  },
  {
    id: "3",
    city: "Ballarat",
    name: "Box Hill",
    description: "very good area, you are welcome to move here",
    rating: {
      healthScore: 10,
      educationScore: 29,
      propertyBuy: 24,
      PropertyRent: 15,
      jobScore: 37
    }
  },
  {
    id: "4",
    city: "Bendigo",
    name: "Caufield",
    description: "very good area, you are welcome to move here",
    rating: {
      healthScore: 70,
      educationScore: 89,
      propertyBuy: 34,
      PropertyRent: 85,
      jobScore: 60
    }
  },
  {
    id: "5",
    city: "Bendigo",
    name: "Clayton",
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
