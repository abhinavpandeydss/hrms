import React from "react";
import { Icons } from "../../utils/icons";

const StatsCards = () => {
  const stats = [
    {
      title: "Total Employees",
      value: "1,234",
      change: "+12%",
      changeType: "positive",
      icon: "FaRegUser",
      color: "bg-blue-500",
    },
    {
      title: "Present Today",
      value: "1,156",
      change: "+5.2%",
      changeType: "positive",
      icon: "FaRegClock",
      color: "bg-green-500",
    },
    {
      title: "On Leave",
      value: "45",
      change: "-2.1%",
      changeType: "negative",
      icon: "FaRegCalendarAlt",
      color: "bg-yellow-500",
    },
    {
      title: "Performance Score",
      value: "8.9",
      change: "+0.5",
      changeType: "positive",
      icon: "MdOutlineTrendingUp",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const statIcon = stat.icon;
        const Icon = Icons[statIcon];
        return (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {stat.value}
                </p>
                <div className="flex items-center mt-2">
                  <span
                    className={`text-sm font-medium ${
                      stat.changeType === "positive"
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                    from last month
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
