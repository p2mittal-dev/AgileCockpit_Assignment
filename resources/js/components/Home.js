import React from "react";
import { Link } from "react-router-dom";
import Schools from "./Schools";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
class Home extends React.Component {
    render(){
        return(
            <div className="layout">
                <div className="sidebar">
                    <h1>Your</h1>
                    <h1>Dashboard</h1>
                    <div className="actionBtn">
                        <button className="unactive"><FontAwesomeIcon icon="home" className="icon"/>Home</button>
                        <button className="active"><Link to="/dashboard"><FontAwesomeIcon icon="desktop" className="icon"/>Dashboard</Link></button>
                        <button className="active"><Link to="/addSchools"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Create Schools</Link></button>
                    </div>                    
                </div>
                <div className="SchoolDiv list_box"><Schools /></div>
            </div>
        )
    }
}
export default Home;