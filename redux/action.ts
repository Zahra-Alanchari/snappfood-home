import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchgetAllProduct = createAsyncThunk(
  'products/allProducts',
  async () => {
    const response = await fetch('/data.json');
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.data; // Adjust according to your JSON structure
  }
);

export const fetchgetAllCategory = createAsyncThunk(
  'Categories/allCategories',
  async () => {
    const response = await fetch('/Classification.json');
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.data; // Adjust according to your JSON structure
  }
);

export const fetchgetAllNewItem = createAsyncThunk(
  'NewItems/allNewItems',
  async () => {
    const response = await fetch('/new.json');
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.data; // Adjust according to your JSON structure
  }
);

export const fetchgetAllGiftItem = createAsyncThunk(
  'GiftItems/allGiftItems',
  async () => {
    const response = await fetch('/gift.json');
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.data; // Adjust according to your JSON structure
  }
);

