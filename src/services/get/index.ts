import { api } from "../../utils/axios";

export async function get_Repos() {
  return api('/Emerson-lab/repos');
}

export async function get_User() {
  return api('/emerson-lab');
}