import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  markNotificationAsRead,
  removeNotification,
  clearAllNotifications,
} from "../../store/slices/uiSlice";
import { Icons } from "../../utils/icons";
import { motion, AnimatePresence } from "framer-motion";

const NotificationCenter = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.ui);

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return <Icons.GoCheckCircle className="w-5 h-5 text-green-500" />;
      case "error":
        return <Icons.IoAlertCircleOutline className="w-5 h-5 text-red-500" />;
      case "warning":
        return <Icons.TbAlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "info":
      default:
        return <Icons.FaInfo className="w-5 h-5 text-blue-500" />;
    }
  };

  const getBgColor = (type) => {
    switch (type) {
      case "success":
        return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800";
      case "error":
        return "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800";
      case "warning":
        return "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800";
      case "info":
      default:
        return "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800";
    }
  };

  const handleMarkAsRead = (id) => {
    dispatch(markNotificationAsRead(id));
  };

  const handleRemove = (id) => {
    dispatch(removeNotification(id));
  };

  const handleClearAll = () => {
    dispatch(clearAllNotifications());
  };

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 w-96 max-h-96 overflow-y-auto">
      <div className="space-y-2">
        {/* Header */}
        <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <Icons.FaBell className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Notifications ({notifications.filter((n) => !n.read).length})
            </span>
          </div>
          <button
            onClick={handleClearAll}
            className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            Clear All
          </button>
        </div>

        {/* Notifications */}
        <AnimatePresence>
          {notifications.slice(0, 5).map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className={`
                p-4 rounded-lg shadow-lg border cursor-pointer transition-all duration-200
                ${getBgColor(notification.type)}
                ${notification.read ? "opacity-75" : ""}
              `}
              onClick={() =>
                !notification.read && handleMarkAsRead(notification.id)
              }
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    {notification.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                    {new Date(notification.timestamp).toLocaleTimeString()}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(notification.id);
                  }}
                  className="flex-shrink-0 p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                >
                  <Icons.MdClose className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NotificationCenter;
