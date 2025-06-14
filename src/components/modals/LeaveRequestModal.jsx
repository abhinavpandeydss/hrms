import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/slices/uiSlice";
import { addLeaveRequest } from "../../store/slices/attendanceSlice";
import { addNotification } from "../../store/slices/uiSlice";
import Modal from "../ui/Modal";
import LeaveRequestForm from "../forms/LeaveRequestForm";

const LeaveRequestModal = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.ui);
  const { user } = useSelector((state) => state.auth);
  const isOpen = modal.isOpen && modal.type === "leaveRequest";

  const handleSubmit = (data) => {
    const startDate = new Date(data.startDate);
    const endDate = new Date(data.endDate);
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

    const newLeaveRequest = {
      id: Date.now().toString(),
      employeeId: user?.id || "1",
      type: data.type,
      startDate: data.startDate,
      endDate: data.endDate,
      days: data.halfDay ? 0.5 : days,
      reason: data.reason,
      status: "pending",
      appliedDate: new Date().toISOString().split("T")[0],
    };

    dispatch(addLeaveRequest(newLeaveRequest));
    dispatch(
      addNotification({
        type: "success",
        title: "Leave Request Submitted",
        message:
          "Your leave request has been submitted and is pending approval.",
      })
    );
    dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      title="Request Leave"
      size="lg"
    >
      <LeaveRequestForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </Modal>
  );
};

export default LeaveRequestModal;
