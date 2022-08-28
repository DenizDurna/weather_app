import "../css/Weather.css";
import { useSelector, useDispatch } from "react-redux";
import { setCity } from "../stores/weatherSlice";
import cityName from "../constant/cityNames.constant.json"
import days from "../constant/daysNames.constant.json"

// Gün ve tarih 
const day = days[new Date().getDay() - 1];
let date = new Date().toLocaleDateString();


function Weather(props) {
  const { city, apiData } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const cityChange = (event) => {
    dispatch(setCity(event.target.value));
  };

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="box text-start p-5 text-dark rounded-5 fs-1 text-capitalize lh-1 display-1">
          <h1>Hava Durumu</h1>
          <select
            className="form-select mb-2 text-center"
            value={city}
            onChange={cityChange}
          >
            {cityName.map((cityy) => {
              return (
                <option key={cityy.id} value={cityy.name}>
                  {cityy.name}
                </option>
              );
            })}
          </select>

          <div className="mb-5">
            <p>{day}</p>
            <p>{date}</p>
          </div>
          <p className="pt-5">
              <i className="bi bi-moisture"></i>
            % {apiData.main.humidity} Nem
          </p>
          <p className="heat display-1 mt-4">{Math.round(apiData.main.temp)} °C</p>
          <img
            height="100px"
            src={`http://openweathermap.org/img/wn/${apiData.weather[0].icon}.png`}
            alt=""
          ></img>
          <p>{apiData.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
