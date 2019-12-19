import React from 'react'
import axios from 'axios'
import ContactForm from './contactForm'
class ContactEdit extends React.Component{
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
            const contact=response.data
            console.log('contact',contact)
            this.setState({contact})
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    handleSubmit=(formData)=>{
        //e.preventDefault()
        axios.put(`http://localhost:3025/contacts/${this.state.contact._id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response)
            if(response.data.error){
                alert('Enter Details Correctly')
            }
            else{
                alert('Contact Updated Successfully')
                this.props.history.push(`/contacts/show/${this.state.contact._id}`)
                //window.location.reload()
            }
        })
    }


    render(){
        return(
            <React.Fragment>
                <h3>Edit Contact</h3>
                {
                    Object.keys(this.state.contact).length!==0 && 
                    <ContactForm {...this.state.contact} handleSubmit={this.handleSubmit}/>
                }
            </React.Fragment>
        )
    }
}
export default ContactEdit