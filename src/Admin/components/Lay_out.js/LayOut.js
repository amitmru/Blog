import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

function Lay_out({ children }) {

    let [toggle, setToogle] = useState(true);

    const handleToggleSwitch = () => {
        setToogle(!toggle)
    }

    return (
        <div>
            <nav className={toggle ? 'sidebar' : 'close'}>
                <div className="logo-name">
                    <div className="logo-image">
                        <img src="assets/Images/logo.png" alt />
                    </div>
                    <span className="logo_name">CodingLab</span>
                </div>
                <div className="menu-items">
                    <ul className="nav-links">
                        <li><NavLink to="/dahsboard">
                            <i className="uil uil-estate" />
                            <span className="link-name">Dahsboard</span>
                        </NavLink></li>
                        <li><NavLink to="/Content">
                            <i className="uil uil-files-landscapes" />
                            <span className="link-name">Content</span>
                        </NavLink></li>
                        <li><NavLink to="#">
                            <i className="uil uil-chart" />
                            <span className="link-name">Analytics</span>
                        </NavLink></li>
                        <li><NavLink to="#">
                            <i className="uil uil-thumbs-up" />
                            <span className="link-name">Like</span>
                        </NavLink></li>
                        <li><NavLink to="#">
                            <i className="uil uil-comments" />
                            <span className="link-name">Comment</span>
                        </NavLink></li>
                        <li><NavLink to="#">
                            <i className="uil uil-share" />
                            <span className="link-name">Share</span>
                        </NavLink></li>
                    </ul>
                    <ul className="logout-mode">
                        <li><a href="#">
                            <i className="uil uil-signout" />
                            <span className="link-name">Logout</span>
                        </a></li>
                        <li className="mode">
                            <a href="#">
                                <i className="uil uil-moon" />
                                <span className="link-name">Dark Mode</span>
                            </a>
                            <div className="mode-toggle">
                                <span className="switch" />
                            </div>
                        </li>
                    </ul>
                </div>
            </nav >
            <section className="dashboard">
                <div className="top">
                    <i className="uil uil-bars sidebar-toggle" onClick={() => handleToggleSwitch()}/>
                    <div className="search-box">
                        <i className="uil uil-search" />
                        <input type="text" placeholder="Search here..." />
                    </div>
                    <img src="assets/Images/profile.jpg" alt />
                </div>
            </section>

        </div >

    );
}

export default Lay_out;