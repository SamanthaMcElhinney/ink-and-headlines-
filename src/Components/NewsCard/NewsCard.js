import './NewsCard.css'

const NewsCard = ({id, author, title, description, image, date}) => {

 const formattedDate = () => {
    return new Date(`${date}`).toLocaleString();

  }
    return (
      <div className="news-card">
        <h2 className="news-title">{title}</h2>
        <p className="news-description">{description}</p>
        <h6 className="news-author">
          Written by: {author || "Author unknown"}
        </h6>
        <img className="news-image" src={image} alt={title}></img>
        <h4 className="news-date">{formattedDate()}</h4>
      </div>
    );
}

export default NewsCard