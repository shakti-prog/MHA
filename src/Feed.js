import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import {useState} from 'react';
import {History, NavLink, useHistory} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import validator from 'validator';


const FormPage = () => {
     const history = useHistory();
     const [active,Setactive] = useState(true);
     const [user,setUser] = useState({
        name:"",email:"",phone:"",feedback:""

     })
     let name,value;
     const handleInput = (e)=>{
     name = e.target.name;
     value = e.target.value;
     setUser({...user,[name]:value})
     }
     
     const PostData = async(e) =>{
        if(!(validator.isEmail(user.email))){
          e.preventDefault();
          e.stopPropagation();
          window.alert('Pls provide a valid email');
        }
        else if(!(validator.isMobilePhone(user.phone))){
          e.preventDefault();
          e.stopPropagation();
          window.alert('Pls provide a valid phone number');
        }
        else if(user.name.length<3){
          e.preventDefault();
          e.stopPropagation();
          window.alert('Name should atleast have 3 characters');

        }
        else if(user.feedback==""){
          e.preventDefault();
          e.stopPropagation();
          window.alert('Feedback cannot be empty');

        }
        else{
          e.preventDefault();
          const {name,email,phone,feedback} = user
          const res = fetch('/feeddata',{
            method:"POST",
            headers:{
             "Content-Type":"application/json"
            }, 
            body:JSON.stringify({
              name,email,phone,feedback
            })
          }).then((res)=>{
             return res;
          }).then((res2)=>{
              console.log(res2);
              window.alert("Your Feedback has been recorded , you will be redirected to  homepage");
              history.push('/')
          })
          

        }

      }
    
  return (
    <div style={{backgroundColor:"#5bccf6"}}>
    <div >
    <Alert variant="success">
<Alert.Heading style={{fontFamily:'serif',fontSize:'xx-large'}}>Hey, nice to see you !!</Alert.Heading>
<p style={{fontSize:'x-large',fontFamily:'serif'}}>
We hope you are doing good in this tough times . Welcome to Feedback Section !! 
This Section is for helping us improve our service and also to know the users side
</p>
<hr />
<p className="mb-0" style={{fontFamily:'serif',fontSize:'large'}}>
Feel Free to give your honest opinion!
</p>
</Alert>
    </div>
      <div>
    <Form style={{marginLeft:'320px',marginRight:'320px',marginTop:'30px',backgroundColor:"white",borderRight:"6px solid black",borderLeft:"6px solid black",borderTop:"6px solid black",borderBottom:"6px solid black",borderRadius:"20px"}}  method="POST" onSubmit={PostData}>
<Form.Group controlId="exampleForm.ControlInput1">
<Form.Label style={{fontSize:'x-large',fontFamily:'serif',color:'black'}}>EMAIL ADDRESS</Form.Label>
<Form.Control value={user.email} onChange={handleInput}  type="email"  name="email"/>
</Form.Group>
<Form.Group controlId="formGridAddress2">
<Form.Label style={{fontSize:'x-large',fontFamily:'serif',marginTop:'10px',color:'black'}}>FULL NAME</Form.Label>
<Form.Control value={user.name} onChange={handleInput} name="name"  />
</Form.Group>
<Form.Group controlId="formGridAddress2">
<Form.Label style={{fontSize:'x-large',fontFamily:'serif',marginTop:'10px',color:'black'}}>PHONE</Form.Label>
<Form.Control value={user.phone} onChange={handleInput} name="phone"/>
</Form.Group> 
<Form.Group controlId="exampleForm.ControlTextarea1">
<Form.Label style={{fontSize:'x-large',fontFamily:'serif',marginTop:'10px',color:'black'}}>FEEDBACK</Form.Label>
<Form.Control value={user.feedback} onChange={handleInput} as="textarea" rows={3} name="feedback" />
</Form.Group>
<Button variant="outline-primary" size="lg" type="submit"  style={{marginTop:'22px',fontSize:'large',fontFamily:'serif'}}>
SUBMIT
</Button>
</Form>
 </div>
</div>
  )
};

export default FormPage;

