import React from 'react';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './App.css';
import Example from './Message';
import validator from 'validator';
import men from './mental.jpg';

var na,gen,em,num,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15;
function TakeATest(){
  const [active,setActive] = useState(false);
  function FormExample(){
    const [validated, setValidated] = useState(false);
    const [user,setUser] = useState({
      name:"",gender:"Male",number:"",email:"",q1:"less than 1",q2:"1",q3:"1",q4:"1",q5:"1",q6:"1",q7:"1",q8:"1",q9:"1",q10:"1",q11:"1",q12:"1",q13:"1",q14:"1",q15:"1"
   }) 
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        window.alert("Pls provide a correct email");
      }
      else if(!validator.isMobilePhone(user.number)){
          event.preventDefault();
          event.stopPropagation();
          window.alert("Pls provide a correct contact number");
      }
      else if(user.name.length<3){
        event.preventDefault();
        event.stopPropagation();
        window.alert("Name should have atleast have 3 characters");
      }
      else {
        setValidated(true);
        event.preventDefault();
        const {name,email,number,gender,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15} = user;
         na = user.name;
         gen = user.gender;
         em = user.email;
         num = user.number;
         s1=user.q1;
         s2=user.q2;
         s3=user.q3;
         s4=user.q4;
         s5=user.q5;
         s6=user.q6;
         s7=user.q7;
         s8=user.q8;
         s9=user.q9;
         s10=user.q10;
         s11=user.q11;
         s12=user.q12;
         s13=user.q13;
         s14=user.q14;
         s15=user.q15;
        const res = fetch(' https://pbl-backend.herokuapp.com/testdata',{
        mode: 'no-cors',   
        method:"POST",
        headers:{
         "Content-Type":"application/json"
        }, 
        body:JSON.stringify({
          name,gender,email,number,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15
        })
      }).then((res)=>{
        //console.log(res.json()); 
       return res;
      }).then((res2)=>{
          if(res2.status == 200)
           {
            setActive(true)
            console.log(res2);
            console.log(res2.json());
            window.alert("Response has been recorded");
           }
           else{
             window.alert("Looks like you have already taken a test pls try with another emailid");
           }
      })
      }

    };
    let name,value;
    const handleInput = (e)=>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value})
    }
  
    return (
      <div style={{backgroundImage:`url(${men})`}}>
      <Form noValidate validated={validated}  onSubmit={handleSubmit} style={{marginLeft:'320px',marginRight:'320px',marginTop:'5px',borderLeft:"6px solid ",borderRight:"6px solid ",borderTop:"6px solid ",borderBottom:"6px solid ",backgroundColor:'#F0F8FF',borderRadius:"20px"}}>
        <h2>PERSONAL INFORMATION</h2>
        <hr style={{border:"2px dashed black"}}/>
        <Form.Row>
          <Form.Group  md="4" controlId="validationCustom01" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
            <Form.Label>FULL NAME</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              defaultValue=""
              name="name"
              onChange={handleInput}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group  md="4" controlId="validationCustomUsername" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
            <Form.Label>EMAIL</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="email"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                name="email"
                onChange={handleInput}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group  md="3" controlId="validationCustom05" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
            <Form.Label>CONTACT NUMBER</Form.Label>
            <Form.Control type="number" placeholder="" required  name="number" onChange={handleInput}/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid Contact Number
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom2" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label> GENDER </Form.Label>
      <Form.Control as="select" custom style={{marginLeft:"20px"}} name="gender" onChange={handleInput}>
        <option>MALE</option>
        <option>FEMALE</option>
        <option>OTHER</option>
        
      </Form.Control>
    </Form.Group>
          <hr style={{border:"2px solid",borderColor:'black'}}/>
          <h2>OVERALL BEHAVIOUR TEST </h2>
          <hr style={{border:"2px solid black"}}/>
          <Form.Group controlId="exampleForm.SelectCustom1" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label> Q1) How many hours per day do you spend on doing things that you really like? </Form.Label>
      <Form.Control as="select" custom name="q1"onChange={handleInput}>
        <option>1-2 hrs</option>
        <option>2-3 hrs</option>
        <option>3-4 hrs</option>
        <option>less than 1</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom2" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label> Q2) How do you feel being the center of attention? (5 being the best and 1 being the worst) </Form.Label>
      <Form.Control as="select" custom style={{marginLeft:"20px"}} name="q2" onChange={handleInput}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom3" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label>Q3) How do you feel while being observed while working?(5 being the best and 1 being the worst)</Form.Label>
      <Form.Control as="select" custom name="q3" onChange={handleInput}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom4" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label> Q4) How confident are you while talking to someone you don't know very well?(5 being the best and 1 being the worst)</Form.Label>
      <Form.Control as="select" custom name="q4" onChange={handleInput}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom5" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label>Q5
        ) How well can you express disagreement or disapproval to someone you don't know very well?(5 being the best and 1 being the worst)</Form.Label>
      <Form.Control as="select" custom name="q5" onChange={handleInput}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom5" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label>
        <hr style={{border:"2px solid",borderColor:'black'}}/>
        <h2>PANDEMIC ANXIETY TEST </h2>
        <hr style={{border:"2px solid black"}}/>  
      Q6)How uncomfortable you get while thinking about Covid 19 ?(Higher the score higher the uncomfort)</Form.Label>
      <Form.Control as="select" custom name="q6" onChange={handleInput}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom5" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label>Q7
        ) How nervous or anxious do you get while watching covid 19 news?(Higher the score higher the anxiety)</Form.Label>
      <Form.Control as="select" custom name="q7" onChange={handleInput}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom5" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label>Q8
        ) How difficult has it been for you to adapt to online education or work from home concept?(Higher the score higher the difficulty)</Form.Label>
      <Form.Control as="select" custom name="q8" onChange={handleInput}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom5" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label>Q9
        ) How difficult has it been for you to maintain your daily routine in the pandemic life?(Higher the score higher the difficulty)</Form.Label>
      <Form.Control as="select" custom name="q9" onChange={handleInput}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom5" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label>Q10
        ) How much has this pandemic affected your productivity?(Higher the score higher the effect)</Form.Label>
      <Form.Control as="select" custom name="q10" onChange={handleInput}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom5" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label>
        <hr style={{border:"2px solid",borderColor:'black'}}/>
        <h2>SOCIAL  ANXIETY TEST </h2>
        <hr style={{border:"2px solid black"}}/>  
      Q11)How much time do you spend on Social Media on an average?(selecting a number means you spend more hrs than that number )</Form.Label>
      <Form.Control as="select" custom name="q11" onChange={handleInput}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom5" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label>Q12
        ) How much of a negative impact has social media had on your life?(Higher the score higher the impact)</Form.Label>
      <Form.Control as="select" custom name="q12" onChange={handleInput}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom5" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label>Q13 
        )  On a scale 1-5 How high is your urge to share something that has happened to you on social media?(Higher the score higher the urge
        )</Form.Label>
      <Form.Control as="select" custom name="q13" onChange={handleInput}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom5" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label>Q14 
        )  On a scale 1-5 how much has social media affected your relations with your family(Higer the score higher the impact)?</Form.Label>
      <Form.Control as="select" custom name="q14" onChange={handleInput}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.SelectCustom5" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}}>
      <Form.Label>Q15 
        )  Does Social Media make you depressed or make you feel inferior ?(5 being high and 1 being low)</Form.Label>
      <Form.Control as="select" custom name="q15" onChange={handleInput}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
        </Form.Row>
        <hr/>
        <Button variant="outline-primary" type="submit" size="lg" style={{marginTop:"20px",marginBottom:"20px",fontSize:"x-large"}} >Submit</Button>
      </Form>
      </div>
    );
    
  }
   function AlertDismiss(){
    const [open,close] = useState(false); 
    return (
       <div>
         <Alert show={open} variant="success">
         <Alert.Heading style={{fontFamily:'sans-serif',fontSize:'xx-large',fontWeight:'bold'}}>Welcome to Take a Test section</Alert.Heading>  
         <p style={{fontFamily:'sans-serif',fontSize:'x-large'}}>
             Test is divided into 3 sections - Overall Personality,Pandemic Anxiety,Social Media Anxiety 
             <br style={{fontFamily:'sans-serif',fontSize:'x-large'}}/>Personal Information has to be provided 
            <br style={{fontFamily:'sans-serif',fontSize:'x-large'}}/>Each Section will consist of 5 questions
            <br style={{fontFamily:'sans-serif',fontSize:'x-large'}}/>Test No - 1 - Overall Personality Test
            <br style={{fontFamily:'sans-serif',fontSize:'x-large'}}/>Test No - 2 - Pandemic Anxiety Test 
            <br style={{fontFamily:'sans-serif',fontSize:'x-large'}}/>Test No - 3 - Social Media Anxiety Test
          </p>
          <hr/>
          <div className="d-flex justify-content-end">
            <Button style={{fontSize:'xx-large'}}onClick={() => close(false)} variant="outline-primary" style={{marginLeft:"auto",marginRight:'auto'}}>
              Close
            </Button>
          </div>
        </Alert>
        {!open && <Button onClick={() => close(true)} style={{fontSize:'x-large'}}>About the test</Button>} 
       </div>
    )
   }
    return(
      <div>
            {active
              ? <hr/>
              : <AlertDismiss/>  
            }
           
            <hr/>
            {active
              ? <hr/>
              : 
              <FormExample className="Test"/> 
            }
            {!active
        ? <hr/>
        : <Example NAME={na} NUMBER={num} EMAIL={em} GENDER={gen}ans1={s1} ans2={s2} ans3={s3} ans4={s4} ans5={s5} ans6={s6} ans7={s7}
          ans8 = {s8} ans9={s9} ans10 = {s10} ans11={s11} ans12={s12} ans13={s13} ans14={s14} ans15={s15} 
        />
      }
      </div>
      
    )
  }
  
export default TakeATest;