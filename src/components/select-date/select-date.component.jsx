
import React from 'react'
import './select-date.styles.scss'


class SelectDate extends React.Component {

    constructor(props) {
        super();
    }

    handleChange = (e) => {
        const filterDate = new Date(e.target.value);
        const filterDateObj = {year: filterDate.getFullYear(), month: filterDate.getMonth()}
        this.props.setFilterDate(filterDateObj)
    }

    render() {
        return (
            <div className="date-select-container">
                <select className='date-select' onChange={this.handleChange}>
                    {this.props.dateList.map(date => <option key={date} value={date.year+"-"+date.month}>{date.year + "/" + date.month}</option> )} 
                </select>
            </div>
        )
    }



}

export default SelectDate