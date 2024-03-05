import React from "react";
import { Subscriber } from "../types";
import { useAppDispatch } from "../app/hooks";
import { fetchContacts, removeContact } from "../store/contactsThunks";

interface Props {
    subscriber: Subscriber;
    closeModal: () => void;
    id: string
}

const SubscriberModal: React.FC<Props> = React.memo(({ subscriber, closeModal, id }) => {
    const dispatch = useAppDispatch();
    const { name, phoneNumber, email, photo } = subscriber;

    const onRemove = async () => {
        if (window.confirm('Do you really wanna delete?')) {
            await dispatch(removeContact(id));
            closeModal();
            await dispatch(fetchContacts());
        }
    };

    return (
        <div className="modal-overlay" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1050 }}>
            <div className="modal-dialog" style={{ margin: "0 auto" }}>
                <div className="modal-content" style={{ backgroundColor: "#fff", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)" }}>
                    <div className="modal-header" style={{ borderBottom: "none" }}>
                        <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                    </div>
                    <div className="modal-body" style={{ textAlign: "center" }}>
                        <img src={photo} alt={name} style={{ maxWidth: 400, maxHeight: 400 }} />
                        <h4 className="mt-2">{name}</h4>
                        <p><b>Phone Number:</b> {phoneNumber}</p>
                        <p><b>Email:</b> {email}</p>
                    </div>
                    <div className="modal-footer d-flex justify-content-around mb-2" style={{ borderTop: "none" }}>
                        <button type="button" className="btn btn-secondary" onClick={onRemove}>Delete</button>
                        <button type="button" className="btn btn-primary">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default SubscriberModal;
