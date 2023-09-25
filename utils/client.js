import axios from "axios";

const fakeAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
  headers: { "Content-Type": "application/json" },
});

const fetcher = (url) =>
  fakeAPI
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err));

export { fetcher };
