import BottomNav from "../components/common/BottomNav";
import TopBar from "../components/common/TopBar";
import { useState } from "react";

const shortcuts = [
  { id: 1, from: "대우관", to: "위당관", time: "5분 소요", distance: "500m" },
  {
    id: 2,
    from: "대우관 별관",
    to: "경영관",
    time: "5분 소요",
    distance: "500m",
  },
  {
    id: 3,
    from: "백주년기념관",
    to: "위당관",
    time: "5분 소요",
    distance: "500m",
  },
  {
    id: 4,
    from: "대우관",
    to: "교육과학관",
    time: "5분 소요",
    distance: "500m",
  },
  {
    id: 5,
    from: "외솔관",
    to: "교육과학관",
    time: "5분 소요",
    distance: "500m",
  },
  {
    id: 6,
    from: "중앙도서관",
    to: "외솔관",
    time: "5분 소요",
    distance: "500m",
  },
];

export default function Shortcut() {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");

  const isSearching = departure.trim() !== "" || destination.trim() !== "";

  const filtered = shortcuts.filter((item) => {
    const fromMatch =
      departure.trim() === "" || item.from.includes(departure.trim());
    const toMatch =
      destination.trim() === "" || item.to.includes(destination.trim());
    return fromMatch && toMatch;
  });

  const displayList = isSearching ? filtered : shortcuts;

  return (
    <div className="flex flex-col h-screen max-w-[390px] mx-auto bg-slate-200">
      <TopBar />

      {/* 출발지 / 도착지 입력 */}
      <div className="px-[41px] py-4 shrink-0">
        <div className="flex flex-col rounded-[10px] overflow-hidden border border-gray-300">
          <div className="flex items-center gap-3 px-4 h-10 bg-white border-b border-gray-300">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-800 shrink-0" />
            <input
              type="text"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              placeholder="출발지"
              className="flex-1 text-sm font-normal font-['Inter'] text-black bg-transparent outline-none placeholder-gray-400"
            />
          </div>
          <div className="flex items-center gap-3 px-4 h-10 bg-white">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shrink-0" />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="도착지"
              className="flex-1 text-sm font-normal font-['Inter'] text-black bg-transparent outline-none placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* 지름길 목록 */}
      <div className="flex-1 bg-white rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.05)] overflow-y-auto">
        {isSearching && filtered.length === 0 ? (
          <div className="text-center text-gray-400 text-sm py-16">
            해당 지름길 경로가 없습니다
          </div>
        ) : (
          <>
            {/* 검색 결과 or 전체 목록 */}
            {displayList.map((item) => (
              <div
                key={item.id}
                className="p-5 border-b border-gray-300 flex flex-col gap-2"
              >
                <div className="text-xs font-normal font-['Inter'] leading-4">
                  <span className="text-green-900">{item.time}</span>
                  <span className="text-black"> ㅣ {item.distance}</span>
                </div>
                <div className="text-base font-normal font-['Inter'] leading-4 text-black">
                  {item.from} → {item.to}
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => {}}
                    className="w-28 h-9 pl-3.5 py-2 bg-blue-400 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] flex items-center gap-2.5 cursor-pointer border-none"
                  >
                    <img
                      src="/shortcut/walker-icon.svg"
                      className="size-5 relative"
                    />
                    <span className="text-white text-sm font-normal font-['Inter'] leading-4">
                      안내하기
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="shrink-0">
        <BottomNav />
      </div>
    </div>
  );
}
