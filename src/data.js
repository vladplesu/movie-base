const movies = [
  {
    id: '/title/tt1190634/',
    title: {
      image: {
        url: './assets/images/the-boys.jpg',
      },
      seriesEndYear: 'Present',
      seriesStartYear: 2019,
      title: 'The Boys',
    },
    ratings: {
      rating: 8.7,
    },
    genres: ['Action', 'Comedy', 'Crime'],
    plotOutline: {
      text:
        'Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. ',
    },
  },
  {
    id: '/title/tt7221388/',
    title: {
      image: {
        url: './assets/images/cobra-kai.jpg',
      },
      seriesEndYear: 'Present',
      seriesStartYear: 2018,
      title: 'Cobra Kai',
    },
    ratings: {
      rating: 6.7,
    },
    genres: ['Action', 'Comedy', 'Crime'],
    plotOutline: {
      text:
        'Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. ',
    },
  },
  {
    id: '/title/tt9170108/',
    title: {
      image: {
        url: './assets/images/raised-by-wolves.jpg',
      },
      seriesEndYear: 'Present',
      seriesStartYear: 2020,
      title: 'Raised by Wolves',
    },
    ratings: {
      rating: 3.5,
    },
    genres: ['Drama', 'Fantasy', 'Sci-Fi'],
    plotOutline: {
      text:
        'Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. ',
    },
  },
];

const genres = [
  {
    description: 'Action',
    endpoint: '/chart/popular/genre/action',
  },
  {
    description: 'Adventure',
    endpoint: '/chart/popular/genre/adventure',
  },
  {
    description: 'Animation',
    endpoint: '/chart/popular/genre/animation',
  },
];

export default { genres, movies };
