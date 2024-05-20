import { Box , styled} from "@mui/material"
// import { Component } from "react";
import {navData} from '../../constants/data';

const Component=styled(Box)


export const NavBar=()=>{
    return(
        <Component>
            {
                navData.map(data=>(
                    <Box>
                        <img src={data.url} alt="nav"/>
                        <p>{data.text}</p>
                    </Box>
                ))
            }
        </Component>
    )
}