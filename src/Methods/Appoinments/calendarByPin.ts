import { API } from "../../CONSTANTS/API"
import { Root as CalendarByDistrict } from "../../types/calendarByPin&District";

/**
 * 
 * @param pincode Pincode of the Area. ex:- 403601
 * @param date Date on which you want to find appoinments. ex:- 03-04-2021.
 * 
 * 
 * `Strictly Follow this date format`:- `DD-MM-YYYY`
 */
export const calendarByPin = async (pincode: number, date: string): Promise<CalendarByDistrict> => {
  const res = await API.get(`/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`)
  return await res.data
}