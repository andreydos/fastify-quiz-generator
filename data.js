module.exports = {
  categories: [{ id: 1, name: 'Birds' }, { id: 2, name: 'Cars' }, { id: 3, name: 'Airplanes' }],
  questions: {
    1: [
      {
        question: 'Smallest bird?',
        answer: { text: 'Hummingbird Bee', id: 2 },
        options: [{ text: 'Pardalote', id: 1 }, { text: 'Hummingbird Bee', id: 2 }, {
          text: 'Gerigón Piquicorto',
          id: 3,
        }, { text: 'Golden-headed Cisticola', id: 4 }],
      },
      {
        question: 'Biggest bird?',
        answer: { text: 'Ostrich', id: 3 },
        options: [{ text: 'Emu', id: 1 }, { text: 'Southern cassowary', id: 2 }, {
          text: 'Ostrich',
          id: 3,
        }, { text: 'Emperor penguin', id: 4 }],
      },
    ],
    2: [
      {
        question: 'Who invented the first car in the world?',
        answer: { text: 'Karl Benz', id: 1 },
        options: [{ text: 'Karl Benz', id: 1 }, { text: 'George Selden', id: 2 }, {
          text: 'Gottlieb Daimler',
          id: 3,
        }, { text: 'Charles Duryea', id: 4 }],
      },
    ],
    3: [
      {
        question: 'Biggest airplane?',
        answer: { text: 'Antonov AN-225 Mriya', id: 3 },
        options: [{ text: 'Airbus A380-800', id: 1 }, { text: 'Boeing 747-8i', id: 2 }, {
          text: 'Antonov AN-225 Mriya',
          id: 3,
        }, { text: 'Antonov An-124', id: 4 }],
      },
    ],
  },
};
