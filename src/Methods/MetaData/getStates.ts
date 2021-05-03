import { API } from "../../CONSTANTS/API"

export interface States {
  states: State[]
  ttl: number
}

export interface State {
  state_id: number
  state_name: string
}

export const getStates = async (): Promise<States> => {
  const res = await API.get("/v2/admin/location/states")
  return await res.data
}