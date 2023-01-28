import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { getVisibleContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = evt => {
    if (evt.target.name === 'filter') {
      dispatch(getVisibleContacts(evt.target.value));
    }
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={handleChange}
      />
    </Label>
  );
};
