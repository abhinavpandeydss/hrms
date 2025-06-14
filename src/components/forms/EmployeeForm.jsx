import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import { Icons } from "../../utils/icons";

const employeeSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  department: z.string().min(1, "Department is required"),
  position: z.string().min(1, "Position is required"),
  startDate: z.string().min(1, "Start date is required"),
  manager: z.string().min(1, "Manager is required"),
  salary: z.number().min(0, "Salary must be positive"),
  address: z.object({
    street: z.string().min(1, "Street address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    zipCode: z.string().min(5, "ZIP code must be at least 5 characters"),
    country: z.string().min(1, "Country is required"),
  }),
  emergencyContact: z.object({
    name: z.string().min(1, "Emergency contact name is required"),
    relationship: z.string().min(1, "Relationship is required"),
    phone: z.string().min(10, "Emergency contact phone is required"),
  }),
});

const EmployeeForm = ({ initialData, onSubmit, onCancel, loading = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(employeeSchema),
    defaultValues: initialData,
  });

  const departments = [
    { value: "engineering", label: "Engineering" },
    { value: "hr", label: "Human Resources" },
    { value: "marketing", label: "Marketing" },
    { value: "sales", label: "Sales" },
    { value: "finance", label: "Finance" },
    { value: "operations", label: "Operations" },
  ];

  const managers = [
    { value: "john-smith", label: "John Smith" },
    { value: "jane-doe", label: "Jane Doe" },
    { value: "mike-johnson", label: "Mike Johnson" },
    { value: "sarah-wilson", label: "Sarah Wilson" },
  ];

  const relationships = [
    { value: "spouse", label: "Spouse" },
    { value: "parent", label: "Parent" },
    { value: "sibling", label: "Sibling" },
    { value: "child", label: "Child" },
    { value: "friend", label: "Friend" },
    { value: "other", label: "Other" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Personal Information */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Icons.FaUser className="w-5 h-5 mr-2" />
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            {...register("firstName")}
            error={errors.firstName?.message}
            leftIcon={<Icons.FaUser className="w-4 h-4 text-gray-400" />}
          />
          <Input
            label="Last Name"
            {...register("lastName")}
            error={errors.lastName?.message}
            leftIcon={<Icons.FaUser className="w-4 h-4 text-gray-400" />}
          />
          <Input
            label="Email"
            type="email"
            {...register("email")}
            error={errors.email?.message}
            leftIcon={<Icons.MdMailOutline className="w-4 h-4 text-gray-400" />}
          />
          <Input
            label="Phone"
            type="tel"
            {...register("phone")}
            error={errors.phone?.message}
            leftIcon={<Icons.FaPhone className="w-4 h-4 text-gray-400" />}
          />
        </div>
      </div>

      {/* Employment Information */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Icons.FaBriefcase className="w-5 h-5 mr-2" />
          Employment Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Department"
            {...register("department")}
            options={departments}
            error={errors.department?.message}
            placeholder="Select department"
          />
          <Input
            label="Position"
            {...register("position")}
            error={errors.position?.message}
            leftIcon={<Icons.FaBriefcase className="w-4 h-4 text-gray-400" />}
          />
          <Input
            label="Start Date"
            type="date"
            {...register("startDate")}
            error={errors.startDate?.message}
            leftIcon={
              <Icons.FaRegCalendarAlt className="w-4 h-4 text-gray-400" />
            }
          />
          <Select
            label="Manager"
            {...register("manager")}
            options={managers}
            error={errors.manager?.message}
            placeholder="Select manager"
          />
          <Input
            label="Salary"
            type="number"
            {...register("salary", { valueAsNumber: true })}
            error={errors.salary?.message}
            placeholder="Annual salary"
          />
        </div>
      </div>

      {/* Address Information */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Icons.LuMapPin className="w-5 h-5 mr-2" />
          Address Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <Input
              label="Street Address"
              {...register("address.street")}
              error={errors.address?.street?.message}
              leftIcon={<Icons.LuMapPin className="w-4 h-4 text-gray-400" />}
            />
          </div>
          <Input
            label="City"
            {...register("address.city")}
            error={errors.address?.city?.message}
          />
          <Input
            label="State"
            {...register("address.state")}
            error={errors.address?.state?.message}
          />
          <Input
            label="ZIP Code"
            {...register("address.zipCode")}
            error={errors.address?.zipCode?.message}
          />
          <Input
            label="Country"
            {...register("address.country")}
            error={errors.address?.country?.message}
          />
        </div>
      </div>

      {/* Emergency Contact */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Icons.FaPhone className="w-5 h-5 mr-2" />
          Emergency Contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label="Contact Name"
            {...register("emergencyContact.name")}
            error={errors.emergencyContact?.name?.message}
            leftIcon={<Icons.FaUser className="w-4 h-4 text-gray-400" />}
          />
          <Select
            label="Relationship"
            {...register("emergencyContact.relationship")}
            options={relationships}
            error={errors.emergencyContact?.relationship?.message}
            placeholder="Select relationship"
          />
          <Input
            label="Contact Phone"
            type="tel"
            {...register("emergencyContact.phone")}
            error={errors.emergencyContact?.phone?.message}
            leftIcon={<Icons.FaPhone className="w-4 h-4 text-gray-400" />}
          />
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700">
        <Button variant="secondary" onClick={onCancel} type="button">
          Cancel
        </Button>
        <Button type="submit" loading={loading}>
          {initialData ? "Update Employee" : "Add Employee"}
        </Button>
      </div>
    </form>
  );
};

export default EmployeeForm;
