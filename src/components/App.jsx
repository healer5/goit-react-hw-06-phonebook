import { GlobalStyle } from '../GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section } from "./Section/Section";

export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      
      <Section title="Contacts">
        <Filter />
        <ContactList />  
      </Section>

      <GlobalStyle />
    </>
  );
};