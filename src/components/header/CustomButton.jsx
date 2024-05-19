import { Box,Button, Typography, styled} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Wrapper=styled(Box)`
display:'flex';
margin:0 3% 0 auto;
`

export const CustomButtons=()=>{
    return(
        <Wrapper>
           <Button variant='contained'>Login</Button>

           <Typography>Become a Seller</Typography>
           <Typography>More</Typography>
           
           <Box>
            <ShoppingCartIcon/>
            <Typography>Cart</Typography>
           </Box>
        </Wrapper>
    )
}