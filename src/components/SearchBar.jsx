function SearchBar({ value, onChange }) {
    return (
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for news..."
          style={{
            backgroundColor: 'white',
            color:'#333333',
            padding: '10px', 
            border: '1px solid #ccc', 
            borderRadius: '5px', 
            width: '50%', 
          }}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }
  
  export default SearchBar;
  