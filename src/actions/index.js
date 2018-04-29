import { API_KEY } from "../hidden/api_keys";
import axios from "axios";

export const FETCH_ID = "fetch_id";

export function fetchId(name, server) {
  const url = `https://${server}.api.riotgames.com/lol/summoner/v3/summoners/by-name/${name}?api_key=${API_KEY}`;
  const request = axios.get(url);
  console.log("fired");
  return({
    type: FETCH_ID,
    payload: request
  });
}
