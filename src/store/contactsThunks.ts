import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiSubscribers, Subscriber } from "../types";
import axiosApi from "../axiosApi";

export const fetchContacts = createAsyncThunk<Subscriber[]>(
    'contacts/fetchContacts',
    async () => {
        const { data: ApiSubscribers } = await axiosApi.get<ApiSubscribers | null>('/contacts.json');
        if (!ApiSubscribers) {
            return [];
        }

        return Object.keys(ApiSubscribers).map((id) => ({
            id,
            ...ApiSubscribers[id],
        }))
    }
)

export const postContacts = createAsyncThunk(
    'contacts/postContacts',
    async () => {

    }
)