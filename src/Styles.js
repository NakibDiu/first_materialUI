import {makeStyles} from '@material-ui/styles';

const useStyle = makeStyles(() => ({
    container: {
        backgroundImage: "linear-gradient(45deg, red, orange)",
        padding: "64px 0px 48px "
    },
    icon: {
        marginRight: "20px"
    },
    button: {
        backgroundImage: "linear-gradient(45deg, blue, skyblue)",
        color: "white"
    },
    button2: {
        color: "black"
    },
    buttons: {
        marginTop: "40px"
    },
    cardGrid: {
        padding: "40px 0"
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        backgroundColor: "skyblue",
        paddingTop: "56.25%"
    },
    cardContent: {
        flexGrow: "1"
    },
    footer: {
        padding: "20px 0",
        backgroundImage: "linear-gradient(45deg, gray, lightgray)"
    }
}));

export default useStyle;