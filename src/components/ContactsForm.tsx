import React, { useState } from "react";
import ContactsHeader from "./ContactsHeader";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import ButtonSpinner from "./ButtonSpinner";
import { ApiSubscriber } from "../types";
import { createContacts } from "../store/contactsThunks";

const ContactsForm = () => {
    const dispatch = useAppDispatch();
    const createLoading = useAppSelector(state => state.contacts.createLoading);
    const [subscriberName, setSubscriberName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(Number);
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const subscriber: ApiSubscriber = {
            name: subscriberName,
            phoneNumber: phoneNumber,
            email: email,
            photo: imageUrl
        };

        dispatch(createContacts(subscriber));
    };

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => setSubscriberName(e.target.value);
    const changePhone = (e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value);
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value);

    return (
        <div>
            <ContactsHeader />
            <form onSubmit={onSubmit}>
                <div className="form-group mt-2">
                    <label>Name contact</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        value={subscriberName}
                        onChange={changeName}
                    />
                </div>
                <div className="form-group mt-2">
                    <label>Phone Number</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Enter Phone number"
                        value={phoneNumber}
                        onChange={changePhone}
                    />
                </div>
                <div className="form-group mt-2">
                    <label>Email</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={changeEmail}
                    />
                </div>
                <div className="form-group mt-2">
                    <label>Image</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Enter Image url"
                        value={imageUrl}
                        onChange={changeImage}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary mt-3"
                    disabled={createLoading}
                >
                    {createLoading && <ButtonSpinner />}
                    Create
                </button>
            </form>
        </div>
    );
};

export default ContactsForm;