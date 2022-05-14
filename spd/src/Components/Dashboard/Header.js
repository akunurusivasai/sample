import React from "react";
import "./Header.css";

import styled from 'styled-components';
import {AiOutlineUser,AiOutlineSearch} from "react-icons/ai"
const Nav =styled.nav`
    width: 100%;
    font-size: x-large;
    height: 10rem;
    display: grid;
    border-bottom: 0.1px solid #e4e2fb;
    grid-template-columns: 10rem 0.5fr 1fr 1fr 10rem;
    box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px;
    
    
    font-family: "Jost",sans-serif;
    
    align-items: center;
}
`;
const Logo =styled.div`
display: grid;
/* background-color: #3b5998; */
grid-column: 2/3;
margin-left: 15%;
align-items: center;
`;
const Menu =styled.div`

`;
const Link =styled.a`
margin-right:40px;
`;
const User =styled.div`

`;
const H2=styled.h2`
font-size: 2.5rem;
font-weight: 400;
text-transform: uppercase;
background: -webkit-linear-gradient(#eee, rgb(69, 57, 248));
background-clip:text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

const Span=styled.span`
font-size: 3.5rem;
`;

const Navbar = () => {
  
  return (
    <>
     <Nav>
       <Logo>

         <H2>
            <Span>S</Span>tock
            &
            <Span>C</Span>rypto
         </H2>
       </Logo>
       <Menu>
         <Link>Stocks</Link>
         <Link>Crypto</Link>
         <Link>Pricing</Link>
         <Link>Support</Link>
       </Menu>
        <User>
          <Menu style={{marginLeft:"400px"}}>
            <Link><AiOutlineUser/></Link>
            <Link><AiOutlineSearch/></Link>
          </Menu>
        </User>
      
     </Nav>
     
    </>
  );
};

export default Navbar;