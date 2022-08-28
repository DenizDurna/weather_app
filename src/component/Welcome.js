import "../css/Welcome.css";
import { useSelector, useDispatch } from "react-redux";
import { setErrorMesage, setApikey, setValue } from "../stores/weatherSlice";

function Welcome() {
  const { errorMesage, value } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setValue(event.target.value));
    dispatch(setErrorMesage(""));
  };

  const userApiSubmit = () => {
    dispatch(setApikey(value));
    sessionStorage.setItem("apiKey", value);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="card p-3 text-center opacity-75 bg-secondary m-auto">
          <label className="m-3 h2 text-info" htmlFor="login">
            Lütfen Api Keyinizi Giriniz
          </label>
          <input
            className="form-control rounded-3"
            type="text"
            id="login"
            value={value}
            onChange={handleChange}
          ></input>
          <br></br>
          <button
            className="btn btn-primary mb-3"
            type="submit"
            onClick={userApiSubmit}
          >
            Giriş
          </button>
          <p className="text-danger">{errorMesage}</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
