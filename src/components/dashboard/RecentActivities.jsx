import React from "react";
import { Icons } from "../../utils/icons";

const RecentActivities = () => {
  const activities = [
    {
      id: 1,
      type: "clock-in",
      icon: "FaRegClock",
      title: "Sarah Johnson clocked in",
      description: "Started work at 9:00 AM",
      time: "5 minutes ago",
      color: "text-green-500",
    },
    {
      id: 2,
      type: "new-hire",
      icon: "FaUserPlus",
      title: "New employee onboarded",
      description: "Mike Chen joined Engineering team",
      time: "2 hours ago",
      color: "text-blue-500",
    },
    {
      id: 3,
      type: "leave-request",
      icon: "FaRegCalendarAlt",
      title: "Leave request approved",
      description: "Emma Davis - Vacation leave approved",
      time: "4 hours ago",
      color: "text-yellow-500",
    },
    {
      id: 4,
      type: "performance",
      icon: "FaAward",
      title: "Performance review completed",
      description: "Q4 review for Alex Thompson",
      time: "1 day ago",
      color: "text-purple-500",
    },
    {
      id: 5,
      type: "profile-update",
      icon: "FaUser",
      title: "Profile updated",
      description: "Lisa Park updated emergency contacts",
      time: "2 days ago",
      color: "text-gray-500",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Recent Activities
      </h3>

      <div className="space-y-4">
        {activities.map((activity) => {
          const activityIcon = activity.icon;
          const Icon = Icons[activityIcon];
          return (
            <div
              key={activity.id}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <div
                className={`p-2 rounded-full bg-gray-100 dark:bg-gray-700 ${activity.color}`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-500 font-medium py-2 text-center">
        View all activities
      </button>
    </div>
  );
};

export default RecentActivities;
