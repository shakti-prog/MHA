import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Table } from 'reactstrap';

const Example = (props) => {
  function PersonalityTest(){
    let SetPerform = "";
    let setComment = "";
    let score = parseInt(props.ans2) + parseInt(props.ans3) + parseInt(props.ans4) + parseInt(props.ans5);
    if(score<= 20 && score>=16){
      setComment = "You seem to be doing well when it comes to talking to people and express your opinion,keep it up";
      SetPerform="Good Personality Overall";
    }
    else if(score<=15 && score>=11){
       setComment="You seem to be decent when it comes to expressing yourself or talking to people. Further improvement can be made by indulging in group discussions and co-cirucular activities";
       SetPerform = "Average Personality Overall ";
    }
    else if(score<=10 && score>=6){
        setComment="You don't seem very comfortable interacting with people or being centre of attention. Talking to closed ones and taking part in social activities might help";
        SetPerform="Below Average Personality "; 
    }
    else{
        setComment="Highly Problematic . Counselling recommemded as well opening up about situation to closed ones might help";
        SetPerform="Poor Personality overall";
    }
  return(
    <div>
        <Table style={{backgroundColor:"black"}}>
        <thead>
        <tr scope="row">
          <th style={{color:"white",fontFamily:"sans-serif",fontSize:"xx-large"}}>TEST NO</th>
          <th style={{color:"white",fontSize:"xx-large"}}>RESULT</th>
          <th style={{color:"white",fontSize:"xx-large"}}>COMMENTS</th>
          <th></th>
        </tr>
      </thead>    
      <tbody scope="row">
        <tr>
          <td style={{color:"white",fontFamily:"sans-serif",fontSize:"x-large"}}>1</td>
          <td style={{color:"white",fontFamily:"sans-serif",fontSize:"x-large"}}>{SetPerform}</td>
          <td style={{color:"white",fontFamily:"sans-serif",fontSize:"large"}}>{setComment}</td>
        </tr>
        </tbody>
       
        </Table>
    </div>
  )
  }
  function Responses(){
    return(
      <Table style={{backgroundColor:"black"}}>
      <thead>
        <tr>
          <th style={{color:'white',fontFamily:"sans-serif",fontSize:"xx-large"}}>Sr</th >
          <th style={{color:"white",fontSize:"xx-large"}}>QuestionID</th>
          <th style={{color:"white",fontSize:"xx-large"}}>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" style={{color:"white",fontSize:"x-large"}}>1</th>
          <td style={{color:"white",fontSize:"x-large"}}>Q1</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.ans1}</td>
        </tr>
        <tr>
          <th scope="row" style={{color:"white",fontSize:"x-large"}}>2</th>
          <td style={{color:"white",fontSize:"x-large"}}>Q2</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.ans2}</td>
        </tr>
        <tr>
          <th scope="row" style={{color:"white",fontSize:"x-large"}}>3</th>
          <td style={{color:"white",fontSize:"x-large"}}>Q3</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.ans3}</td>
        </tr>
        <tr>
          <th scope="row" style={{color:"white",fontSize:"x-large"}}>4</th>
          <td style={{color:"white",fontSize:"x-large"}}>Q4</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.ans4}</td>
        </tr>
        <tr>
          <th scope="row" style={{color:"white",fontSize:"x-large"}}>5</th>
          <td style={{color:"white",fontSize:"x-large"}}>Q5</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.ans5}</td>
        </tr>
        <tr>
          <th scope="row" style={{color:"white",fontSize:"x-large"}}>6</th>
          <td style={{color:"white",fontSize:"x-large"}}>Q6</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.ans6}</td>
        </tr>
        <tr>
          <th scope="row" style={{color:"white",fontSize:"x-large"}}>7</th>
          <td style={{color:"white",fontSize:"x-large"}}>Q7</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.ans7}</td>
        </tr>
        <tr>
          <th scope="row" style={{color:"white",fontSize:"x-large"}}>8</th>
          <td style={{color:"white",fontSize:"x-large"}}>Q8</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.ans8}</td>
        </tr>
        <tr>
          <th scope="row" style={{color:"white",fontSize:"x-large"}}>9</th>
          <td style={{color:"white",fontSize:"x-large"}}>Q9</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.ans9}</td>
        </tr>
        <tr>
          <th scope="row" style={{color:"white",fontSize:"x-large"}}>10</th>
          <td style={{color:"white",fontSize:"x-large"}}>Q10</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.ans10}</td>
        </tr>
        <tr>
          <th scope="row" style={{color:"white",fontSize:"x-large"}}>11</th>
          <td style={{color:"white",fontSize:"x-large"}}>Q11</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.ans11}</td>
        </tr>
        <tr>
          <th scope="row" style={{color:"white",fontSize:"x-large"}}>12</th>
          <td style={{color:"white",fontSize:"x-large"}}>Q12</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.ans12}</td>
        </tr>
        <tr>
          <th scope="row" style={{color:"white",fontSize:"x-large"}}>13</th>
          <td style={{color:"white",fontSize:"x-large"}}>Q13</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.ans13}</td>
        </tr>
        <tr>
          <th scope="row" style={{color:"white",fontSize:"x-large"}}>14</th>
          <td style={{color:"white",fontSize:"x-large"}}>Q14</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.ans14}</td>
        </tr>
        <tr>
          <th scope="row" style={{color:"white",fontSize:"x-large"}}>15</th>
          <td style={{color:"white",fontSize:"x-large"}}>Q15</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.ans15}</td>
        </tr>
      </tbody>
    </Table>
    )
  }
  function PandemicAnxTest(){
    let setComment = "";
    let SetPerform = "";
    let score = parseInt(props.ans6) + parseInt(props.ans7) + parseInt(props.ans8) + parseInt(props.ans9) + parseInt(props.ans10);
    if(score<=25 && score>=19){
      setComment = " Seems like the pandemic has adversely affected you and its proving a quite a challenge for you to adjust to new lifestyle . Counselling , interaction with closed ones , substantial break from work might help";
      SetPerform = "High Pandemic Anxiety";
    }
    else if(score>=12 && score<=18){
         setComment="Seems like you have been affected by fair amount because of this pandemic.Adjusting to new life hasn't been easy , seems your productivity has taken a hit . Co circular activities , hobbies, interacting with closed ones can help";
         SetPerform="Moderate Pandemic Anxiety";
    }
    else if(score>=6 && score<=11){
         setComment="Seems like you have managed to keep a check on adverse effects of pandemic on you. Your prodcutivity is fine and you are doing good if not great";
         SetPerform="Low Pandemic Anxiety";
    }
    else{
       setComment="You have done a great job in curbing the adverse effects of pandemic . Your productivity is intact and you have adjusted well to the new changes";
       SetPerform="No Pandemic Anxiety";
    }
  return(
      <div>
           <Table style={{backgroundColor:"black"}}>
           <thead>
        <tr scope="row">
          <th style={{color:"white",fontFamily:"sans-serif",fontSize:"xx-large"}}>TEST NO</th>
          <th style={{color:"white",fontSize:"xx-large"}}>RESULT</th>
          <th style={{color:"white",fontSize:"xx-large"}}>COMMENTS</th>
          <th></th>
        </tr>
      </thead>        
      <tbody scope="row">
        <tr scope="row">
          <td style={{color:'white',fontSize:"x-large"}}>2</td>
          <td style={{color:'white',fontSize:"x-large"}}>{SetPerform} detected</td>
          <td style={{color:"white",fontFamily:"sans-serif",fontSize:"large"}}>{setComment}</td>
        </tr>
        </tbody>
           </Table>
      </div>
  )
  }
  function SocialMediaAnxTest(){
  let SetComments = "";
  let SetPerform = "";
  let score = parseInt(props.ans11) + parseInt(props.ans12) + parseInt(props.ans13) + parseInt(props.ans14) + parseInt(props.ans15);
  if(score>=19 && score<=25){
      SetPerform="Chronic Social Anxiety";
      SetComments="You need to take substantial break from social media and start interacting more with your closed ones.Involve yourself more in co-cirrcular activities to stay away";
  }
  else if(score>=12 && score<=18){
      SetPerform="Moderate Social Anxiety";
      SetComments="You are substantially involved in social media but still a small break from social media would help you a lot ";
  }
  else if(score>=6 && score<=11){
       SetPerform="Low Social Anxiety";
       SetComments="You have done well in not letting social media affect you negatively. You have good if not great control over social media's negative effect"; 
  }
  else{
    SetPerform="No Social Anxiety";
    SetComments="You have succesfully managed to use social media to your benefit and also managed to control the negatives too . Good Going!";
  }
  return(
        <div>
          <Table style={{backgroundColor:"black"}}>
           
          <thead>
        <tr scope="row">
          <th style={{color:"white",fontFamily:"sans-serif",fontSize:"xx-large"}}>TEST NO</th>
          <th style={{color:"white",fontSize:"xx-large"}}>RESULT</th>
          <th style={{color:"white",fontSize:"xx-large"}}>COMMENTS</th>
          <th></th>
        </tr>
      </thead> 
      <tr scope="row">
          <td style={{color:'white',fontSize:"x-large"}}>3</td>
          <td style={{color:'white',fontSize:"x-large"}}> {SetPerform} detected</td>
          <td style={{color:"white",fontFamily:"sans-serif",fontSize:"large"}}>{SetComments}</td>
        </tr>
     
          </Table>
        </div>
  )
  }

   function Info(){
      return(
        <div>
         <Table style={{backgroundColor:"black"}}>
      <thead>
        <tr>
          <th style={{color:"white",fontSize:"x-large"}}>Full Name</th>
          <th style={{color:"white",fontSize:"x-large"}}>Email</th>
          <th style={{color:"white",fontSize:"x-large"}}>Gender</th>
          <th style={{color:"white",fontSize:"x-large"}}>Phone Number</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{color:"white",fontSize:"x-large"}}>{props.NAME}</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.EMAIL}</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.GENDER}</td>
          <td style={{color:"white",fontSize:"x-large"}}>{props.NUMBER}</td>
        </tr>
        </tbody>
    </Table>
        </div>
      )
   }
  return (
   <div style={{backgroundColor:"black"}}>
     <Info/>
     <h1>Responses</h1>
     <Responses/>
     <h1>Analysis</h1>
     <PersonalityTest/>
     <PandemicAnxTest/>
     <SocialMediaAnxTest/>  
   </div>
  );
}

export default Example;