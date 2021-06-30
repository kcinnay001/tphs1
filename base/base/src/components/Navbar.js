import React, { useState, useEffect,useRef, Fragment } from 'react'
import {
    Link,useHistory
  } from "react-router-dom";

import '../styles/Navbar.css';
import logo from '../img/Banner2.png'
import legalImg from '../img/image 2 (1).png'
import info from '../data'
const Navbar = () => {
    const history = useHistory();
    const [service, setService] = useState('');
    const [serviceExt, setServiceExt] = useState('');
    const [serviceExtTitle, setServiceExtTitle] = useState('');
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const plumbingRef = useRef()
    const heatingRef = useRef()
    const gasRef = useRef()
    const emRef = useRef()
    const enquireRef = useRef()
    
    const gas = info.gas;
    const heating = info.heating;
    const plumbing = info.plumbing;
    const emergency = info.emergency;

    useEffect(()=>{

        if(service.toLocaleLowerCase() === "gas"){
            setData(gas);
            setServiceExt('')
            setServiceExtTitle('')
        }
        if(service.toLocaleLowerCase() === "heating"){
            setData(heating);
            setServiceExt('')
            setServiceExtTitle('')
        }
        if(service.toLocaleLowerCase() === "plumbing"){
            setData(plumbing)
            setServiceExt('')
            setServiceExtTitle('')
        }
        if(service.toLocaleLowerCase() === "emergency call out"){
            setData(emergency)
            setServiceExt('')
            setServiceExtTitle('')
        }
        
    },[service,search,gas,heating,plumbing,emergency])      
    
    const openContact = (e) =>{
        history.push('/contact/'+ e);
    }

    const openSearch = (e) => {
        setSearch(e.target.value)
    }

    const openServiceExt = (e) => {
        for(let i = 0;i<info.gas.length;i++){
            if(info.gas[i].includes(e)){
                setService('GAS');
                setServiceExt(info.ext[e])
                setServiceExtTitle(e)
                setSearch('');
            }
        }
        for(let i = 0;i<info.heating.length;i++){
            if(info.heating[i].includes(e)){
                setService('heating');
                setServiceExt(info.ext[e])
                setServiceExtTitle(e)
                setSearch('');
            }
        }
        for(let i = 0;i<info.emergency.length;i++){
            if(info.emergency[i].includes(e)){
                setService('emergency call out');
                setServiceExt(info.ext[e])
                setServiceExtTitle(e)
                setSearch('');
            }
        }
        for(let i = 0;i<info.plumbing.length;i++){
            if(info.plumbing[i].includes(e)){
                setService('plumbing');
                setServiceExt(info.ext[e])
                setServiceExtTitle(e)
                setSearch('');
            }
        }
        
        
    }
    
    return (
        <>
        <div class="homePage">
            <div class="navbarContainer">
                <div className="navbar">
                    <Link to="/"><img className="logo" src={logo} /></Link>
                    <ul className="navbarItems">
                        <Link to="/"><a className="active">HOME</a></Link>
                        <Link to="/contact"><a>CONTACT</a></Link>
                    </ul>
                </div>

                <div>
                <div className="searchContainer">
                    <input type="text" id="searchText" onChange={(e)=>openSearch(e)} name="Search" placeholder="Search and enquire..." />
                </div>
                <div className="searchFilter">
                    {info.all.filter((val)=>{
                        if(search === ""){
                            return null;
                        } else if(val.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                            return val;
                        }
                    }).map((val,key)=>{
                    return (<p className="searchWord" onClick={()=>history.push('contact/'+val)} key={key}>{val}</p>)
                        
                    })}
                </div>
                </div>
                </div>

            <div className="banner">
                <div className="bannerHeader">
                    <h1>THORNE PLUMBING & HEATING SERVICES</h1>
                    <h3>PLUMBING | HEATING | GAS | SERVICES</h3>
                </div>
                <div className="bannerFooter">
                    <h4>thorneplumbingandheating@outlook.com</h4>
                    <h4>07760 434691</h4>
                </div>
            </div>

            <div className="content">
                <div class="serviceContainer">
                    <h2 class="serviceTitle">ALL SERVICES | Choose a service</h2>
                    <div className="allServices">
                        <a onClick={()=>setService(plumbingRef.current.innerText)} ref={plumbingRef} value="plumbing" className="service plumbing">
                            <h3>PLUMBING</h3>
                        </a>
                        <a className="service heating" onClick={()=>setService(heatingRef.current.innerText)} ref={heatingRef}>
                            <h3>HEATING</h3>
                        </a>
                        <a className="service gas" onClick={()=>setService(gasRef.current.innerText)} ref={gasRef}>
                            <h3>GAS</h3>
                        </a>
                        <a className="service emergency" onClick={()=>setService(emRef.current.innerText)} ref={emRef}>
                            <h3>EMERGENCY CALL OUT</h3>
                        </a>
                    </div>
                </div>
            {service !== ''?
            (
                
                <div className="serviceInfo">
                    <h1>{service}</h1>
                    <p>
                        <strong>List of services</strong>
                        <br></br>
                        click a service for more info
                    </p>

                    {data &&
                            data.map((x,id)=>{
                        
                                return(

                                <div className="services" key={id}>
                                    <div className="service">
                                        <button class="active" onClick={()=>openServiceExt(x)}>{x}</button>
                                        <a onClick={()=>openContact(x)}>Enquire</a>
                                    </div>
                                </div>

                                    )
                                }
                            )
                    }
                    {
                        serviceExt && (
                        <div className="serviceInfoExt">
                            <div className="serviceInfoHeader">
                                <h2>{serviceExtTitle}</h2>
                                <button class="closeInfo" onClick={()=>setServiceExt('')}>X</button>
                            </div>
                            <p className="serviceDesc">
                                Information about gas boiler Information about gas boiler Information about gas boiler Information about gas boiler Information about gas boiler Information about gas boiler Information about gas boiler Information about gas boiler Information about gas boiler Information about gas boiler 
                            </p>
                        </div>
                    )
                    }
                    
                </div>
            ):
            null
            }
                <div className="socialMedia">
                    <h4 class="socialMediaDesc">FULL GALLARY OF COMPLETED JOB IMAGES AND MORE AVAILABLE ON OUR SOCIAL MEDIA PAGES</h4>

                    <h4 class="socialTitle">SOCIAL MEDIA PAGES</h4>
                    <div class="socials">
                        <div className="social">
                            <div class="socialImg instagram"></div>
                            <h5>thornplumbingservices</h5>
                        </div>
                        <div className="social">
                            <div class="socialImg facebook"></div>
                            <h5>thornplumbingservices</h5>
                        </div>
                    </div>
                </div>

                <div className="law">
                    <h4>By law all gas engineers must be on the Gas Safe Register to work safely and legally on gas appliances.</h4>
                    <img src={legalImg} />
                </div>
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
        </div>
        </>
    )
}

export default Navbar
