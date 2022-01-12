
import './news-item.styles.scss';


export const NewsItem = ({ date, header, imgUrl, link, sectionName, subtitle, formatted_date }) => (
    <a className='news-item' style={{ backgroundImage: `url(${imgUrl})` }} href={link} target="_blank">
        <div className="footer-box">
            <span>© {sectionName}</span>
            <p>{formatted_date}</p>
            <h4  className="footer-box__header">{header}</h4>
        </div>
    </a>
)

export default NewsItem;