import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material';
//components
import { Search } from './Search'
import { CustomButtons } from './CustomButton';

//  here below we are using styled as a funcion in AppBar component from mui/material then storing in a variable i.e:StyledHeader.
const StyledHeader = styled(AppBar)`
 background:#2874f0;
 height:55px;
border-radius:0px;
 `
const Component = styled(Box)`
margin-left:12%;
line-height:0px;
`
const SubHeading = styled(Typography)`
font-size:10px;
font-style:italic;
`
const PlusImage = styled('img')({ //in object we always use camelcase in css property.
    width: 10,
    marginLeft: 4,
    height: 10
})
export const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (

        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
                <Component>
                    <img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box style={{ display: 'flex' }}> {/*if we are handling css thorugh object we hae to write like this*/}
                        <SubHeading>
                            Explore
                            <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="sublogo" />
                    </Box>
                </Component>
                <Search />
                <Box>
                <CustomButtons/>
                </Box>
            </Toolbar>
        </StyledHeader>

    )
}