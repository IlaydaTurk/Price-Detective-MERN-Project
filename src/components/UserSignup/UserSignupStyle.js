import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    hideContainers: {
        display: "none",
    },
    mainContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    loginContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    sign_in_up_Container: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    },
    signinTitleButton: (props) => ({
        width: "226px",
        height: "50px",
        border: "1px solid lightgray",
        borderBottom: "none",
        cursor: "pointer",
        backgroundColor: `${props.isSigninClick ? '#fff' : 'lightgray'}`,
        /*'&:hover': {
            backgroundColor: '#fff',
        },*/
    }),
    signupTitleButton: (props) => ({
        width: "226px",
        height: "50px",
        border: "1px solid lightgray",
        borderBottom: "none",
        cursor: "pointer",
        backgroundColor: `${props.isSignupClick ? '#fff' : 'lightgray'}`,
        /*'&:hover': {
            backgroundColor: '#fff',
        },*/
    }),
    signinContainer: {
        width: "450px",
        height: "350px",
        border: "1px solid lightgray",
        borderTop: "none",
    },
    signinContent: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "50px",
    },
    inputContainer: {
        minHeight: "80px",
        width: "100%",
    },
    signinInputs: {
        width: "100%",
    },
    forgorPassContainer: {
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
    },
    signinSubmitButton: {
        width: "100%",
        height: "50px",
        marginTop: "25px",
    },
    signupContainer: {
        width: "450px",
        height: "500px",
        border: "1px solid lightgray",
        borderTop: "none",
    },

    //${({ toogle }) => (toogle ? `'col2 col1'` : `'col1 col2'`)};
}));
