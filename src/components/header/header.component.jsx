import { Link } from "react-router-dom";
import SelectDate from "../select-date/select-date.component";

import "./header.styles.scss";

export const Header = ({ dateList, setFilterDate }) => (
  <div className="header">
    <div className="lead-head">
      <Link className="logo-container" to="/">
        News<span className="logo-container_alternative_text">Archiver</span>
      </Link>
      <SelectDate dateList={dateList} setFilterDate={setFilterDate}  />
    </div>

    <div className="options">
      <Link className="option" to="/international">International</Link>
      <Link className="option" to="/international">Local news</Link>
      <Link className="option" to="/international">Sport</Link>
    </div>
  </div>
);

export default Header;
