import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  attendance: [],
  leaveRequests: [],
  selectedDate: new Date().toISOString().split("T")[0],
  loading: false,
  error: null,
  stats: {
    totalEmployees: 0,
    presentToday: 0,
    absentToday: 0,
    lateToday: 0,
    pendingLeaves: 0,
  },
};

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    setAttendance: (state, action) => {
      state.attendance = action.payload;
    },
    addAttendanceRecord: (state, action) => {
      state.attendance.push(action.payload);
    },
    updateAttendanceRecord: (state, action) => {
      const index = state.attendance.findIndex(
        (record) => record.id === action.payload.id
      );
      if (index !== -1) {
        state.attendance[index] = action.payload;
      }
    },
    setLeaveRequests: (state, action) => {
      state.leaveRequests = action.payload;
    },
    addLeaveRequest: (state, action) => {
      state.leaveRequests.push(action.payload);
    },
    updateLeaveRequest: (state, action) => {
      const index = state.leaveRequests.findIndex(
        (request) => request.id === action.payload.id
      );
      if (index !== -1) {
        state.leaveRequests[index] = action.payload;
      }
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setStats: (state, action) => {
      state.stats = action.payload;
    },
  },
});

export const {
  setAttendance,
  addAttendanceRecord,
  updateAttendanceRecord,
  setLeaveRequests,
  addLeaveRequest,
  updateLeaveRequest,
  setSelectedDate,
  setLoading,
  setError,
  setStats,
} = attendanceSlice.actions;

export default attendanceSlice.reducer;
