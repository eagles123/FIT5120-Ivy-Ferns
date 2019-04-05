const suburbs = [
  {
    id: "1",
    city: "Bellarine",
    name: "Geelong",
    description: "very good area, you are welcome to move here",
    rating: {
      healthScore: 20,
      educationScore: 79,
      propetyScore: 3,
      jobScore: 47
    }
  },
  {
    id: "2",
    city: "Brownbill",
    name: "Geelong",
    description: "very good area, you are welcome to move here",
    rating: {
      healthScore: 90,
      educationScore: 29,
      propetyScore: 64,
      jobScore: 87
    }
  },
  {
    id: "3",
    city: "Ballarat East",
    name: "Ballarat",
    description: "very good area, you are welcome to move here",
    rating: {
      healthScore: 1,
      educationScore: 1,
      propetyScore: 4,
      jobScore: 7
    }
  },
  {
    id: "4",
    city: "Huntly",
    name: "Bendigo",
    description: "very good area, you are welcome to move here",
    rating: {
      healthScore: 70,
      educationScore: 89,
      propetyScore: 34,
      jobScore: 26
    }
  },
  {
    id: "5",
    city: "Eaglehawk",
    name: "Bendigo",
    description: "very good area, you are welcome to move here",
    rating: {
      healthScore: 30,
      educationScore: 29,
      propetyScore: 36,
      jobScore: 70
    }
  }
];

export function getAllSuburbs() {
  return suburbs;
}
