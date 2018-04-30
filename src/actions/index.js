import { API_KEY } from "../hidden/api_keys";
import axios from "axios";

export const FETCH_ID = "fetch_id";
export const FETCH_MATCHES = "fetch_matches";

export function fetchId(name, server) {
  const url = `https://${server}.api.riotgames.com/lol/summoner/v3/summoners/by-name/${name}?api_key=${API_KEY}`;
  const request = axios.get(url);
  return({
    type: FETCH_ID,
    payload: request
  });
}

export function fetchMatchHistory(id, server) {
  const url = `https://${server}.api.riotgames.com/lol/match/v3/matchlists/by-account/${id}/recent?api_key=${API_KEY}`;
  const request = axios.get(url);
  return({
    type: FETCH_MATCHES,
    payload: request
  })
}
