function ArticleDetails() {
    return (
      <section className="p-4">
        <h2 className="text-2xl font-bold">Article Title</h2>
        <p className="text-gray-600">By Author Name</p>
        <p className="text-sm text-gray-500 mb-4">Published on January 1, 2025</p>
        <img
          src="https://via.placeholder.com/600"
          alt="Article Thumbnail"
          className="w-full mb-4 rounded"
        />
        <p className="text-lg">This is the full content of the article.</p>
      </section>
    );
  }
  
  export default ArticleDetails;
  