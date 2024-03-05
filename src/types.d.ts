export interface ApiSubscriber {
    name: string;
    phoneNumber: number;
    email: string;
    photo: string;
};

export interface ApiSubscribers {
    [id: string]: ApiSubscriber;
};

export interface Subscriber extends ApiSubscriber {
    id: string;
};

export interface editContact {
    contactId: string;
    apiSubscriber: ApiSubscriber;
};