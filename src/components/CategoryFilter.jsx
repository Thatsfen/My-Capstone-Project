function CategoryFilter({ onCategoryChange }) {
    const categories = ["World", "Technology", "Sports", "Business"];
  
    return (
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Filter by Category:
        </label>
        <select
          id="category"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          style={{
            backgroundColor: 'white',
            color:'#333333',
            padding: '1px', 
            border: '1px solid #ccc', 
            borderRadius: '1px', 
            width: '7%', 
          }}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default CategoryFilter;
  