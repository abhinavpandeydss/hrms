import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/slices/uiSlice";
import { addAttendanceRecord } from "../../store/slices/attendanceSlice";
import { addNotification } from "../../store/slices/uiSlice";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import { Icons } from "../../utils/icons";

const ClockInOutModal = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.ui);
  const { user } = useSelector((state) => state.auth);
  const [action, setAction] = useState("in");
  const [location, setLocation] = useState("Office - Main Building");
  const [notes, setNotes] = useState("");
  const isOpen = modal.isOpen && modal.type === "clockInOut";

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleClockAction = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", { hour12: false });

    if (action === "in") {
      const newRecord = {
        id: Date.now().toString(),
        employeeId: user?.id || "1",
        date: now.toISOString().split("T")[0],
        clockIn: timeString,
        breakTime: 0,
        totalHours: 0,
        status: "present",
        notes: notes || undefined,
      };

      dispatch(addAttendanceRecord(newRecord));
      dispatch(
        addNotification({
          type: "success",
          title: "Clocked In",
          message: `Successfully clocked in at ${timeString}`,
        })
      );
    } else {
      dispatch(
        addNotification({
          type: "success",
          title: "Clocked Out",
          message: `Successfully clocked out at ${timeString}`,
        })
      );
    }

    dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      title="Clock In/Out"
      size="md"
    >
      <div className="space-y-6">
        {/* Current Time */}
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {currentTime}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>

        {/* Action Selection */}
        <div className="flex space-x-4">
          <button
            onClick={() => setAction("in")}
            className={`flex-1 p-4 rounded-lg border-2 transition-colors ${
              action === "in"
                ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
            }`}
          >
            <Icons.FaRegClock className="w-6 h-6 mx-auto mb-2" />
            <div className="font-medium">Clock In</div>
          </button>
          <button
            onClick={() => setAction("out")}
            className={`flex-1 p-4 rounded-lg border-2 transition-colors ${
              action === "out"
                ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"
                : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
            }`}
          >
            <Icons.FaRegClock className="w-6 h-6 mx-auto mb-2" />
            <div className="font-medium">Clock Out</div>
          </button>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Location
          </label>
          <div className="relative">
            <Icons.LuMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="Office - Main Building">
                Office - Main Building
              </option>
              <option value="Office - Branch Office">
                Office - Branch Office
              </option>
              <option value="Remote - Home">Remote - Home</option>
              <option value="Client Site">Client Site</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Connection Status */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Icons.FaWifi className="w-4 h-4 text-green-500" />
          <span>Connected to company network</span>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Notes (Optional)
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Add any notes about your work day..."
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            onClick={handleClockAction}
            variant={action === "in" ? "primary" : "danger"}
          >
            {action === "in" ? "Clock In" : "Clock Out"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ClockInOutModal;
