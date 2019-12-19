import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class ContactShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contacts:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3025/contacts', {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
            const contacts=response.data
            this.setState({contacts})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    handleRemove=(id)=>{
        const confirmRemove=window.confirm('Are you Sure?')
            if(confirmRemove){
                axios.delete(`http://localhost:3025/contacts/${id}`,{
                    headers:{
                        'x-auth':localStorage.getItem('authToken')
                    }
                })
                .then(()=>{
                            this.setState((prevState)=>{
                                return{
                                    contacts:prevState.contacts.filter(contact=>contact._id!==id)
                                }
                            })   
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
       
    }

    render(){
        let sty={width:100}
        return(
            <React.Fragment>
                <div className="container">
                    <h4>Listing All Contacts</h4>
                    <Link to="/contacts/new">Add Contact</Link>
                    <table className="table" style={sty}>
                        <thead className="thead-dark">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone Number</th>
                                <th>Image</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contacts.map((contact,index)=>{
                                    return(
                                        
                                        <tr key={index}>    
                                            <td >{contact.firstname}</td>
                                            <td>{contact.lastname}</td>
                                            <td>{contact.number}</td>
                                            <td>{contact.contactImage}</td>
                                            <td><Link to={`/contacts/show/${contact._id}`}>Show</Link></td>
                                            <td><button className="btn btn-danger" onClick={()=>{
                                                this.handleRemove(contact._id)
                                            }}>Remove</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default ContactShow