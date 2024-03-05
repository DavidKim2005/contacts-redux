import { Button, Container, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const ContactsHeader = () => {
    const navigate = useNavigate();

    const toContactsForm = () => {
        navigate('/contactsForm')
    };

    return (
        <Container className="d-flex justify-content-between align-items-center border-2 border-bottom">
            <Navbar expand="lg" className="bg-body-tertiary mb-2">
                <Container>
                    <NavLink to='/'>Contacts</NavLink>
                </Container>
            </Navbar>
            <Button className="mb-2" type="button" onClick={toContactsForm}>Add new contact</Button>
        </Container>
    );
};

export default ContactsHeader;