import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import { Icons } from "../../utils/icons";

const leaveRequestSchema = z
  .object({
    type: z.string().min(1, "Leave type is required"),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required"),
    reason: z.string().min(10, "Reason must be at least 10 characters"),
    halfDay: z.boolean().optional(),
  })
  .refine(
    (data) => {
      const start = new Date(data.startDate);
      const end = new Date(data.endDate);
      return end >= start;
    },
    {
      message: "End date must be after or equal to start date",
      path: ["endDate"],
    }
  );

const LeaveRequestForm = ({ onSubmit, onCancel, loading = false }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(leaveRequestSchema),
  });

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };

  const leaveTypes = [
    { value: "vacation", label: "Vacation Leave" },
    { value: "sick", label: "Sick Leave" },
    { value: "personal", label: "Personal Leave" },
    { value: "maternity", label: "Maternity Leave" },
    { value: "paternity", label: "Paternity Leave" },
    { value: "bereavement", label: "Bereavement Leave" },
    { value: "emergency", label: "Emergency Leave" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          label="Leave Type"
          {...register("type")}
          options={leaveTypes}
          error={errors.type?.message}
          placeholder="Select leave type"
        />

        <div className="flex items-center space-x-2 pt-6">
          <input
            type="checkbox"
            id="halfDay"
            {...register("halfDay")}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label
            htmlFor="halfDay"
            className="text-sm text-gray-700 dark:text-gray-300"
          >
            Half day leave
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Start Date"
          type="date"
          {...register("startDate")}
          error={errors.startDate?.message}
          leftIcon={
            <Icons.FaRegCalendarAlt className="w-4 h-4 text-gray-400" />
          }
          min={new Date().toISOString().split("T")[0]}
        />

        <Input
          label="End Date"
          type="date"
          {...register("endDate")}
          error={errors.endDate?.message}
          leftIcon={
            <Icons.FaRegCalendarAlt className="w-4 h-4 text-gray-400" />
          }
          min={startDate || new Date().toISOString().split("T")[0]}
        />
      </div>

      {startDate && endDate && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Icons.FaRegClock className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Total Days: {calculateDays()} day{calculateDays() > 1 ? "s" : ""}
            </span>
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Reason for Leave
        </label>
        <textarea
          {...register("reason")}
          rows={4}
          className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Please provide a detailed reason for your leave request..."
        />
        {errors.reason && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.reason.message}
          </p>
        )}
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
          Leave Balance Information
        </h4>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-gray-500 dark:text-gray-400">Vacation:</span>
            <span className="ml-2 font-medium text-gray-900 dark:text-white">
              12 days
            </span>
          </div>
          <div>
            <span className="text-gray-500 dark:text-gray-400">Sick:</span>
            <span className="ml-2 font-medium text-gray-900 dark:text-white">
              8 days
            </span>
          </div>
          <div>
            <span className="text-gray-500 dark:text-gray-400">Personal:</span>
            <span className="ml-2 font-medium text-gray-900 dark:text-white">
              3 days
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700">
        <Button variant="secondary" onClick={onCancel} type="button">
          Cancel
        </Button>
        <Button type="submit" loading={loading}>
          Submit Request
        </Button>
      </div>
    </form>
  );
};

export default LeaveRequestForm;
