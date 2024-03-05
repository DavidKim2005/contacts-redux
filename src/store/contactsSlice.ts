import { createSlice } from "@reduxjs/toolkit";
import { Subscriber } from "../types";
import { fetchContacts } from "./contactsThunks";

interface ContactsState {
    subscribers: [Subscriber];
    fetchLoading: boolean;
    mutatingId: null | string;
};

const initialState: ContactsState = {
    subscribers: [],
    fetchLoading: false,
    mutatingId: null,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(fetchContacts.pending, (state) => {
            state.fetchLoading = true;
        }).addCase(fetchContacts.fulfilled, (state, {payload: subscribers}) => {
            state.subscribers = subscribers;
            state.fetchLoading = false;
        }).addCase(fetchContacts.rejected, (state) => {
            state.fetchLoading = false;
        });
    })
});

export const contactsReducer  = contactsSlice.reducer;