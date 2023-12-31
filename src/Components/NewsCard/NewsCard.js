import './NewsCard.css'
import { NavLink } from 'react-router-dom';

const NewsCard = ({id, author, title, description, image, date, handleReadMore}) => {
console.log(id, "id line 5")
 const formattedDate = () => {
    return new Date(`${date}`).toLocaleString();

  }
    return (
      <div className="news-card">
        <h2 className="news-title">{title}</h2>
        <p className="news-description">{description}</p>
        <img className="news-image" src={image} alt={title}></img>
        <p className="news-author">
          Written by: {author || "Author unknown"}
        </p>
        <p className="news-date">{formattedDate()}</p>
        <NavLink className="news-readmore"to={`/details/${id}`} onClick={() => handleReadMore(id)}>
          Read More
        </NavLink>
      </div>
    );
}

export default NewsCard