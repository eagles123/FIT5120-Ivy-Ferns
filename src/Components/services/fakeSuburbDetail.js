const suburbDetails = [
  {
    id: "1",
    suburb: "Carnegie",
    hospitals: {
      private: 2,
      public: 10
    },
    schools: {
      primary: 2,
      highschool: 3
    },
    rent: 200,
    buy: 400000
  },
  {
    id: "2",
    suburb: "Huntly",
    hospitals: {
      private: 3,
      public: 7
    },
    schools: {
      primary: 7,
      highschool: 13
    },
    rent: 320,
    buy: 490000
  },
  {
    id: "3",
    suburb: "Hill",
    hospitals: {
      private: 4,
      public: 2
    },
    schools: {
      primary: 5,
      highschool: 8
    },
    rent: 290,
    buy: 350000
  },
  {
    id: "4",
    suburb: "Caufield",
    hospitals: {
      private: 1,
      public: 6
    },
    schools: {
      primary: 3,
      highschool: 4
    },
    rent: 300,
    buy: 470000
  },
  {
    id: "5",
    suburb: "Clayton",
    hospitals: {
      private: 3,
      public: 3
    },
    schools: {
      primary: 4,
      highschool: 2
    },
    rent: 233,
    buy: 540000
  }
];

export function getAllDetailById(id) {
  return suburbDetails.find(s => s.id === id);
}
