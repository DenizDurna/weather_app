import Welcome from "./Welcome";
import Weather from "./Weather";
import Error from "./Error";
import axios from "axios";
import { useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { useSelector, useDispatch } from "react-redux";
import { setErrorMesage, setApiData, setShow, setCod } from "../stores/weatherSlice";

function App() {
  const { apiKey, city, show, value, cod } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  // Api sorgusu alanı
  useEffect(() => {
    const getApi =
      async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=tr&units=metric`
          );
          dispatch(setShow(true));
          dispatch(setApiData(response.data));
          dispatch(setCod(""));
          sessionStorage.setItem("refresh", "false");

        } catch (error) {
          if (apiKey === "" || value === "") {
            dispatch(setErrorMesage(""));
            dispatch(setCod(error.response.data.cod));
          } else if (error.response.data.cod === 401) {
            dispatch(setErrorMesage("Hatalı API Key Girdiniz"));
            dispatch(setCod(error.response.data.cod));
          } else {
            dispatch(setErrorMesage("Sunucu Hatası"));
            dispatch(setCod(error.response.data.cod));
          }
        }
      }
    if (value !== "" || apiKey !== "") {
      getApi();
    }
  }, [apiKey, city]);


 // Dom'da dagösterilecek alanlar
  if (show) {
    return (
      <Weather />
    );
  } else if (sessionStorage.getItem("refresh") !== "false") {
    return (
      <Welcome />
    );
  } else if (cod !== "") {
    return (
      <Error />
    );
  }
}

export default App;