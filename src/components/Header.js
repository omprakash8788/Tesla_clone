import React from 'react'
import styled from 'styled-components'
//import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  return (
    <Container>
      {/* logo section  */}
      <a>
        <img src="/images/logo.svg" alt="logo" />
      </a>
      {/* menu section */}
      <Menu>
          
              <a href="#">Model S</a>
              <a href="#">Model 3</a>
              <a href="#">Model X</a>
              <a href="#">Model Y</a>
            
      </Menu>


      {/* right menu */}
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        {/* <CustomeMenu/> */}
      </RightMenu>
      <BurgerNav>
         <CustomClose/>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In </a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Roadeter</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Find Us</a></li>
      </BurgerNav>


    </Container>
  )
}

export default Header

// position fixed means our header is fix.
const  Container=styled.div`
min-height:60px;
position:fixed; 
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
top:0;
left:0;
right:0;
z-index:1;


`
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;



a {
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  flex-wrap:nowrap;
}
@media(max-width:768px){
  display:none;
}


`
const RightMenu=styled.div`
display:flex;
align-items:center;


a {
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px;
  flex-wrap:nowrap;
}
`
const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,0.2);

  a{
    font-weight:600;

  }

}

`
const CustomClose = styled.div`

`