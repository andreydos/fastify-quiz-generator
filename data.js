module.exports = {
  categories: [{ id: 1, name: 'Birds' }, { id: 2, name: 'Cars' }, { id: 3, name: 'Airplanes' }],
  questions: {
    1: [
      {
        question: 'Smallest bird?',
        answer: { title: 'Hummingbird Bee', id: 2 },
        options: [{ title: 'Pardalote', id: 1 }, { title: 'Hummingbird Bee', id: 2 }, {
          title: 'Gerigón Piquicorto',
          id: 3,
        }, { title: 'Golden-headed Cisticola', id: 4 }],
      },
      {
        question: 'Biggest bird?',
        answer: { title: 'Ostrich', id: 3 },
        options: [{ title: 'Emu', id: 1 }, { title: 'Southern cassowary', id: 2 }, {
          title: 'Ostrich',
          id: 3,
        }, { title: 'Emperor penguin', id: 4 }],
      },
    ],
    2: [
      {
        question: 'Who invented the first car in the world?',
        answer: { title: 'Karl Benz', id: 1 },
        options: [{ title: 'Karl Benz', id: 1 }, { title: 'George Selden', id: 2 }, {
          title: 'Gottlieb Daimler',
          id: 3,
        }, { title: 'Charles Duryea', id: 4 }],
      },
    ],
    3: [
      {
        question: 'Biggest airplane?',
        answer: { title: 'Antonov AN-225 Mriya', id: 3 },
        options: [{ title: 'Airbus A380-800', id: 1 }, { title: 'Boeing 747-8i', id: 2 }, {
          title: 'Antonov AN-225 Mriya',
          id: 3,
        }, { title: 'Antonov An-124', id: 4 }],
      },
    ],
  },
};
