import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class ContactShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contact:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`http://localhost:3025/contacts/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
            const contact=response.data
            this.setState({contact})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="container"><br />
                    <h3>Contact Show Page</h3><br />
                    <hr />
                    <Link to={`/contacts/edit/${this.state.contact._id}`}>Edit</Link>
                        <p>Fisrt Name:{this.state.contact.firstname}</p>
                        <p>Last Name:{this.state.contact.lastname}</p>
                        <p>Number:{this.state.contact.number}</p>
                </div>
            </React.Fragment>
        )
    }
}
export default ContactShow