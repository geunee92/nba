import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LineupPage from "./pages/LineupPage";
import Navbar from "../src/components/Navbar";
import PopularLineupList from "./pages/PopularLineupList";
import useLoadKakao from "./hooks/useLoadKakao";

function App() {
  useLoadKakao();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/lineup" element={<LineupPage />} />

        <Route path="/PopularLineup" element={<PopularLineupList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
