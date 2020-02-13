import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "6fefd2b81af86bf25c213d3309e48bc4",
    language: "en-US"
  }
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComing: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        appends_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  popular: () => api.get("/tv/popular"),
  topRated: () => api.get("tv/top_rated"),
  airingToday: () => api.get("tv/airing_today"),
  tvShowDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        appends_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
