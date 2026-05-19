import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Home from "./pages/Homepage";
import Shortcut from "./pages/Shortcut";
import Events from "./pages/Events";
import Mypage from "./pages/Mypage";
import { useEffect, useState } from "react";
import Loading from "./pages/Loadingpage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2. 3초(3000ms) 후에 isLoading 상태를 false로 변경
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // 3. 컴포넌트가 사라질 때 타이머 정리 (메모리 누수 방지)
    return () => clearTimeout(timer);
  }, []);

  // 4. 조건부 렌더링: isLoading이 true면 로딩 페이지, false면 메인 페이지
  return (
    <div className="App">
      <div className="h-[852px] flex justify-center">
        <div className="w-full max-w-[430px] min-h-screen">
          {isLoading ? (
            <Loading />
          ) : (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shortcut" element={<Shortcut />} />
                <Route path="/events" element={<Events />} />
                <Route path="/mypage" element={<Mypage />} />
              </Routes>
            </BrowserRouter>
          )}
        </div>
      </div>
    </div>
  );
}
