import React, { useContext, useEffect } from 'react';
import {Dropdown} from 'react-bootstrap';
import $ from "jquery";

// Import Images
import Logo from '../assets/img/logo.png';
import LogoSmall from '../assets/img/logo-small.png';
import avatar1 from '../assets/img/img-01.jpg';
import avatar2 from '../assets/img/img-01.jpg';
import avatar3 from '../assets/img/img-01.jpg';
import avatar4 from '../assets/img/img-01.jpg';
import avatar5 from '../assets/img/img-01.jpg';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGalacticRepublic } from "react-icons/fa";


import { faAlignLeft, faBell, faSearch,faBroom,faThLarge, faUserGraduate,faCircle } from '@fortawesome/fontawesome-free-solid'
import { LogoutStart } from '../../context/AuthAction';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from "react-router";
export function Header() {

    const navigate = useNavigate();
    const handlesidebar = () => {
        document.body.classList.toggle('mini-sidebar');
    }
    const {user,role,dispatch}= useContext(AuthContext);
    const logout =()=>{
        dispatch(LogoutStart())
        navigate("/signin")

    }

   
    useEffect(()=>{
        var $wrapper = $('.main-wrapper');
		
		$('body').append('<div class="sidebar-overlay"></div>');
		$(document).on('click', '#mobile_btn', function() {
			$wrapper.toggleClass('slide-nav');
			$('.sidebar-overlay').toggleClass('opened');
			$('html').addClass('menu-opened');
			return false;
		});
		
		// Sidebar overlay
		
		$(".sidebar-overlay").on("click", function () {
			$wrapper.removeClass('slide-nav');
			$(".sidebar-overlay").removeClass("opened");
			$('html').removeClass('menu-opened');
		});
    },[])
    return (
        <>
        {console.log(user)}
        {user!="" && 
             <div className="header">

             {/* Logo */}
             <div className="header-left">
                 <a href="" to="index.html" className="logo">
                 
                 <FaGalacticRepublic size={'2em'}/>
                 
                 </a>
                 <a href="" className="logo logo-small">
                 <FaGalacticRepublic size={'2em'}/>
                 </a>
             </div>
             {/* /Logo */}

             <a id="toggle_btn" onClick={handlesidebar}>
                 <FontAwesomeIcon icon={faAlignLeft} />
             </a>

             {/* Search Bar */}
             <div className="top-nav-search">
                 <form>
                     <input type="text" className="form-control" placeholder="Search here" />
                     <button className="btn" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                 </form>
             </div>
             {/* /Search Bar */}

             <a className="mobile_btn" id="mobile_btn">
                 <i className="fas fa-bars"></i>
             </a>

             <ul className="nav user-menu">

                 {/* Notifications */}
                 
                 {/* /Notifications */}

                 {/* User Menu */}
                 <li className="nav-item dropdown has-arrow">
                     <Dropdown>
                         <Dropdown.Toggle id="dropdown-basic" className="dropdown-toggle nav-link">
                         <span className="user-img"><img className="rounded-circle" src={"https://res.cloudinary.com/dtm8ojbfl/image/upload/v1653402078/avatar-17-48_exd3sd.png"} width="31" alt="Ryan Taylor" /></span>
                         </Dropdown.Toggle>

                         <Dropdown.Menu>
                             <div className="user-header">
                                 <div className="avatar avatar-sm">
                                     <img src={"https://res.cloudinary.com/dtm8ojbfl/image/upload/v1653402078/avatar-17-48_exd3sd.png"} alt="User Image" className="avatar-img rounded-circle" />
                                 </div>
                                 <div className="user-text">
                                     <h6>{user}</h6>
                                     <p className="text-muted mb-0">{role}</p>
                                 </div>
                             </div>
                             
                             <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                         </Dropdown.Menu>
                     </Dropdown>
                 </li>
                 {/* /User Menu */}
             </ul>
         </div>    }
        </>
    )
    
}