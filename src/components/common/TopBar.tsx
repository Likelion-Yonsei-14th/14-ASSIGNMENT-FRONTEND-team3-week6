export default function TopBar() {
  return (
    <div className="w-full h-11 relative">
      {/* 왼쪽 시간: left-5로 왼쪽에서 20px 떨어지게 설정 */}
      <div className="absolute left-5 top-[14.50px] text-zinc-800 text-xs font-semibold font-['SUIT']">
        9:41
      </div>
      
      {/* 오른쪽 아이콘: right-5로 오른쪽 끝에서 20px 떨어지게 설정 */}
      {/* 더 오른쪽으로 붙이고 싶다면 right-4(16px) 또는 right-3(12px)으로 변경해 보세요! */}
      <div className="absolute right-5 top-4 flex gap-[5px] items-center">
        <img src="/topBar/wifi-icon.svg" className="w-4 h-3" alt="wifi" />
        <img src="/topBar/battery-icon.svg" className="w-6 h-3" alt="battery" />
      </div>
    </div>
  );
}