import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material'
import { useState } from 'react'

const Component = styled(Box)`
height:70vh;
width:90vh;
`

const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)center 85% no-repeat;
);
height:83%;
width:30%;
padding:45px 35px;
&>p,&>h5{
    color:#ffffff;
    font-weight:600;
}
`

const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
felx:1;
&>div, &>button,&>p{
    margin-top:20px;
}
`

const LoginButton = styled(Button)`
text-transform:none;
background:#fB641B;
color:#fff;
height:48px;
border-radius:2px;
`

const Text = styled(Typography)`
font-size:12px;
color:#878787;

`
const CreateAccount = styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer;

`

const RequestOtpButton = styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%)
`
const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders,whislist and recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: 'Get access to your Orders,whislist and recommendations'
    }
}

export const LoginDailog = ({ open, setOpen }) => {

    const signupInitialValues = {
        //storing our values
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        phone: ''

    }

    const [account, toggleAccount] = useState(accountInitialValues.login)
    const [signup, setSignup] = useState()//who will signup data will store in a varialble i.e:signupInitalValues

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);//whenever we open this dialog bod by default it will open login page

    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });//heere we have to write target in square bracket becj we are using variable as a key.
        //our value is object so here we will make sure that if someone is already signuped ,that will be not overflow.
        console.log(signup);

    }
const signupUser=()=>{

}

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            {/* PaperProps is the property in mui which set the default width */}
            <Component>
                <Box style={{ display: "flex", height: "100%" }}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 2, paddingTop: 20 }}>{account.subHeading}</Typography>

                    </Image>
                    {
                        account.view === 'login' ?
                            <Wrapper>
                                <TextField variant="standard" label="Enter Email/Mobile number"></TextField>
                                <TextField variant="standard" label="Enter Password"></TextField>
                                <Text>By continuing, you agree to Flipkart's Terms of use and Privacy policy.</Text>
                                <LoginButton>Login</LoginButton>
                                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                                <RequestOtpButton>Request OTP</RequestOtpButton>
                                <CreateAccount onClick={() => toggleSignup()}>New to Flipkart?Create an account</CreateAccount>
                            </Wrapper>

                            : //ternary opertator

                            <Wrapper>
                                {/* below we are using same function to every details ,so we are using hear one name filed which can distingute details ,which details elongs to which filed. */}
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="firstname" label="Enter Firstname "></TextField>
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label="Enter Lastname"></TextField>
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label="Enter Username"></TextField>
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label="Enter Email"></TextField>
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Enter Password"></TextField>
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label="Enter Phone"></TextField>

                                <LoginButton>Continue</LoginButton>
                            </Wrapper>
                    }

                </Box>
            </Component>
        </Dialog>
    )
}