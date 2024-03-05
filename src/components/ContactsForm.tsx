import ContactsHeader from "./ContactsHeader";

const ContactsForm = () => {

    return (
        <div>
            <ContactsHeader />
            <form>
                <div className="form-group mt-2">
                    <label>Name contact</label>
                    <input type="text" className="form-control" placeholder="Enter Name" />
                </div>
                <div className="form-group mt-2">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" placeholder="Enter Phone number" />
                </div>
                <div className="form-group mt-2">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group mt-2">
                    <label>Image</label>
                    <input type="text" className="form-control" placeholder="Enter Image url" />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Save</button>
            </form>
        </div>
    );
}

export default ContactsForm;