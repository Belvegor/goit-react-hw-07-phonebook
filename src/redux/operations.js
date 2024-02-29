import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65e049fcd3db23f76248d959.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetch', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addContact = createAsyncThunk('contacts/add', async (contact, thunkAPI) => {
  try {
    const response = await axios.post('/contacts/contacts', contact);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/delete', async (contactId, thunkAPI) => {
  try {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
