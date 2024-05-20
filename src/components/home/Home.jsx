import { Fragment } from "react";
//components
import { NavBar } from "./Navbar";
import { Banner } from "./Banner";
import { Box, styled } from "@mui/material";


const Component=styled(Box)`
padding:10px 10px;
background:#f6f6f6;
`

export const Home = () => {
    return (
   /*instead of div or box we can use react Fragment to more clearity and also fragment donot 
   create any node ,but div does.*also faster than div.also we can write empty angle bracket <> </> that will work like Fragment.
   */
    <Fragment>
        <NavBar/>
        <Component>
        <Banner/>
        </Component>
        
    </Fragment>
    )}
    