const APIKEY = process.env.REACT_APP_TMDB_KEY;

const requests = [
  {
    genre: "Netflix Originals",
    url: `/discover/tv?api_key=${APIKEY}&with_networks=213`
  },
  {
    genre: "Trending",
    url: `/trending/all/week?api_key=${APIKEY}&language=en-US`
  },

  {
    genre: "Top Rated",
    url: `/movie/top_rated?api_key=${APIKEY}&language=en-US`
  },
  {
    genre: "Action Movies",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=28`
  },
  {
    genre: "Comedy Movies",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=35`
  },
  {
    genre: "Horror Movies",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=27`
  },
  {
    genre: "Romance Movies",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=10749`
  },
  {
    genre: "Documentaries",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=99`
  }
];

export default requests;
