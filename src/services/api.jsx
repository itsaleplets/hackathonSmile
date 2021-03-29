import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000';

const TripDate = async (style, value) => axios
  .get(`${baseUrl}/resumo_date`, {
    style,
    value
  })
  .then((res) => ({ response: res.data, result: true }))
  .catch((err) => ({ response: err, result: false }));

const TripInvestment = async (style, date) => axios
  .get(`${baseUrl}/resumo/8/`, {
    style,
    date
  })
  .then((res) => ({ response: res.data, result: true }))
  .catch((err) => ({ response: err, result: false }));

const TripInfo = async () => axios
  .get(`${baseUrl}/trip/7/`)
  .then((res) => ({ response: res.data }))
  .catch((err) => ({ response: err }));

export {
  TripDate,
  TripInvestment,
  TripInfo
};
