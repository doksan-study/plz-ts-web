import {
    Box, Button,
    Card, CardActions,
    CardContent,
    FormGroup,
    Grid, InputAdornment,
    styled,
    TextField,
    Typography,
} from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import Logo from "@/component/common/logo";
import {useMutation} from "@tanstack/react-query";
import {loginReq} from "@/app/api/user";
import {User, UserLoginResponseFail, UserLoginResponseSuccess} from "@/model/user";
import {AxiosError} from "axios";
import {LoadingButton} from "@mui/lab";
import {cookieList} from "@/constant/localize";
import {useCookies} from "react-cookie";

export default function Login() {
    const [cookies, setCookie] = useCookies();
    const navigate = useNavigate();

    useEffect(() => {
        if (!!cookies[cookieList[0]]) navigate('/');
    }, [cookies])

    const [formData, setFormData] = useState<User>({
        email: "",
        password: ""
    })
    const onChangeFormData = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const {mutate, isLoading} = useMutation(loginReq);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        mutate(formData, {
            onSuccess: (data: UserLoginResponseSuccess) => {
                // console.log(data)
                const {data: token} = data;
                setCookie(cookieList[0], token, {
                    path: "/",
                    secure: true,
                    /*
                     * TODO (1)
                     *  Cookie Expire Set
                     * */
                })
                window.location.reload();
            },
            onError: (error) => {
                console.log(error)
                const {response} = error as unknown as AxiosError;
                if (response) {
                    const status = response.status;
                    const data = response.data as UserLoginResponseFail;
                    console.log('res :::', response)
                    console.log('status :::', status)
                    console.log('message :::', data.message)
                    alert(data.message)
                }
            },
        })
    }

    return (
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <LoginWrap>
                    <LoginForm
                        onSubmit={onSubmit}>
                        <LoginBox>
                            <CardContent>
                                <Logo/>
                                <LoginFormGroup>
                                    <TextField
                                        required
                                        fullWidth
                                        variant="standard"
                                        type="email"
                                        label="E-mail"
                                        name="email"
                                        placeholder="sample@yourEmail.com"
                                        onChange={onChangeFormData}
                                        disabled={isLoading}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle/>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <TextField
                                        required
                                        fullWidth
                                        variant="standard"
                                        type="password"
                                        label="Password"
                                        name="password"
                                        placeholder="**********"
                                        onChange={onChangeFormData}
                                        disabled={isLoading}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LockSharpIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </LoginFormGroup>
                            </CardContent>
                            <LoginAction>
                                <LoadingButton loading={isLoading} fullWidth variant="contained"
                                               type="submit">로그인</LoadingButton>
                                <LoginActionUtil>
                                    <Typography variant="h5" color="danger">아직 회원이 아니시라면</Typography>
                                    <Button variant="contained" color="secondary" fullWidth>회원가입</Button>
                                    <Button component={NavLink} to="/" variant="outlined" fullWidth>취소</Button>
                                </LoginActionUtil>
                            </LoginAction>
                        </LoginBox>
                    </LoginForm>
                </LoginWrap>
            </Grid>
        </Grid>
    )
}

const LoginWrap = styled(Card)({
    width: '100%',
    maxWidth: '540px',
    margin: '0 auto',
    position: 'fixed',
    top: "50%",
    left: "50%",
    transformOrigin: "0",
    transform: "translate(-50%,-50%)",

    "@media(max-width:540px)": {
        position: "static",
        transform: "translate(0,0)",
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100vh",
    }
});

const LoginForm = styled("form")({
    width: "100%"
})

const LoginBox = styled(Box)({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
});

const LoginFormGroup = styled(FormGroup)({
    marginTop: "4rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
});

const LoginAction = styled(CardActions)({
    flexDirection: "column",
    gap: "3rem",
    marginTop: "3rem"
});

const LoginActionUtil = styled(Box)({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: '.625rem',
    width: '100%'
});
