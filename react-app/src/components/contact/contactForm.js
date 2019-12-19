import React from 'react'
import axios from 'axios'

class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user_id:props.user_id?props.user_id:'',
            firstname:props.firstname?props.firstname:'',
            lastname:props.lastname?props.lastname:'',
            number:props.number?props.number:'',
            contactImage:props.contactImage?props.contactImage:'',
            url:'http://localhost:3000/contacts/edit'
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3025/users/account',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response)
            const user_id=response.data._id
            this.setState({user_id})
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        // const formData={
        //     firstname:this.state.firstname,
        //     lastname:this.state.lastname,
        //     number:this.state.number,
        //     user_id:this.state.user_id,
        //     //contactImage:this.state.contactImage
            
        // }
        const formData=new FormData()
        formData.append('contactImage',this.state.contactImage)
        formData.append('firstname',this.state.firstname)
        formData.append('lastname',this.state.lastname)
        formData.append('number',this.state.number)
        formData.append('user_id',this.state.user_id)

        console.log('formdata:',formData)
        this.props.handleSubmit(formData)
    }
    handleChangeImage=(e)=>{
        let contactImage=e.target.files[0]
        console.log(contactImage)
        this.setState({contactImage})
    }

    render(){
        return(
            <React.Fragment>
                <div className="container" align="center">
                <form className="form-group" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" className="form-control" value={this.state.firstname} 
                        name="firstname" onChange={this.handleChange} required={true} placeholder="First Name"/>
                    </label><br/>

                    <label>
                        <input type="text" className="form-control" value={this.state.lastname} 
                        name="lastname" onChange={this.handleChange} required={true} placeholder="Last Name"/>
                    </label><br/>
                    <label>
                        <input type="text" className="form-control" value={this.state.number} 
                        name="number" onChange={this.handleChange} maxLength="10" required={true} placeholder="Phone Number"/>
                    </label><br/>
            
                    <label>
                        <input type="file" className="form-control-file"  
                        name="number"  onChange={this.handleChangeImage} required={true} placeholder="Choose File"/>
                    </label><br/>

                    <label>
                        <input type="hidden" className="form-control" defaultValue={this.state.user_id} 
                        name="number" onChange={this.handleChange} required={true} placeholder="User Id"/>
                    </label><br/>
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>
                </div>
            </React.Fragment>
        )
    }
}
export default ContactForm