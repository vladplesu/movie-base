const movies = [
  {
    id: '/title/tt2948372/',
    title: {
      image: {
        url: './assets/images/soul.jpg',
      },
      runningTimeInMinutes: 100,
      title: 'Soul',
      titleType: 'movie',
      year: 2020,
    },
    ratings: {
      rating: 8.2,
    },
    genres: ['Animation', 'Adventure', 'Comedy', 'Family', 'Fantasy', 'Music'],
    plotOutline: {
      text:
        'A musician who has lost his passion for music is transported out of his body and must find his way back with the help of an infant soul learning about herself.',
    },
  },
  {
    id: '/title/tt7126948/',
    title: {
      image: {
        url: './assets/images/wonder-woman-1984.jpg',
      },
      runningTimeInMinutes: 151,
      title: 'Wonder Woman 1984',
      titleType: 'movie',
      year: 2020,
    },
    ratings: {
      rating: 5.5,
    },
    genres: ['Action', 'Adventure', 'Fantasy'],
    plotOutline: {
      text:
        'Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down a path of destruction, after an ancient artifact that grants wishes goes missing.',
    },
  },
  {
    id: '/title/tt6723592/',
    title: {
      image: {
        url: './assets/images/tenet.jpg',
      },
      runningTimeInMinutes: 150,
      title: 'Tenet',
      titleType: 'movie',
      year: 2020,
    },
    ratings: {
      rating: 7.5,
    },
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    plotOutline: {
      text:
        'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
    },
  },
  {
    id: '/title/tt9691136/',
    title: {
      image: {
        url: './assets/images/shadow-in-the-cloud.jpg',
      },
      runningTimeInMinutes: 83,
      title: 'Shadow in the cloud',
      titleType: 'movie',
      year: 2020,
    },
    ratings: {
      rating: 4.7,
    },
    genres: ['Action', 'Horror', 'War'],
    plotOutline: {
      text:
        'A female WWII pilot traveling with top secret documents on a B-17 Flying Fortress encounters an evil presence on board the flight.',
    },
  },
  {
    id: '/title/tt11161474/',
    title: {
      image: {
        url: './assets/images/pieces-of-a-woman.jpg',
      },
      runningTimeInMinutes: 126,
      title: 'Pieces of a woman',
      titleType: 'movie',
      year: 2020,
    },
    ratings: {
      rating: 7.1,
    },
    genres: ['Drama'],
    plotOutline: {
      text:
        "When a young mother's home birth ends in unfathomable tragedy, she begins a year-long odyssey of mourning that fractures relationships with loved ones in this deeply personal story of a woman learning to live alongside her loss.",
    },
  },
  {
    id: '/title/tt0087538/',
    title: {
      image: {
        url: './assets/images/karate-kid.jpg',
      },
      runningTimeInMinutes: 126,
      title: 'The karate kid',
      titleType: 'movie',
      year: 1984,
    },
    ratings: {
      rating: 7.3,
    },
    genres: ['Action', 'Drama', 'Family'],
    plotOutline: {
      text: 'A martial arts master agrees to teach karate to a bullied teenager.',
    },
  },
  {
    id: '/title/tt10539608/',
    title: {
      image: {
        url: './assets/images/the-midnight-sky.jpg',
      },
      runningTimeInMinutes: 118,
      title: 'The midnight sky',
      titleType: 'movie',
      year: 2020,
    },
    ratings: {
      rating: 5.6,
    },
    genres: ['Drama', 'Fantasy', 'Sci-Fi'],
    plotOutline: {
      text:
        'This post-apocalyptic tale follows Augustine, a lonely scientist in the Arctic, as he races to stop Sully and her fellow astronauts from returning home to a mysterious global catastrophe.',
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
      titleType: 'tvSeries',
    },
    ratings: {
      rating: 8.7,
    },
    genres: ['Action', 'Comedy', 'Crime'],
    plotOutline: {
      text:
        'Decades after their 1984 All Valley Karate Tournament bout, a middle-aged Daniel LaRusso and Johnny Lawrence find themselves martial-arts rivals again.',
    },
  },
  {
    id: '/title/tt8740790/',
    title: {
      image: {
        url: './assets/images/bridgerton.jpg',
      },
      seriesEndYear: 'Present',
      seriesStartYear: 2020,
      title: 'Bridgerton',
      titleType: 'tvSeries',
    },
    ratings: {
      rating: 7.4,
    },
    genres: ['Drama', 'Romance'],
    plotOutline: {
      text:
        'Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family.',
    },
  },
  {
    id: '/title/tt2306299/',
    title: {
      image: {
        url: './assets/images/vikings.jpg',
      },
      seriesEndYear: 2020,
      seriesStartYear: 2013,
      title: 'Vikings',
      titleType: 'tvSeries',
    },
    ratings: {
      rating: 8.5,
    },
    genres: ['Action', 'Adventure', 'Drama'],
    plotOutline: {
      text:
        'Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.',
    },
  },
  {
    id: '/title/tt8111088/',
    title: {
      image: {
        url: './assets/images/the-mandalorian.jpg',
      },
      seriesEndYear: 'Present',
      seriesStartYear: 2019,
      title: 'The mandalorian',
      titleType: 'tvSeries',
    },
    ratings: {
      rating: 8.8,
    },
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    plotOutline: {
      text:
        'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
    },
  },
  {
    id: '/title/tt10048342/',
    title: {
      image: {
        url: './assets/images/the-queens-gambit.jpg',
      },
      seriesEndYear: 2020,
      seriesStartYear: 2020,
      title: "The queen's gambit",
      titleType: 'tvSeries',
    },
    ratings: {
      rating: 8.7,
    },
    genres: ['Drama'],
    plotOutline: {
      text:
        'Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.',
    },
  },
  {
    id: '/title/tt7569592/',
    title: {
      image: {
        url: './assets/images/sabrina.jpg',
      },
      seriesEndYear: 2020,
      seriesStartYear: 2018,
      title: 'Chilling adventures of Sabrina',
      titleType: 'tvSeries',
    },
    ratings: {
      rating: 7.5,
    },
    genres: ['Drama', 'Fantasy', 'Horror'],
    plotOutline: {
      text:
        'As her 16th birthday nears, Sabrina must choose between the witch world of her family and the human world of her friends. Based on the Archie comic.',
    },
  },
  {
    id: '/title/tt4786824/',
    title: {
      image: {
        url: './assets/images/the-crown.jpg',
      },
      seriesEndYear: 'Present',
      seriesStartYear: 2016,
      title: 'The Crown',
      titleType: 'tvSeries',
    },
    ratings: {
      rating: 8.7,
    },
    genres: ['Biography', 'Drama', 'History'],
    plotOutline: {
      text:
        "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
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
  {
    description: 'Biography',
    endpoint: '/chart/popular/genre/biography',
  },
  {
    description: 'Comedy',
    endpoint: '/chart/popular/genre/comedy',
  },
  {
    description: 'crime',
    endpoint: '/chart/popular/genre/crime',
  },
  {
    description: 'Drama',
    endpoint: '/chart/popular/genre/drama',
  },
  {
    description: 'family',
    endpoint: '/chart/popular/genre/family',
  },
  {
    description: 'Fantasy',
    endpoint: '/chart/popular/genre/fantasy',
  },
  {
    description: 'history',
    endpoint: '/chart/popular/genre/history',
  },
  {
    description: 'horror',
    endpoint: '/chart/popular/genre/horror',
  },
  {
    description: 'romance',
    endpoint: '/chart/popular/genre/romance',
  },
  {
    description: 'sci-fi',
    endpoint: '/chart/popular/genre/sci-fi',
  },
  {
    description: 'thriller',
    endpoint: '/chart/popular/genre/thriller',
  },
  {
    description: 'war',
    endpoint: '/chart/popular/genre/war',
  },
];

export default { genres, movies };
