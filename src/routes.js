import Dashboard from "views/Dashboard.jsx";
import TableList from "views/TableList.jsx";
import UserProfile from "views/UserProfile.jsx";
import Typography from "views/Typography";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/collectors",
    name: "Collectors",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/data",
    name: "Data",
    rtlName: "خرائط",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/profile",
    name: "My Profile",
    rtlName: "خرائط",
    icon: "tim-icons icon-user-run",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/home",
    name: "Home",
    rtlName: "خرائط",
    icon: "tim-icons icon-user-run",
    component: Typography,
    layout: "/public"
  },
    {
      path: "/admin",
      name: "Admin",
      rtlName: "خرائط",
      icon: "tim-icons icon-chart-pie-36",
      component: Typography,
      layout: "/public"
    }
];
export default routes;
