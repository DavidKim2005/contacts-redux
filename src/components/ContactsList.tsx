import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import ContactsHeader from "./ContactsHeader";
import { fetchContacts } from "../store/contactsThunks";
import { Subscriber } from "../types";
import SubscriberModal from "./SubscriberModal";

const ContactsList = () => {
    const dispatch = useAppDispatch();
    const subscribers = useAppSelector(state => state.contacts.subscribers);
    const fetchLoading = useAppSelector(state => state.contacts.fetchLoading);
    const [selectedSubscriber, setSelectedSubscriber] = useState<Subscriber | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (subscriber: Subscriber) => {
        setSelectedSubscriber(subscriber);
        setIsModalOpen(true);
    };


    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return fetchLoading ? (<div className="spinner-border" role="status">
    </div>) : (
        <main>
            <div>
                <ContactsHeader />
            </div>
            <div className="d-flex flex-wrap gap-2 mt-4">
                {subscribers.map((subscriber) => (
                    <div className="card ms-2 me-2 mb-2" style={{ width: "18rem" }} onClick={() => openModal(subscriber)}>
                        <img src={subscriber.photo} className="card-img-top" alt={subscriber.name} />
                        <div className="card-body">
                            <h4 className="card-text">{subscriber.name}</h4>
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && selectedSubscriber && <SubscriberModal subscriber={selectedSubscriber} closeModal={() => setIsModalOpen(false)} />}
        </main>
    );
}

export default ContactsList;