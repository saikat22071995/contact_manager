import React from 'react'
import axios from 'axios'
import ContactForm from './contactForm'
class ContactAdd extends React.Component{
    handleSubmit=(formData)=>{
        axios.post('http://localhost:3025/contacts',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken'),
                
            }
        })
        .then((response)=>{
            console.log(response)
            if(response.data.error){
                alert('Enter Details Correctly')
            }
            else{
                alert('Contact Added Successfully')
                window.location.reload()
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <h3>Add Contact Details</h3>
                <ContactForm handleSubmit={this.handleSubmit}/>
            </React.Fragment>
        )
    }
}
export default ContactAdd