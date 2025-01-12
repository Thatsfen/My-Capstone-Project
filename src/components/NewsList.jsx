import { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

function NewsList() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("world");

  const apiKey = "8irMgBAo0hagwf0YfykN2ZpwbKg3JZe9";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${apiKey}`
        );
        setArticles(response.data.results || []);
        setError(null);
      } catch (err) {
        setError(`Error: ${err.message}`);
        setArticles([]);
      }
    };

    fetchNews();
  }, [category]);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest News</h2>
      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CategoryFilter onCategoryChange={setCategory} />
      </div>
      {error ? (
        <p className="text-red-600 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div
                key={article.url}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <NewsCard article={article} />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">
              No articles found for the selected category or search term.
            </p>
          )}
        </div>
      )}
    </section>
  );
}

export default NewsList;
