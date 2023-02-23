import {NavLink} from 'react-router-dom';
import "./style.css";
import calendar from './../../images/icons/calendar.svg';

const News = ({title, img, date}) => {
    return (
        <div className="news-item">
            <img src={img} alt={title} />
            <h3 className="news-item__title">{title}</h3> 
            <div className="news-item__calendar">
                <img src={calendar} alt="calendar" />
                <p className="news-item__date">{date}</p>
            </div> 
            <NavLink to="/" className="news-item__link">Click for details</NavLink>   
        </div>
    );
}

export default News;