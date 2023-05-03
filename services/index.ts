import axios from "axios";

export const api = axios.create({
  baseURL: 'http://ddragon.leagueoflegends.com/',
  headers: {
    Authorization: 'Bearer ' + 'RGAPI-4230d0ce-4eba-4892-a98f-6fa507f71752'
  }
})
