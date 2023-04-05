import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <div
      style={{
        margin: '20px',
        width: '700px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2 style={{ marginBottom: '0' }}>Contacts</h2>
      <div style={{ color: 'blue', marginTop: '10px' }}></div>
      <ContactList />
    </div>
  );
}
