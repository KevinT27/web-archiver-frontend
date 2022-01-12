
import React from 'react';
import './App.css';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import NewsOverview from './components/news-overview/news-overview.component';

import { getDatesList } from './helper/helper';

class App extends React.Component {



  constructor() {
    super();

    const dateList = getDatesList(new Date("2022"), new Date());

    this.state = {
      dateList: dateList,
      dateToFilter: dateList[0]
    }


  }

  setFilterDate = (date) => {
    this.setState({ dateToFilter: date })
  }

  render() {
    return (
      <div className='root-div'>
        <Header dateList={this.state.dateList} setFilterDate={this.setFilterDate}/>
        <NewsOverview dateToFilter={this.state.dateToFilter} />
        <Footer />
      </div>
    );
  }


}

export default App;
