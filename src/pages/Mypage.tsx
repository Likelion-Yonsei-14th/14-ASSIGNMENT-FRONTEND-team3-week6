import { Link } from "react-router-dom";
import { Star, Bell, Settings, HelpCircle } from "lucide-react";
import BottomNav from "../components/common/BottomNav";
import Topbar from "../components/common/TopBar"; 

export default function Mypage() {
  return (
    // 전체 브라우저 배경은 흰색으로 두고, 아이템들을 화면 중앙에 배치합니다.
    <div className="min-h-screen bg-white flex justify-center items-start select-none font-sans text-[#2d3748]">
      
      {/* 실제 앱 화면이 되는 컨테이너에 배경색(#eef3f8)과 최대 높이를 주어 빈 공간을 채웁니다. */}
      <div className="w-full max-w-md min-h-screen bg-[#eef3f8] pb-28 flex flex-col items-center relative shadow-lg">
        
        {/* 상단 바 영역 */}
        <Topbar />

        {/* 메인 스크롤/컨텐츠 영역 */}
        <div className="w-full px-5 flex flex-col gap-4 flex-1">
          
          {/* 프로필 섹션 */}
          <div className="flex flex-col items-center pt-2 pb-2 shrink-0">
            {/* 기존 크기(w-24 h-24)를 유지하면서 Ellipse.svg를 배경으로 깔고, 
              그 중앙에 Eagle.svg가 겹쳐서 보이도록 relative/absolute 구조를 사용했습니다.
            */}
            <div className="w-24 h-24 relative flex items-center justify-center mb-3">
              {/* 배경 원 (Ellipse) */}
              <img 
                src="/Mypage/Ellipse.svg" 
                alt="배경 원" 
                className="w-full h-full object-contain"
              />
              {/* 독수리 이미지 (Eagle) */}
              <img 
                src="/Mypage/eagle.svg" 
                alt="독수리" 
                className="absolute w-[70%] h-[70%] object-contain" 
              />
              <div className="absolute w-2 h-2 bg-black rounded-full -translate-x-2 -translate-y-3" />
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-500 font-medium">환영합니다!</p>
              <div className="flex items-center justify-center gap-2 mt-0.5">
                <span className="text-xl font-bold text-gray-800">헤메는독수리1885님</span>
                <Link to="/my-info" className="flex flex-col items-center group">
      <span className="text-xs text-gray-400 font-medium leading-none translate-x-2 translate-y-1">내 정보</span>
      {/* 글자 바로 밑에 1px짜리 물리적인 선을 강제로 그려줍니다. */}
      <div className="w-full h-[1px] bg-gray-300 mt-[3px] translate-x-2 translate-y-0.5" />
    </Link>
              </div>
            </div>
          </div>

          {/* 레벨 및 경험치 카드 */}
          <div className="bg-white rounded-2xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.02)] shrink-0">
  <div className="flex flex-col gap-1 mb-4">
    <h3 className="text-lg font-bold text-gray-900">Lv2. 어린이 독수리</h3>
    <p className="text-xs text-gray-400">4번 더 접속하면 레벨이 올라요!</p>
  </div>
  
  {/* 겉에 회색 바와 내부 파란색 바에 각각 rounded-md를 주어 모서리만 둥글게 처리했습니다. */}
  <div className="w-full h-9 bg-[#e5e7eb] rounded-md overflow-hidden p-1">
    <div className="h-full bg-[#5c93e2] rounded-[4px] w-[70%]" />
  </div>
</div>

          {/* 메뉴 리스트 섹션 */}
          <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.02)] overflow-hidden divide-y divide-gray-100 shrink-0">
            <Link to="/favorites" className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
              <Star className="w-6 h-6 text-gray-700" />
              <span className="text-base font-semibold text-gray-800">즐겨찾기</span>
            </Link>
            
            <Link to="/notice" className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
              <Bell className="w-6 h-6 text-gray-700" />
              <span className="text-base font-semibold text-gray-800">공지사항</span>
            </Link>
            
            <Link to="/settings" className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
              <Settings className="w-6 h-6 text-gray-700" />
              <span className="text-base font-semibold text-gray-800">환경설정</span>
            </Link>
            
            <Link to="/guide" className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
              <HelpCircle className="w-6 h-6 text-gray-700" />
              <span className="text-base font-semibold text-gray-800">사용 방법</span>
            </Link>
          </div>

          {/* 하단 배너 광고 영역 1 */}
          <div className="w-full bg-white rounded-2xl p-4 flex justify-between items-center border border-gray-100 shadow-sm overflow-hidden shrink-0">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-[#1a202c]">Grow your business, easily.</span>
            </div>
            <button className="bg-[#1a0dab] text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">
              Get Started
            </button>
          </div>

          {/* 하단 대형 배너 광고 영역 2 */}
          <div className="w-full bg-[#03002e] rounded-2xl p-6 min-h-[160px] flex flex-col justify-between text-white relative overflow-hidden shadow-md shrink-0 mb-4">
            <div className="max-w-[70%]">
              <h2 className="text-2xl font-black leading-tight tracking-tight">
                Grow your business, easily.
              </h2>
            </div>
          </div>

        </div>

        {/* 하단 네비게이션 바 */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <BottomNav />
        </div>

      </div>
    </div>
  );
}