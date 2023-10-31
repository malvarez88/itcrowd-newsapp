const { createSlice } = require("@reduxjs/toolkit");
import { getTopNews, getAllNews } from "../api/getNews";

const initialState = {
  topNews: {
    data: [],
    isLoader: false,
    isError: false,
    error: null,
  },
  allNews: {
    data: [],
    isLoader: false,
    isError: false,
    error: null,
  },
};

const NewsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTopNews.pending, (state, action) => {
      state.topNews.isLoader = true;
    });
    builder.addCase(getTopNews.fulfilled, (state, action) => {
      state.topNews.isLoader = false;
      state.topNews.data = action.payload.articles;
    });
    builder.addCase(getTopNews.rejected, (state, action) => {
      state.topNews.isLoader = false;
      state.topNews.isError = true;
      state.topNews.error = action.error.message;
    });
    builder.addCase(getAllNews.pending, (state, action) => {
      state.allNews.isLoader = true;
    });
    builder.addCase(getAllNews.fulfilled, (state, action) => {
      state.allNews.isLoader = false;
      state.allNews.data = action.payload.articles;
    });
    builder.addCase(getAllNews.rejected, (state, action) => {
      state.allNews.isLoader = false;
      state.allNews.isError = true;
      state.allNews.error = action.error.message;
    });
  },
});

export const selectTopNews = (state) => state.news.topNews.data;
export const selectAllNews = (state) => state.news.allNews.data;

export default NewsSlice.reducer;
