import React from "react";
import { Icons } from "../../utils/icons";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Team Standup",
      description: "Engineering team daily sync",
      date: "Today",
      time: "10:00 AM",
      type: "meeting",
      icon: "FaUsers",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      id: 2,
      title: "Performance Reviews",
      description: "Q4 performance review deadline",
      date: "Tomorrow",
      time: "5:00 PM",
      type: "deadline",
      icon: "FaAward",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      id: 3,
      title: "Company All-Hands",
      description: "Monthly company meeting",
      date: "Dec 15",
      time: "2:00 PM",
      type: "meeting",
      icon: "FaUsers",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      id: 4,
      title: "Holiday Party",
      description: "Annual holiday celebration",
      date: "Dec 20",
      time: "6:00 PM",
      type: "event",
      icon: "FaRegCalendarAlt",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Upcoming Events
        </h3>
        <button className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-500 font-medium">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {events.map((event) => {
          const eventIcon = event.icon;
          const Icon = Icons[eventIcon];
          return (
            <div
              key={event.id}
              className={`p-4 rounded-lg ${event.bgColor} border border-gray-200 dark:border-gray-600`}
            >
              <div className="flex items-start space-x-3">
                <div
                  className={`p-2 rounded-full bg-white dark:bg-gray-800 ${event.color}`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    {event.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {event.description}
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <Icon className="w-3 h-3 mr-1" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <Icon className="w-3 h-3 mr-1" />
                      {event.time}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingEvents;
