import { Review } from "./../types/reviews.d";
export {};
const data: Review[] = [
  {
    headline: "Amazing Pool!",
    comment:
      "Mauris justo ante, pulvinar eget consequat at, bibendum et lorem. Suspendisse lacus urna, fringilla sit amet commodo eget, condimentum et nisl. Pellentesque elit mi, porta in mi at, vulputate mattis lacus.",
    author: "Alissa Stacey",
    positiveFeedback: "The location is perfect",
    negativeFeedback: null,
    score: 4.1,
    channel: "AIRBNB",
    publishedAt: "2020-08-11T12:20:02.340Z",
  },
  {
    headline: "Very nice host, and quite chill place.",
    comment:
      "Nulla dictum ligula ac tortor egestas, sit amet ullamcorper risus sollicitudin. Morbi vitae leo accumsan, interdum ligula non, placerat ligula. Ut faucibus congue purus, vitae semper sapien viverra non. Pellentesque rhoncus porttitor diam, eu ultrices metus dictum at.",
    author: "Alissa Stacey",
    positiveFeedback: "The location is perfect",
    negativeFeedback: "No parking spot.",
    score: 4,
    channel: "HOLIDU",
    publishedAt: "2020-08-11T12:20:02.340Z",
  },
  {
    headline: "Location is perfect!!",
    comment:
      "Morbi porttitor nisl ipsum, a facilisis purus euismod eu. Praesent consequat interdum nisi ut auctor. Sed posuere est porta neque pretium viverra. Nulla vel finibus nulla.",
    author: "Amirah Brandt",
    positiveFeedback: "Everything you need is there",
    negativeFeedback: null,
    score: 4.1,
    channel: "HOLIDU",
    publishedAt: "2020-08-11T12:20:02.340Z",
  },
  {
    headline: "Very nice host, and quite chill place.",
    comment:
      "Donec lacus mi, tincidunt a pulvinar sed, malesuada sed nunc. Nullam euismod ultricies elit. Integer et magna et tortor viverra malesuada eget vitae eros. Mauris vitae ultricies mi.",
    author: "Kaisha Melton",
    positiveFeedback: "The location is perfect",
    negativeFeedback: "A bit dusty",
    score: 4,
    channel: "BOOKINGCOM",
    publishedAt: "2020-08-11T12:20:02.340Z",
  },
  {
    headline: "Very nice host, and quite chill place.",
    comment:
      "Nulla dictum ligula ac tortor egestas, sit amet ullamcorper risus sollicitudin. Morbi vitae leo accumsan, interdum ligula non, placerat ligula. Ut faucibus congue purus, vitae semper sapien viverra non. Pellentesque rhoncus porttitor diam, eu ultrices metus dictum at.",
    author: "Alissa Stacey",
    positiveFeedback: null,
    negativeFeedback: null,
    score: 4.3,
    channel: "HOLIDU",
    publishedAt: "2020-08-11T12:20:02.340Z",
  },
];

export default function generateReviews(numOfReviews = 1): Review[] {
  const slicedReviews = data.slice(0, numOfReviews);

  return slicedReviews;
}
