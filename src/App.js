import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav/MyNav";
import FooterPart from "./components/Footer/FooterPart";
import MovieList from "./components/SingleMoovie/MovieList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <MyNav />
        <Routes>
          <Route path="/TvShows" element={<TvShows />} />
          <Route path="/" element={<MovieList />}></Route>
          <Route path="/MovieDetails/:movieId" element={<MovieDetails/>}></Route>
        </Routes>
        <FooterPart />
      </div>
    </Router>
  );
}

export default App;
