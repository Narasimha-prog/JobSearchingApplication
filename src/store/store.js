import { configureStore, createSlice } from "@reduxjs/toolkit";

// Slice for employees
const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    list: [],
    stats: { totalEmployees: 0, totalSalary: 0 },
  },
  reducers: {
    setEmployees: (state, action) => {
      state.list = action.payload;
    },
    setStats: (state, action) => {
      state.stats = action.payload;
    },
  },
});

export const { setEmployees, setStats } = employeeSlice.actions;

export const store = configureStore({
  reducer: { employees: employeeSlice.reducer },
});
