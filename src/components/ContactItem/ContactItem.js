import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { Button } from './ContactItem.styled';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{name}: </span>
      <span>{number} </span>
      <Button type="button" onClick={() => dispatch(removeContact(id))}>
        Delete
      </Button>
    </div>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
