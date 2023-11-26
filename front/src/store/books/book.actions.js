// import { createAsyncThunk } from "@reduxjs/toolkit";

// import {useBookServices} from '../../services/bookServices.ts';

// const {getAllBooks } = useBookServices();

// export const GetBooks = createAsyncThunk('books', async (books, thunkApi) => {
//     try {
//         const response = await getAllBooks();
//     return response
//     } catch (error) {
//         thunkApi.rejectWithValue(error)
//     }
// })