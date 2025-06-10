import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icons } from "../../utils/icons";
import { ThemeContext } from "../../contexts/ThemeContext";
import { toggleTheme } from "../../store/slices/themeSlice";

const Header = ({ onToggleSidebar, onToggleMobileMenu }) => {
  const { notifications, sidebarOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const unreadNotifications = notifications.filter((n) => !n.read).length;
  const { theme, themeMode } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* left side */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button
            onClick={onToggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Icons.MdMenu className="w-5 h-5" />
          </button>
          {/* Desktop sidebar toggle */}
          <button
            onClick={onToggleSidebar}
            className="hidden lg:block p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Icons.MdMenu className="w-5 h-5" />
          </button>
          {/* Search */}
          <div className="hidden md:block relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icons.IoMdSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search employees, departments..."
              className="block w-80 pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
        {/* right side */}
        <div className="flex items-center space-x-4">
          {/* Theme toggle */}
          <button
            onClick={handleToggleTheme}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {themeMode === "light" ? (
              <Icons.FaMoon className="w-5 h-5" />
            ) : (
              <Icons.IoSunnyOutline className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Notifications */}
          <button className="relative p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            <Icons.FaRegBell className="w-5 h-5" />
            {unreadNotifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-danger-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {unreadNotifications > 9 ? "9+" : unreadNotifications}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
