import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/slices/uiSlice";
import { addEmployee } from "../../store/slices/employeeSlice";
import { addNotification } from "../../store/slices/uiSlice";
import Modal from "../ui/Modal";
import EmployeeForm from "../forms/EmployeeForm";

const AddEmployeeModal = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.ui);
  const isOpen = modal.isOpen && modal.type === "addEmployee";

  const handleSubmit = (data) => {
    // Generate a unique ID for the new employee
    const newEmployee = {
      ...data,
      id: Date.now().toString(),
      employeeId: `EMP${String(Date.now()).slice(-4)}`,
      status: "active",
      benefits: ["Health Insurance", "Dental Insurance", "401(k)", "PTO"],
      skills: [],
      documents: [],
    };

    dispatch(addEmployee(newEmployee));
    dispatch(
      addNotification({
        type: "success",
        title: "Employee Added",
        message: `${data.firstName} ${data.lastName} has been successfully added to the system.`,
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
      title="Add New Employee"
      size="xl"
    >
      <EmployeeForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </Modal>
  );
};

export default AddEmployeeModal;
