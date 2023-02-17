const element = (
  // Write your code here.
  <div className="container">
    <h1 className="heading">Congratulations</h1>
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="photo"
      />
      <h1>Kiran V</h1>
      <p>Vishnu Institute of computer Education and Technologies,Bhimavaram</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="photo"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
