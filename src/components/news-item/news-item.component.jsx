
import './news-item.styles.scss';


export const NewsItem = ({ date, header, imgUrl, link, sectionName, subtitle, formatted_date }) => (
    <div className='news-item' style={{ backgroundImage: `url(${imgUrl})` }}>
        <div className="footer-box">
            <p>{formatted_date}</p>
            <h4  className="footer-box__header">{header}</h4>
        </div>
    </div>
)

export default NewsItem;