import {
  getStates,
  getDistricts,
  calendarByDistrict,
  calendarByPin,
  findByDistrict,
  findByPin
} from "../src";

const start = async () => {

  // Getting All the states
  const states = await getStates()

  // Getting all the districts of that state.
  const districts = await getDistricts(states.states[0].state_id)

  // Getting appoinments by Pincode
  const appoinmentsByPin = await findByPin(403601, "03-05-2021")

  // Getting appoinments by Districts
  const appoinmentsByDistrict = await findByDistrict(districts.districts[0].district_id, "03-05-2021")

  // get planned vaccination sessions for 7 days from a specific date in a given district.
  const CalendarByPin = await calendarByPin(403601, "03-05-2021")

  // get planned vaccination sessions for 7 days from a specific date in a given pincode.
  const CalendarByDistrict = await calendarByDistrict(districts.districts[0].district_id, "03-05-2021")

}

start()