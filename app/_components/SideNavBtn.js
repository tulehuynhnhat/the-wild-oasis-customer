function SideNavBtn({ isOpen = true, onToggle }) {
  return (
    <div
      className={`fixed top-37 ${isOpen ? "left-50" : "-left-0"} z-1 cursor-pointer transition-all duration-600 lg:hidden`}
      onClick={onToggle}
    >
      <span className="inline-block p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${!isOpen ? "-rotate-180" : "rotate-0"} `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
          />
        </svg>
      </span>
    </div>
  );
}

export default SideNavBtn;
