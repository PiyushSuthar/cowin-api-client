import { API } from "../../CONSTANTS/API"

export interface Districts {
  districts: District[]
  ttl: number
}

export interface District {
  district_id: number
  district_name: string
}

export const getDistricts = async (stateId: number): Promise<Districts> => {
  const res = await API.get(`/v2/admin/location/districts/${stateId}`)
  return await res.data
}