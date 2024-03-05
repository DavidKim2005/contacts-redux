import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiSubscriber, ApiSubscribers, Subscriber, editContact } from "../types";
import axiosApi from "../axiosApi";

export const fetchContacts = createAsyncThunk<Subscriber[]>(
    'contacts/fetchContacts',
    async () => {
        const { data: ApiSubscribers } = await axiosApi.get<ApiSubscribers | null>('/contacts.json');
        if (!ApiSubscribers) {
            return [];
        };

        return Object.keys(ApiSubscribers).map((id) => ({
            id,
            ...ApiSubscribers[id],
        }));
    },
);

export const createContacts = createAsyncThunk<void, ApiSubscriber>(
    'contacts/createContacts',
    async (apiContactData) => {
        await axiosApi.post('/contacts.json', apiContactData);
    },
);

export const removeContact = createAsyncThunk<void, string>(
    'todo/removeContact',
    async (contactId) => {
        await axiosApi.delete(`/contacts/${contactId}.json`);
    },
);

export const updateContact = createAsyncThunk<void, editContact>(
    'contacts/updateContact',
    async ({ contactId, apiSubscriber }) => {
        await axiosApi.put(`/contacts/${contactId}.json`, apiSubscriber);
    },
);