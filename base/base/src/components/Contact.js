import React,{useState,useEffect, useRef} from 'react'
import '../styles/Navbar.css';
import logo from '../img/Banner2.png'
import {gsap} from 'gsap'
import {
    useParams,
    Link
  } from "react-router-dom";
import emailjs from 'emailjs-com'
import info from '../data'

const Contact = () => {

    const [_service,setService] = useState('')
    const [emailConfirmation,setEmailConfirmation] = useState(false)
    const flashBannerRef = useRef();
    const {service} = useParams();

    const sendMail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_yyd2nbo', 'request_email', e.target, 'user_WINLMjLbm8Uh4S8JPdXqp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setService('')
          setEmailConfirmation(true);
          redirection();

    }

    const redirection = () => {
        gsap.from(flashBannerRef.current,{
            duration:1,
            y:-100
            })
        }

        
    
    useEffect(()=>{
        setEmailConfirmation(false)
        if(service !== undefined || service !== ''){
            setService(service)
        }
    },[])
    console.log(_service + ' Test')

    return (
        <>
        {emailConfirmation && <div className="flashBanner" ref={flashBannerRef}>
            <p>Request Recieved | Confirmation of the request will be sent to your personal email </p>
            <button onClick={()=>setEmailConfirmation(false)}>X</button>
        </div>}
        
        <div class="contactPage">
            <div class="navbarContainer">
                <div className="navbar">
                    <Link to="/"><img className="logo" src={logo} /></Link>
                    <ul className="navbarItems">
                        <Link to="/"><a>HOME</a></Link>
                        <Link to="/contact"><a className="active">CONTACT</a></Link>
                    </ul>
                </div>

                <div className="searchContainer">
                    <input type="text" id="searchText" name="Search" disabled placeholder="" />
                </div>
            </div>

            <form id="contactForm" onSubmit={sendMail}>
                <div class="formContainer">
                    <div class="formFields">
                        <div class="titleName">
                            <select id="title" name="title" required>
                                <option value="mr">Mr</option>
                                <option value="mrs">Mrs</option>
                                <option value="miss">Miss</option>
                                <option value="ms">Ms</option>
                            </select>
                            <input type="text" id="fullname" name="name" placeholder="FULL NAME" required/>
                        </div>
                        <input type="tel" id="number" name="number" placeholder="Contact Number" pattern="^(0\W*7\W*(?:\d\W*){9})$" required />
                        <input type="text" name="postcode" className="postcode_txt_box" placeholder="Post Code" required />
                        <input type="address" name="address" className="address_txt_box" placeholder="Address" required />
                        <input type="county" name="county" className="county_txt_box" placeholder="County" required/>
                        <input type="email" name="email" className="email_txt_box" placeholder="Email" required/>
                    </div>
                    <div class="formFields">
                       <select className="service_txt_box" name="service" value={_service} placeholder="Service" onChange={e=>setService(e.target.value)} required>
                             {info.all.map((x,id)=>{
                                return (<option onClick={()=>setService(x)} key={id} value={x}>{x}</option>)
                             })}   
                            </select>
                        <textarea type="text" name="detail" className="detail_txt_box" placeholder="Provide more detail about your request"></textarea>
                    </div>
                </div>
                <div class="formButtons">
                    <button className="submitBtn">SUBMIT</button>
                </div>
            </form>
            <div className="footer">
                <div className="footerInfo">
                    <div className="col">
                        <h4 class="footerTitle">CONTACT</h4>
                        <a href="mailto:EMAIL@EMAIL.COM"><h4>EMAIL@EMAIL.COM</h4></a>
                        <a href="#"><h4>000 000 000</h4></a>
                    </div>
                    <div className="col">
                        <h4 class="footerTitle">SOCIAL MEDIA</h4>
                        <a href="#"><h4>FACEBOOK</h4></a>
                        <a href="#"><h4>INSTAGRAM</h4></a>
                    </div>
                    <div class="col">
                        <h4 class="footerTitle">LEAVE A REVIEW</h4>
                        <div class="review">
                            <span class="star"></span>
                            <span class="star"></span>
                            <span class="star"></span>
                            <span class="star"></span>
                            <span class="star"></span>
                        </div>
                    </div>
                </div>

                <div className="legal">
                    <a href="#"><h5>© 2021 THORNEPLUMBING - All rights reserved</h5></a>
                    <a href="#"><h5>TERMS AND CONDIDTIONS</h5></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
