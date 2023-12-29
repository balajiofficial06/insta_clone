import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const navigation = [
    {
        name: "Home",
        path: "/",
        Icon: HomeIcon,
    },
    {
        name: "Messages",
        path: "/messages",
        Icon: EmailIcon,
    },
    {
        name: "Notifications",
        path: "/notifications",
        Icon: NotificationsIcon,
    },
    {
        name: "Reels",
        path: "/reels",
        Icon: OndemandVideoIcon,
    }
];

export default navigation;