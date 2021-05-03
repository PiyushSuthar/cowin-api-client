import { API } from "../../CONSTANTS/API"
import { Root as FindByPin } from "../../types/findByDistrictAndPin";

/**
 * 
 * @param pincode Pincode of the Area. ex:- 403601
 * @param date Date on which you want to find appoinments. ex:- 03-04-2021.
 * 
 * 
 * `Strictly Follow this date format`:- `DD-MM-YYYY`
 */
export const findByPin = async (pincode: number, date: string): Promise<FindByPin> => {
  const res = await API.get(`/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`)
  return await res.data
}