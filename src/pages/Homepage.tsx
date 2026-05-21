import { useState } from "react";
import BottomNav from "../components/common/BottomNav";

export default function Home() {
  // 현재 화면 상태 관리 ('home', 'shortcut', 'menu')
  const [viewMode, setViewMode] = useState<"home" | "shortcut" | "menu">(
    "home",
  );

  // 실제 검색어 입력을 위한 상태 관리
  const [searchQuery, setSearchQuery] = useState("");

  // 검색 제출 함수
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    alert(`'${searchQuery}' 검색 결과를 불러옵니다.`);
  };

  return (
    <div className="relative w-full max-w-[430px] h-screen bg-[#F4F5F7] overflow-hidden flex flex-col justify-between mx-auto border-x border-gray-200 shadow-lg">
      {/* 배경 지도 (모든 뷰모드에서 기본적으로 깔려있음) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Homepage/map.svg"
          alt="Map Background"
          className="w-full h-full object-cover"
        />
        {/* 현위치 마커 */}
        <div className="absolute top-[35%] left-[53%] transform -translate-x-1/2 -translate-y-1/2">
          {/* 전체 크기는 원래 큰 크기(h-8 w-8) 유지 */}
          <div className="relative flex h-8 w-8">
            {/* 1. 바깥 퍼지는 애니메이션 효과 (그대로 유지) */}
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>

            {/* 2. 바탕이 되는 큰 흰색 원 (입체감을 위해 그림자 유지) */}
            <div className="relative inline-flex rounded-full h-8 w-8 bg-white shadow-lg">
              <span className="absolute inset-0 m-auto inline-flex rounded-full h-5 w-5 bg-blue-600"></span>
            </div>
          </div>
        </div>
      </div>

      {/* 1. 홈 화면 UI */}
      {viewMode === "home" && (
        <>
          {/* 상단 검색 & 길찾기 바 */}
          <div className="absolute top-12 left-0 right-0 px-[19px] z-10 flex gap-2.5 items-center justify-between">
            <form
              onSubmit={handleSearchSubmit}
              className="flex-1 h-[53px] bg-white rounded-xl flex items-center px-4 gap-2"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)" }}
            >
              <button
                type="submit"
                className="flex items-center justify-center"
              >
                <img
                  src="/Homepage/searchbar.svg"
                  alt="Search Icon"
                  className="w-5 h-5 cursor-pointer"
                />
              </button>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="위치 검색"
                className="flex-1 bg-transparent outline-none text-[15px] font-medium text-[#333] placeholder-[#999]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-gray-400 hover:text-gray-600 text-sm font-bold px-1"
                >
                  ✕
                </button>
              )}
            </form>

            {/* 길찾기 버튼 */}
            <button
              onClick={() => setViewMode("shortcut")}
              className="w-[53px] h-[53px] bg-[#4F80E2] rounded-xl flex flex-col items-center justify-center text-white shadow-md active:scale-95 transition-all"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)" }}
            >
              <img
                src="/Homepage/road sign.svg"
                alt="Route Icon"
                className="w-[20px] h-[20px] mb-0.5"
              />
              <span className="text-[10px] font-bold leading-none">길찾기</span>
            </button>
          </div>

          {/* 오른쪽 하단 메뉴 플로팅 버튼 (Figma - Frame 49) */}
          <div className="absolute bottom-[100px] right-[19px] z-10 cursor-pointer">
            <button
              onClick={() => setViewMode("menu")}
              className="block active:scale-95 transition-all"
            >
              <img
                src="/Homepage/Frame 49.svg"
                alt="Menu Open"
                className="w-[53px] h-[53px]"
              />
            </button>
          </div>
        </>
      )}

      {/* 2. 지름길 화면 UI */}
      {viewMode === "shortcut" && (
        <div className="absolute inset-0 z-10 flex flex-col justify-between bg-black/10 backdrop-blur-[1px]">
          <div className="bg-white px-4 pt-12 pb-4 shadow-md rounded-b-2xl">
            <button
              onClick={() => setViewMode("home")}
              className="text-sm text-[#4F80E2] mb-3 flex items-center gap-1 font-semibold"
            >
              ← 지도 홈으로
            </button>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 bg-[#F4F5F7] px-3 py-2.5 rounded-xl border border-gray-100">
                <span className="w-2 h-2 rounded-full bg-[#4F80E2]"></span>
                <input
                  type="text"
                  placeholder="출발지"
                  defaultValue="대우관"
                  className="bg-transparent outline-none text-sm font-medium w-full"
                />
              </div>
              <div className="flex items-center gap-3 bg-[#F4F5F7] px-3 py-2.5 rounded-xl border border-gray-100">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <input
                  type="text"
                  placeholder="도착지"
                  defaultValue="위당관"
                  className="bg-transparent outline-none text-sm font-medium w-full"
                />
              </div>
            </div>
          </div>

          <div className="mb-24 mx-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#E65B5B] font-bold text-lg">
                    5분 소요
                  </span>
                  <span className="text-gray-400 text-sm">| 500m</span>
                </div>
                <p className="text-gray-700 font-semibold text-[15px]">
                  대우관 → 위당관
                </p>
              </div>
              <button className="bg-[#4F80E2] text-white text-sm font-bold px-4 py-2.5 rounded-xl flex items-center gap-1 shadow-md hover:bg-blue-600 active:scale-95 transition-all">
                <span>🧭</span> 안내하기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. 새로운 메뉴 페이지 UI (Frame 49 클릭 시 발생) */}
      {viewMode === "menu" && (
        <div className="absolute inset-0 z-10 flex flex-col justify-end bg-black/40 backdrop-blur-[2px] transition-all animate-fadeIn">
          {/* 하단에서 올라오는 팝업 카드 형태 */}
          <div className="w-full bg-white rounded-t-3xl p-6 pb-28 shadow-2xl flex flex-col gap-5 border-t border-gray-100">
            {/* 상단 헤더 영역 */}
            <div className="flex justify-between items-center border-b pb-3 border-gray-100">
              <h2 className="text-lg font-bold text-[#333]">전체 메뉴</h2>
              <button
                onClick={() => setViewMode("home")}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 text-xl font-bold bg-gray-100 rounded-full"
              >
                ✕
              </button>
            </div>

            {/* 메뉴 콘텐츠 영역 (원하는 리스트로 커스텀 가능) */}
            <div className="grid grid-cols-2 gap-3">
              <button className="p-4 bg-[#F8FAFC] hover:bg-gray-100 rounded-xl text-left border border-gray-500/5 transition-all">
                <span className="text-2xl block mb-1">🚻</span>
                <span className="text-sm font-bold text-gray-800">화장실</span>
              </button>
              <button className="p-4 bg-[#F8FAFC] hover:bg-gray-100 rounded-xl text-left border border-gray-500/5 transition-all">
                <span className="text-2xl block mb-1">🚰</span>
                <span className="text-sm font-bold text-gray-800">정수기</span>
              </button>
              <button className="p-4 bg-[#F8FAFC] hover:bg-gray-100 rounded-xl text-left border border-gray-500/5 transition-all">
                <span className="text-2xl block mb-1">🏪</span>
                <span className="text-sm font-bold text-gray-800">편의점</span>
              </button>
              <button className="p-4 bg-[#F8FAFC] hover:bg-gray-100 rounded-xl text-left border border-gray-500/5 transition-all">
                <span className="text-2xl block mb-1">🛌</span>
                <span className="text-sm font-bold text-gray-800">휴게실</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 하단 네비게이션 */}
      <div className="w-full z-20 mt-auto">
        <BottomNav />
      </div>
    </div>
  );
}
