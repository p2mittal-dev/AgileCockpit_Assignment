import React from "react";
import Axios from "axios";
import moment from "moment";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class Schools extends React.Component {
    state = {
        schools: [],
        loading: true,
    }
    fetchSchools = async () => {
        const res = await Axios.get("/addSchool");
        if(res.data.status === 200){
            this.setState({schools: res.data.schools});
            this.setState({loading: false});
        }
    }
    componentDidMount(){
        this.fetchSchools();
    }

    deleteSchool = async (id) => {
        alert("Are You Want To Delete This School");
        const res = await Axios.delete(`/addSchool/${id}`);
        if(res.data.status === 200){
            this.fetchSchools();
        }
    }

    Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
   

    render(){
        if(this.state.loading){
            return <h1>Loading....</h1>
        }
        if(window.location.href === window.origin + "/dashboard"){
            return(
                <div>
                    {this.state.schools.map(schools => (                         
                        <div className="card school list_box" schools = {schools} key={schools.id}>
                            <div className="cardHeader">
                                <h2>{schools.name}</h2>
                                <div className="subinfo">
                                    <h6><FontAwesomeIcon icon="calendar" className="icon"/>{moment(schools.updated_at).format('LLL')}</h6>
                                    <h6><FontAwesomeIcon icon="flag" className="icon"/>{schools.type}</h6>
                                </div>
                            </div>
                            <hr />
                            <div className="cardBody">
                             <p>{this.Capitalize(schools.username)}</p>
                                <p>{schools.email}</p>
                                
                                <p>{schools.mobile}</p>
                                <p>{this.Capitalize(schools.address)}</p>
                            </div>
                            <hr />
                            <div className="cardFooter end">
                                <div className="action">
                                    <button className="edit"><Link className="color" to={`/edit/${schools.id}`} ><FontAwesomeIcon icon="edit" className="icon"/>Edit</Link></button>
                                    <button className="delete" onClick={() => this.deleteSchool(schools.id)}><FontAwesomeIcon icon="trash-alt" className="icon"/>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
        return(
            <div>
                {this.state.schools.map(schools => (
                    
                    <div className="card school list_box" key={schools.id}>
                        <div className="cardHeader">
                            <h2>{schools.name}</h2>
                            <div className="subinfo">
                                <h6><FontAwesomeIcon icon="calendar" className="icon"/>{moment(schools.updated_at).format('LLL')}</h6>
                                <h6><FontAwesomeIcon icon="flag" className="icon"/>{schools.username}</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="cardBody">
                            <p>{this.Capitalize(schools.username)}</p>
                                <p>{schools.email}</p>
                                
                                <p>{schools.mobile}</p>
                                <p>{this.Capitalize(schools.address)}</p>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        )
    }
}

export default Schools;