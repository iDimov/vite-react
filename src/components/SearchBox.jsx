import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../redux/filtersSlice';

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className="search-wrapper">
      <label htmlFor="search">🔍 Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={handleChange}
        placeholder="Type to search contacts..."
      />
    </div>
  );
}