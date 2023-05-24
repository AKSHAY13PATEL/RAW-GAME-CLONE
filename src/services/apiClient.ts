import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "e7b716a8fc844c76842420385f492754",
  },
});
