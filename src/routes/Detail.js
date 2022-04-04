import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./routes/home";

function Detail() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Detail;
