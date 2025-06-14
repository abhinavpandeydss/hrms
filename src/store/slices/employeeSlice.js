import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
  selectedEmployee: null,
  loading: false,
  error: null,
  filters: {
    department: "",
    status: "",
    search: "",
  },
  pagination: {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
  },
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
      state.pagination.totalItems = action.payload.length;
    },
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
      state.pagination.totalItems += 1;
    },
    updateEmployee: (state, action) => {
      const index = state.employees.findIndex(
        (emp) => emp.id === action.payload.id
      );
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
      if (state.selectedEmployee?.id === action.payload.id) {
        state.selectedEmployee = action.payload;
      }
    },
    removeEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (emp) => emp.id !== action.payload
      );
      state.pagination.totalItems -= 1;
      if (state.selectedEmployee?.id === action.payload) {
        state.selectedEmployee = null;
      }
    },
    setSelectedEmployee: (state, action) => {
      state.selectedEmployee = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.pagination.currentPage = 1; // Reset to first page when filtering
    },
    setPagination: (state, action) => {
      state.pagination = { ...state.pagination, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
      state.pagination.currentPage = 1;
    },
  },
});

export const {
  setEmployees,
  addEmployee,
  updateEmployee,
  removeEmployee,
  setSelectedEmployee,
  setLoading,
  setError,
  setFilters,
  setPagination,
  clearFilters,
} = employeeSlice.actions;

export default employeeSlice.reducer;
