import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactsForm from './components/ContactsForm';
import ContactsList from './components/ContactsList';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContactsList />} />
        <Route path='/contactsForm/:id' element={<ContactsForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
