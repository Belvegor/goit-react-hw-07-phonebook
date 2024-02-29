import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        console.log('Fetched contacts:', action.payload);
        return action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        console.log('Added contact:', action.payload);
        state.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        console.log('Deleted contact:', action.payload);
        return state.filter((contact) => contact.id !== action.payload);
      });
  },
});

export default contactsSlice.reducer;