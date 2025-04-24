import { createSlice } from '@reduxjs/toolkit';
import { generateInitialAssets, getRandomUpdate } from './assetUtils';

const initialState = {
  assets: generateInitialAssets(),
};

const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    simulateUpdate: (state) => {
      state.assets = state.assets.map((asset) => ({
        ...asset,
        ...getRandomUpdate(asset),
      }));
    },
  },
});

export const { simulateUpdate } = assetsSlice.actions;
export default assetsSlice.reducer;
