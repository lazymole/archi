import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGalleryImages } from "../api/api";

export const fetchGalleryImages = createAsyncThunk(
  "fetchGalleryImages",
  async () => {
    const result = await getGalleryImages();
    return result.renderings;
  }
);

interface TestData {
  _id: string;
}

interface GalleryState {
  data: string[];
  isCompleted: boolean;
  isModalOpen: boolean;
  currSelected: string;
}

const initialState: GalleryState = {
  data: [],
  isCompleted: false,
  isModalOpen: false,
  currSelected: "",
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    showDetail: (state, action) => {
      state.isModalOpen = action.payload;
    },
    setCurrSelected: (state, action) => {
      state.currSelected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGalleryImages.fulfilled, (state, action) => {
      state.data = action.payload.map((item: TestData) => item._id);
      state.isCompleted = true;
    });
  },
});

export const { showDetail, setCurrSelected } = gallerySlice.actions;

export default gallerySlice.reducer;
