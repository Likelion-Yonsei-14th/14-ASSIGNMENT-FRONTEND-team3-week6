export default function TopBar() {
  return (
    <div className="w-full h-11 relative">
      <div className="w-7 left-[21.89px] top-[14.50px] absolute justify-start text-zinc-800 text-xs font-semibold font-['SUIT']">
        9:41
      </div>
      <div className="w-12 h-3 left-[320.75px] top-[16px] absolute flex gap-[5px]">
        <img src="/topBar/wifi-icon.svg" className="w-4 h-3" />
        <img src="/topBar/battery-icon.svg" className="w-6 h-3" />
      </div>
    </div>
  );
}
