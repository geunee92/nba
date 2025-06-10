import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LineupPage from "./pages/LineupPage";
import { Navbar } from "../src/components/Navbar";
// import NotFound from './pages/NotFound'; // 필요 시

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/lineup" element={<LineupPage />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
