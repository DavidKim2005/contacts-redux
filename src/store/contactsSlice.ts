import { createSlice } from "@reduxjs/toolkit";
import { Subscriber } from "../types";
import { createContacts, fetchContacts, removeContact } from "./contactsThunks";

interface ContactsState {
    subscribers: [Subscriber];
    fetchLoading: boolean;
    createLoading: boolean;
    mutatingId: null | string;
    editedSubscriber: Subscriber | null;
};

const initialState: ContactsState = {
    subscribers: [],
    fetchLoading: false,
    createLoading: false,
    mutatingId: null,
};

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

        builder.addCase(createContacts.pending, (state) => {
            state.createLoading = true;
        }).addCase(createContacts.fulfilled, (state) => {
            state.createLoading = false;
        }).addCase(createContacts.rejected, (state) => {
            state.createLoading = false;
        });

        builder.addCase(removeContact.pending, (state, {meta: {arg: contactId}}) => {
            state.mutatingId = contactId;
        }).addCase(removeContact.fulfilled, (state) => {
            state.mutatingId = null;
        }).addCase(removeContact.rejected, (state) => {
            state.mutatingId = null;
        });


    })
});

export const contactsReducer  = contactsSlice.reducer;