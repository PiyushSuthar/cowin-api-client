<p align="center" >
    <h1 align="center">Co-Win API Client 🚀</h1>
    <p align="center">API wrapper for Co-Win API from API Setu.</p>
</p>

## 🙏 Donate

Currently India is facing the second wave of Covid19. Our health care system has collapsed, so please consider donating to these NGOs who are helping people.

- Hemkunt Foundation (Helping people with oxygen)
- indiafightscorona.giveindia.org (Multiple fundraisers related to covid)
- More at https://donate.indiacovidresources.in/

## 🤔 Why to use this?

It makes your developement easier and it has Type Definations too 🤟.

## 🔗 Installation

```sh
# npm install cowin-api-client
yarn add cowin-api-client
```

## ⚡️ Usage

I have added all the [Co-WIN public API](https://apisetu.gov.in/public/marketplace/api/cowin/cowin-public-v2) methods except Authentication. Will be adding them ASAP, Maybe you can contribute too.

```ts
import {
  getStates,
  getDistricts,
  calendarByDistrict,
  calendarByPin,
  findByDistrict,
  findByPin,
} from "cowin-api-client";

const start = async () => {
  // Getting All the states
  const states = await getStates();

  // Getting all the districts of that state.
  const districts = await getDistricts(states.states[0].state_id);

  // Getting appoinments by Pincode
  const appoinmentsByPin = await findByPin(403601, "03-05-2021");

  // Getting appoinments by Districts
  const appoinmentsByDistrict = await findByDistrict(
    districts.districts[0].district_id,
    "03-05-2021"
  );

  // get planned vaccination sessions for 7 days from a specific date in a given district.
  const CalendarByPin = await calendarByPin(403601, "03-05-2021");

  // get planned vaccination sessions for 7 days from a specific date in a given pincode.
  const CalendarByDistrict = await calendarByDistrict(
    districts.districts[0].district_id,
    "03-05-2021"
  );
};

start();
```

## 📃 Todos

- Add more methods. Especially for Authentication.
- More. ([Create an Issue](https://github.com/piyushsuthar/cowin-api-client/issues))

## 🤟 Contributions

Contributions, issues and feature requests are welcome!

if you feel that something is missing, feel free to create an [Issue](https://github.com/piyushsuthar/cowin-api-client/issues).

## ❤ Support

Almost all the project I make are Open Source.
I request you to donate to NGOs who are working Day-Night to help people.

Do ⭐ this Project.

---

Made with ❤ and TypeScript.
