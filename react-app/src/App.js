import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import UserLogin from './components/user/userLogin'
import UserRegister from './components/user/userRegister'
import ContactList from './components/contact/contactList' 
import ContactAdd from './components/contact/contactAdd'
import ContactShow from './components/contact/contactShow'
import ContactEdit from './components/contact/contactEdit'
import Home from './components/common/home'
function App() {
  return (
    <BrowserRouter>
    <div align="left">
    <img src={logo} alt="Logo" width="100"/>
    </div>
    <div className="container" align="center">
    
      {
        localStorage.getItem('authToken')?
        (<div>
          <Link to="/">Home |</Link>
          <Link to="/contacts"> Contacts |</Link>
          <Link to="/logout"> Logout</Link>
        </div>):
        (<div>
        <Link to="/">Home |</Link>
        <Link to="/users/login"> Login |</Link>
        <Link to="/users/register"> Register</Link>
        </div>)
      }
     <Switch>
       <Route path="/" component={Home} exact={true}></Route>
       <Route path="/users/login" component={UserLogin} ></Route>
       <Route path="/users/register" component={UserRegister} ></Route>
       <Route path="/contacts" component={ContactList} exact={true}></Route>
       <Route path="/logout" component={logout} exact={true}></Route>
       <Route path="/contacts/new" component={ContactAdd}></Route>
       <Route path="/contacts/show/:id" component={ContactShow}></Route>
       <Route path="/contacts/edit/:id" component={ContactEdit}></Route>
     </Switch>
    </div>
    </BrowserRouter>
  );
}
function logout(){
  localStorage.clear()
  {window.location.assign('/users/login')}
}

export default App;
