import React from "react";
import { withRouter } from "react-router-dom";

const Home = ({ history }) => {
  return (
    <div>
      <h1>Halaman Home</h1>
      <button onClick={() => history.push("peoples")}>Lihat Redux</button>
    </div>
  );
};

export default withRouter(Home);
