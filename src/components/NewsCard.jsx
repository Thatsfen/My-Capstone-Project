function NewsCard({ article }) {
    const imageUrl =
      article.multimedia && article.multimedia.length > 0
        ? `https://static01.nyt.com/${article.multimedia[0].url}`
        : article.image_url;
  
    return (
      <div className="border rounded shadow p-4">
        <img
          src={imageUrl}
          alt={article.title}
          className="w-full h-32 object-cover mb-2 rounded"
        />
        <h3 className="font-bold text-lg">{article.title}</h3>
        <p className="text-sm text-gray-600">{article.snippet}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline mt-2 inline-block"
        >
          Read More
        </a>
      </div>
    );
  }
  
  export default NewsCard;
  