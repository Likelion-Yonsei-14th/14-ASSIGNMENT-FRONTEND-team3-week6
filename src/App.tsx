import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Home from "./pages/Homepage";
import Shortcut from "./pages/Shortcut";
import Events from "./pages/Events";
import Mypage from "./pages/Mypage";

export default function App() {
  return (
    <div className="h-[852px] flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shortcut" element={<Shortcut />} />
            <Route path="/events" element={<Events />} />
            <Route path="/mypage" element={<Mypage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
