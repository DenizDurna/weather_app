import "../css/Welcome.css";

function Error() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="card p-3 text-center opacity-75 bg-secondary m-auto">
          <p class="h1" style={{ color: "red", textAlign: "center" }}>
            !!!Sunucu Hatası Lütfen Sayfayı Yenileyiniz, Sorun devam ederse daha sonra tekar deneyiniz...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Error;
