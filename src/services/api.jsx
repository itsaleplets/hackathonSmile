import axios from 'axios';

// const baseUrl = 'http://127.0.0.1:8000';
const baseUrl = 'https://605fb0b604b05d0017ba19f4.mockapi.io';

// http://127.0.0.1:8000/perfil/ 

const TripDate = async (style, value) => axios
.post(`${baseUrl}/resumo_date`, {
  style,
  value
})
.then((res) => ({ response: res.data, result: true }))
.catch((err) => ({ response: err, result: false }));

const TripInvestment = async (style, date) => axios
.post(`${baseUrl}/resumo`, {
  style,
  date
})
.then((res) => ({ response: res.data, result: true }))
.catch((err) => ({ response: err, result: false }));

const TripInfo = async () => axios
.get(`${baseUrl}/trip`)
.then((res) => ({ response: res.data }))
.catch((err) => ({ response: err }));

export {
  TripDate,
  TripInvestment,
  TripInfo
};
