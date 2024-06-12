/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import { IoIosArrowDown } from 'react-icons/io';
import { FiArrowRight } from "react-icons/fi";
import { HiOutlineSearch, HiOutlineHeart, HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi";
// import { HiOutlineBars3 } from "react-icons/hi2";
import "./Navbar.css";
const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "Groceries",
      icon: <InfoIcon />,
    },
    {
      text: "Pages",
      icon: <CommentRoundedIcon />,
    },
  ];
  return (
    <nav style={{zIndex:"1001"}}>
      <div className="nav-logo-container" style={{transform:"translateX(-15em)"}}>
      <p className="title"><span>GO</span> FOOD</p>
      </div>
      <div className="dropdownwala">
      <div className="navbar-links-container" style={{marginLeft:"1em"}}>

      <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>{selectedOption || 'Home'}</span>
        <IoIosArrowDown className={`dropdown-icon ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
        </div>
      )}
    </div>
      <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>{selectedOption || 'Groceries'}</span>
        <IoIosArrowDown className={`dropdown-icon ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
        </div>
      )}
    </div>
      <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>{selectedOption || 'Pages'}</span>
        <IoIosArrowDown className={`dropdown-icon ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
        </div>
      )}
    </div>
</div>

       <div className="connectwithus">
       <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>{selectedOption || 'Connect with us' }<FiArrowRight /></span>
        {/* <IoIosArrowDown className={`dropdown-icon ${isOpen ? 'open' : ''}`} /> */}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
        </div>
      )}
    </div>
       <div className="connectwithus">
       <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>{selectedOption}</span>
        {/* <IoIosArrowDown className={`dropdown-icon ${isOpen ? 'open' : ''}`} /> */}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
        </div>
      )}
    </div>
</div>
       <div className="connectwithus">
       <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>{selectedOption}</span>
        {/* <IoIosArrowDown className={`dropdown-icon ${isOpen ? 'open' : ''}`} /> */}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
        </div>
      )}
    </div>
</div>
       <div className="connectwithus">
       <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>{selectedOption}</span>
        {/* <IoIosArrowDown className={`dropdown-icon ${isOpen ? 'open' : ''}`} /> */}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
        </div>
      )}
    </div>
</div>
    
        <div className="icon-container">
        <div className="icon-wrapper">
            <HiOutlineSearch className="navbar-icon search" />
          </div>
          <div className="icon-wrapper">
            <HiOutlineUser className="navbar-icon user" />
          </div>
          <div className="icon-wrapper">
          <div className="notification">2</div>
            <HiOutlineHeart className="navbar-icon heart jugaad" />
          </div>         
          
          <div className="icon-wrapper">
             <div className="notification">0</div>
            <HiOutlineShoppingBag className="navbar-icon bag jugaad" />
          </div>
        </div>
        </div>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
