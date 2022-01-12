import React from 'react';

import './news-overview.styles.scss';

import NewsItem from '../news-item/news-item.component';
import { fetchNews } from '../../db/firebase.utils';

class NewsOverview extends React.Component {

    constructor() {
        super();

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        const { dateToFilter } = this.props;
        const { year, month } = dateToFilter;
        const filterDate = new Date(`${year}-${month}`);

        fetchNews(filterDate).then(news => this.setState({ ...this.state, news, isLoading: false }))
    }

    componentDidUpdate(prevProps, prevState) {
        if (!(prevProps.dateToFilter.year === this.props.dateToFilter.year && prevProps.dateToFilter.month === this.props.dateToFilter.month)) {
            const { dateToFilter } = this.props;
            const { year, month } = dateToFilter;
            const filterDate = new Date(`${year}-${month}`);

            console.log(dateToFilter);
          
            fetchNews(filterDate).then(news => this.setState({ ...this.state, news, isLoading: false }))
        }
    }


    divideListIntoParts(list, qtyPerList) {
        const result = new Array(Math.ceil(list.length / qtyPerList)).fill().map(_ => list.splice(0, qtyPerList))
        return result;
    }

    render() {
        return (
            <div className='news-overview'>
                {this.state.isLoading ? <p>loading ....</p>
                    :
                    this.divideListIntoParts(this.state.news, 3)
                        .map((array, index) => {
                            return <div key={index} className={`news-grid ${(index % 2) && "grid-alternate"}`}>
                                {array.map(item => <NewsItem key={item.id} {...item} />)}
                            </div>
                        }
                        )


                }
            </div>)
    }
}

export default NewsOverview