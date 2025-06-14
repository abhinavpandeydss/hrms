import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router";
import { useSelector } from "react-redux";
import { Icons } from "../../utils/icons";
import { ThemeContext } from "../../contexts/ThemeContext";

const Sidebar = ({ collapsed, onMobileClose }) => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const navigationItems = [
    { name: "Dashboard", href: "/dashboard", icon: "MdDashboard" },
    { name: "Employees", href: "/employees", icon: "FaUserGroup" },
    { name: "Attendance", href: "/attendance", icon: "LuCalendarClock" },
    { name: "Leave Management", href: "/leave", icon: "FaRegCalendarAlt" },
    { name: "Performance", href: "/performance", icon: "MdOutlineTrendingUp" },
    { name: "Payroll", href: "/payroll", icon: "FaDollarSign" },
  ];

  const user = {
    firstName: "Alex",
    lastName: "Carry",
    role: "admin",
  };

  const isActive = (href) => {
    return (
      location.pathname === href || location.pathname.startsWith(href + "/")
    );
  };

  return (
    <div className="flex flex-col h-full">
      {/* Logo and close button */}
      <div className="flex items-center justify-between h-18 px-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <Icons.RiBuilding2Fill className="w-8 h-8 text-black dark:text-gray-300" />
          </div>
          {!collapsed && (
            <div className="text-xl font-bold text-gray-900 dark:text-gray-300">
              HRMS
            </div>
          )}
        </div>
        <button
          onClick={onMobileClose}
          className="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Icons.RxCross2 className="w-5 h-5" />
        </button>
      </div>
      {/* User profile */}
      {user && (
        <div
          className={`${
            !collapsed ? "p-4" : "p-3"
          } border-b border-gray-200 dark:border-gray-700`}
        >
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-black dark:text-white font-medium"
                style={{ backgroundColor: theme.background }}
              >
                {user.firstName[0]}
                {user.lastName[0]}
              </div>
            </div>
            {!collapsed && (
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Navigation */}
      <nav className="flex-1 px-2 py-3 space-y-2 overflow-y-auto">
        {navigationItems.map((item) => {
          const itemIcon = item.icon;
          const Icon = Icons[itemIcon];
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={`flex items-center ps-2 pe-8 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isActive(item.href)
                  ? "bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400 border-r-2 border-primary-500"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => onMobileClose()}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="ml-3 truncate">{item.name}</span>}
            </NavLink>
          );
        })}
      </nav>
      {/* Settings and logout */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
        <NavLink
          to="/settings"
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          onClick={() => onMobileClose()}
        >
          <Icons.MdOutlineSettings className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="ml-3">Settings</span>}
        </NavLink>

        <button
          className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          onClick={() => {
            // Handle logout
            onMobileClose();
          }}
        >
          <Icons.MdLogout className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
