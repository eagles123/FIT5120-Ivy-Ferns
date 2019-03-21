const suburbs = [
  {
    id: "1",
    city: "Geelong",
    name: "Carnegie",
    description: "very good area, you are welcome to move here",
    rating: {
      health: 20,
      education: 79,
      propertyBuy: 34,
      PropertyRent: 55,
      jobs: 87
    }
  },
  {
    id: "2",
    city: "Geelong",
    name: "Huntly",
    description: "very good area, you are welcome to move here",
    rating: {
      health: 90,
      education: 29,
      propertyBuy: 64,
      PropertyRent: 15,
      jobs: 77
    }
  },
  {
    id: "3",
    city: "Ballarat",
    name: "Box Hill",
    description: "very good area, you are welcome to move here",
    rating: {
      health: 10,
      education: 29,
      propertyBuy: 24,
      PropertyRent: 15,
      jobs: 37
    }
  },
  {
    id: "4",
    city: "Bendigo",
    name: "Caufield",
    description: "very good area, you are welcome to move here",
    rating: {
      health: 70,
      education: 89,
      propertyBuy: 34,
      PropertyRent: 85,
      jobs: 60
    }
  },
  {
    id: "5",
    city: "Bendigo",
    name: "Clayton",
    description: "very good area, you are welcome to move here",
    rating: {
      health: 30,
      education: 29,
      propertyBuy: 90,
      PropertyRent: 15,
      jobs: 70
    }
  }
];

export function getAllSuburbs() {
  return suburbs;
}
