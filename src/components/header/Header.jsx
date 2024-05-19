 import {AppBar,Box,Toolbar,Typography,styled} from '@mui/material';

//  here below we are using styled as a funcion in AppBar component from mui/material then storing in a variable i.e:StyledHeader.
const StyledHeader=styled(AppBar)`
 background:#2874f0;
 height:55px;
border-radius:0px;
 `
const component=styled(Box)`
margin-left:12px;
line-height:0;
`
const SubHeading=styled(Typography)`
font-size:10px;
font-style:italic;
`
 export const Header=()=>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return(
      
          <StyledHeader>
            <Toolbar>
                <Box>
                    <img src={logoURL} alt="logo"/>
                </Box>

            </Toolbar>
          </StyledHeader>
       
    )
 }