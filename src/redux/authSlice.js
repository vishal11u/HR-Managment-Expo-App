import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadAuthState = createAsyncThunk('auth/loadAuthState', async () => {
  const isAuthenticated = await AsyncStorage.getItem('isAuthenticated');
  const user = JSON.parse(await AsyncStorage.getItem('user'));
  return {
    isAuthenticated: isAuthenticated === 'true',
    user: user,
  };
});

export const loginUser = createAsyncThunk('auth/loginUser', async ({ username, password }, thunkAPI) => {
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Invalid Username and Password');
    }

    const data = await response.json();

    await AsyncStorage.setItem('isAuthenticated', 'true');
    await AsyncStorage.setItem('user', JSON.stringify(data));

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  isHydrated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadAuthState.fulfilled, (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
      state.isHydrated = true;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;