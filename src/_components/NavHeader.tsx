const NavHeader = () => {
  return (
    <nav className="sticky top-5 z-20 mx-auto flex h-[76px] max-w-[1200px] flex-row items-center justify-between rounded-2xl border border-[#197686] bg-[#05252C]/40 px-4 backdrop-blur-sm">
      <div>
        <img
          src="/logo.svg"
          alt="ticz logo"
          aria-labelledby="application logo"
        />
      </div>

      <ul className="hidden flex-row items-center gap-x-4 text-[18px] md:flex">
        <li className="cursor-pointer transition-all duration-200 hover:text-white/50">
          Events
        </li>
        <li className="cursor-pointer transition-all duration-200 hover:text-white/50">
          My Tickets
        </li>
        <li className="cursor-pointer transition-all duration-200 hover:text-white/50">
          About Project
        </li>
      </ul>

      <div className="flex h-[52px] w-[169px] flex-row items-center justify-center gap-x-2 rounded-xl bg-white text-black transition-all duration-200 hover:bg-white/60">
        <button>MY TICKETS</button>
        <img src="/arrow-right.svg" alt="right arrow" />
      </div>
    </nav>
  );
};

export default NavHeader;
