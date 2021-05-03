import { API } from "../../CONSTANTS/API"
import { Root as CalendarByDistrict } from "../../types/calendarByPin&District";

/**
 * 
 * @param districtId District ID. ex:- 152
 * @param date Date on which you want to find appoinments. ex:- 03-04-2021.
 * 
 * 
 * `Strictly Follow this date format`:- `DD-MM-YYYY`
 */
export const calendarByDistrict = async (districtId: number, date: string): Promise<CalendarByDistrict> => {
  const res = await API.get(`/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtId}&date=${date}`)
  return await res.data
}