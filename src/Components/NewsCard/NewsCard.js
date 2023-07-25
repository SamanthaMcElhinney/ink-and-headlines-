import './NewsCard.css'

const NewsCard = ({id, author, title, description, image, date}) => {
    return(
        <div>
            <img src={image} alt={title}></img>
            <h2>{title}</h2>
            <h3>{author || 'Author unknown'}</h3>
            <p>{description}</p>
            <h3>{date}</h3>
        </div>
    )
}

export default NewsCard