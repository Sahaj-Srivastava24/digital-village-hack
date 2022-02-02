import Home from "./pages/Home";
import Guidelines from "./pages/Guidelines";
import Problems from "./pages/Problems";
import Nav from "./components/Nav";
import bg from "./static/bg.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";

function App() {
  const bg_image_style = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundAttachment: "fixed",
    overflowX: "hidden",
  };
  return (
    <>
      <div className="main" style={bg_image_style}>
        <CssBaseline />
        <Nav />
        <Router>
          <Routes>
            <Route exact path="/problems" element={<Problems />} />
            <Route exact path="/guidelines" element={<Guidelines />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
