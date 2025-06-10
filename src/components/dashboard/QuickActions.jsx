import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/slices/uiSlice";
import { Icons } from "../../utils/icons";

const QuickActions = () => {
  const dispatch = useDispatch();

  const actions = [
    {
      title: "Add Employee",
      description: "Onboard new team member",
      icon: "FaUserPlus",
      color: "bg-blue-500 hover:bg-blue-600",
      action: () => dispatch(openModal({ type: "addEmployee" })),
    },
    {
      title: "Clock In/Out",
      description: "Manage attendance",
      icon: "FaRegClock",
      color: "bg-green-500 hover:bg-green-600",
      action: () => dispatch(openModal({ type: "clockInOut" })),
    },
    {
      title: "Request Leave",
      description: "Submit time-off request",
      icon: "FaRegCalendarAlt",
      color: "bg-yellow-500 hover:bg-yellow-600",
      action: () => dispatch(openModal({ type: "leaveRequest" })),
    },
    {
      title: "Generate Report",
      description: "Create custom reports",
      icon: "AiOutlineFileText",
      color: "bg-purple-500 hover:bg-purple-600",
      action: () => dispatch(openModal({ type: "generateReport" })),
    },
    {
      title: "Team Directory",
      description: "Browse employee list",
      icon: "FaUsers",
      color: "bg-indigo-500 hover:bg-indigo-600",
      action: () => (window.location.href = "/employees"),
    },
    {
      title: "Payroll Summary",
      description: "View payroll details",
      icon: "FaDollarSign",
      color: "bg-emerald-500 hover:bg-emerald-600",
      action: () => (window.location.href = "/payroll"),
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => {
          const actionIcon = action.icon;
          const Icon = Icons[actionIcon];
          return (
            <button
              key={index}
              onClick={action.action}
              className={`p-4 rounded-lg text-white transition-colors duration-200 text-left ${action.color}`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="font-medium text-sm mb-1">{action.title}</h4>
              <p className="text-xs opacity-90">{action.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
