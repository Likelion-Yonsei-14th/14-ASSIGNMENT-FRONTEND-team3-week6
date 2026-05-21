import BottomNav from "../components/common/BottomNav";
import { useState } from "react";
import TopBar from "../components/common/TopBar";

const events = [
  {
    id: 1,
    location: "학생회관 앞",
    title: "몬스터 행사",
    startDate: "2026-04-30",
    endDate: "2026-05-02",
    image: "/events/eventsphoto.svg",
  },
  {
    id: 2,
    location: "대우관 앞",
    title: "UIC 간식 행사",
    startDate: "2026-04-30",
    endDate: "2026-05-03",
    image: "/events/eventsphoto.svg",
  },
  {
    id: 3,
    location: "노천극장",
    title: "아카라카",
    startDate: "2026-05-23",
    endDate: "2026-05-23",
    image: "/events/eventsphoto.svg",
  },
  {
    id: 4,
    location: "학생회관 앞",
    title: "카스 행사",
    startDate: "2026-05-10",
    endDate: "2026-05-11",
    image: "/events/eventsphoto.svg",
  },
  {
    id: 5,
    location: "중앙도서관 앞",
    title: "아기 양과의 만남",
    startDate: "2026-04-30",
    endDate: "2026-05-05",
    image: "/events/eventsphoto.svg",
  },
];

const dateTabs = [
  { label: "오늘", display: "30", date: "2026-04-30" },
  { label: "금", display: "5.1", date: "2026-05-01" },
  { label: "토", display: "02", date: "2026-05-02" },
  { label: "일", display: "03", date: "2026-05-03" },
  { label: "월", display: "04", date: "2026-05-04" },
  { label: "화", display: "05", date: "2026-05-05" },
];

// 하이픈 모양의 날짜를 피그마에서 보이는 모양인 .으로 이어는 함수
function formatDateRange(start: string, end: string) {
  if (start === end) return start.replaceAll("-", "."); // 아카라카처럼 시작일과 종료일이 같으면 날짜가 하루로 나오게 함
  return `${start.replaceAll("-", ".")}~${end.replaceAll("-", ".")}`; // 시작일과 종료일이 같으면 (시작일) ~ (종료일)로 나오게 함
}

export default function Events() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  //나중에 문자열 (날짜) 형태로 setSelectedDate를 바꿀때 <string | null>이 없으면 에러가 난다.

  const filtered =
    selectedDate === null
      ? events //선택된 날짜가 없으면 모든 이벤트를 보여줌
      : events.filter(
          (e) => e.startDate <= selectedDate && e.endDate >= selectedDate,
          //선택된 날짜보다 시작일이 빠르거나 같고, 선택된 날짜보다 종료일이 늦거나 같은 행사를 보여준다.
        );

  return (
    <div className="flex flex-col h-screen max-w-[390px] mx-auto bg-slate-200">
      <TopBar />
      {/* 상단 slate 영역: 타이틀 + 날짜 탭 */}
      <div className="shrink-0 pt-4">
        <div className="text-center text-base text-black font-normal font-['Inter'] mb-4">
          행사
        </div>
      </div>
      <div className="flex-1 bg-white rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.05)] overflow-y-auto">
        <div className="flex gap-3 px-[23px] pb-4 pt-[17px] bg-white overflow-x-auto">
          {dateTabs.map((tab) => {
            const isSelected = tab.date === selectedDate;
            return (
              <button
                key={tab.date}
                onClick={() => setSelectedDate(isSelected ? null : tab.date)}
                className={`w-12 min-w-[48px] p-2.5 rounded-[10px] flex flex-col items-center gap-2.5 text-base font-normal font-['Inter'] leading-5 border-none cursor-pointer transition-all duration-150
                  ${
                    isSelected
                      ? "bg-blue-400 text-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)]"
                      : "bg-transparent text-black"
                  }`}
              >
                <span>{tab.label}</span>
                <span>{tab.display}</span>
              </button>
            );
          })}
        </div>
        {/* 위에서 정의한 filtered 함수를 통해 특정 날짜에 해당되는 이벤트들로 filtered */}
        {filtered.length === 0 ? (
          <div className="text-center text-gray-400 text-sm py-16">
            해당 날짜에 행사가 없습니다
          </div>
        ) : (
          filtered.map((event) => (
            <div
              key={event.id}
              className="flex h-[130px] items-center gap-5 px-5 py-7 border-t border-gray-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-16 h-20 rounded-[10px] object-cover shrink-0"
              />
              <div className="flex flex-col gap-2 flex-1">
                <div className="text-base font-normal font-['Inter'] leading-4">
                  <span className="text-blue-400">{event.location}</span>
                  <span className="text-black"> ㅣ {event.title}</span>
                </div>
                <div className="text-xs text-black font-normal font-['Inter'] leading-4">
                  {formatDateRange(event.startDate, event.endDate)}{" "}
                  {/* 위에서 정의한 날짜를 보기좋게 바꿔주는 함수를 이용 */}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {/* 하단 바는 하단에 고정함 */}
      <div className="shrink-0">
        <BottomNav />
      </div>
    </div>
  );
}
