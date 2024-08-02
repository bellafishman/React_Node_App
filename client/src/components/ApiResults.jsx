
export default function ApiResults({ articles, isSearch }) {
  return (
    <div className="article-one"> 
       {articles.map((article, index) => (
        <div className="article-one" key={index}> 
            <div className="info-row">
                <h5><a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a></h5>
                <div className="article-date">{article.author}, {article.publicationDate}</div>
            </div>
            {!isSearch && ( // iamge and abstract only shown for default articles
                <div className="content-row">
                    <img src={article.coverImage} alt={article.coverAlt} />
                    <p>{article.abstract}</p>
                </div>
            )}
        </div>
      ))}
    </div>
  );
}
