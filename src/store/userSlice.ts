import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// Khởi tạo state cho slice, có thể kèm giá trị mặc định ban đầu
const initialState = {
  username: 'Guest', // State username với giá trị mặc định là "Guest"
  // Có thể khai báo nhiều state khác nữa
}
// Cấu hình slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  // Reducers chứa các hàm xử lý cập nhật state
  reducers: {
    updateUsername: (state, actions: PayloadAction<string>) => {
      state.username = actions.payload
    },
  },
})
// Export action ra để sử dụng cho tiện.
export const { updateUsername } = userSlice.actions
// Export reducer để nhúng vào Store
export default userSlice.reducer
