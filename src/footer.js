import React,{Component} from 'react';
import {Link} from 'react-router-dom';


function Footer(){
 return(
    <div className="footer" style={{backgroundColor:"black"}}>
    <div className="container">
        <div className="row justify-content-center">             
            <div className="col-4 offset-1 col-sm-2">
                <h5>Links</h5>
                <ul className="list-unstyled">
                    <li><Link to='/home'>HOME</Link></li>
                    <li><Link to='/Test'>TAKE A TEST</Link></li>
                    <li><Link to='/About'>ABOUTUS</Link></li>
                    <li><Link to="/Contact">CONTACTUS</Link></li>
                    <li><Link to="/Blog">BLOG</Link></li>
                    <li><Link to="/Feedback">FEEDBACK</Link></li>
                </ul>
            </div>
            <div className="col-7 col-sm-5" style={{color:'blue'}}>
                <h5>Our Address</h5>
                <address>
                  121, Clear Water Bay Road<br />
                  Clear Water Bay, Kowloon<br />
                  PUNE<br />
                  <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                  <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                </address>
            </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p style={{color:'blue'}}>© Copyright 2021 MENTAL HEALTH ANALYZER</p>
                </div>
            </div>
        </div>
        </div>
 )
}

export default Footer;