import "./SearBox.css"

const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <label className="label-search">
        Find contacts by name
        <input className="input-search" type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default SearchBox;
