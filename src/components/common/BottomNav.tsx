import { Link, matchPath, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    {
      key: "home",
      label: "홈",
      path: "/home",
      activePaths: ["/home"],
      activeIcon: "/bottomNav/home-active.svg",
      inactiveIcon: "/bottomNav/home-inactive.svg",
    },
    {
      key: "shortcut",
      label: "지름길",
      path: "/shortcut",
      activePaths: ["/shortcut"],
      activeIcon: "/bottomNav/shortcut-active.svg",
      inactiveIcon: "/bottomNav/shortcut-inactive.svg",
    },
    {
      key: "events",
      label: "행사",
      path: "/events",
      activePaths: ["/events"],
      activeIcon: "/bottomNav/events-active.svg",
      inactiveIcon: "/bottomNav/events-inactive.svg",
    },
    {
      key: "mypage",
      label: "마이페이지",
      path: "/mypage",
      activePaths: ["/mypage"],
      activeIcon: "/bottomNav/mypage-active.svg",
      inactiveIcon: "/bottomNav/mypage-inactive.svg",
    },
  ];

  return (
    <div className="self-stretch w-full h-14 flex justify-around items-center w-full">
      {navItems.map((item) => {
        const isActive = item.activePaths.some((p) =>
          matchPath({ path: p, end: true }, location.pathname),
        );

        return (
          <Link
            key={item.key}
            to={item.path}
            className="flex-1 py-1 inline-flex flex-col justify-start items-center gap-0.5"
          >
            <div className="size-6 relative">
              <img
                src={isActive ? item.activeIcon : item.inactiveIcon}
                alt={item.label}
                className="size-6"
              />
            </div>
            <span
              className={`self-stretch text-center text-[10px] leading-4 font-['Roboto'] ${
                isActive ? "text-black font-medium" : "text-black font-normal"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
