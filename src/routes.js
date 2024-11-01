// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Orders from "views/Dashboard/Orders.js";
import Shipping from "views/Dashboard/Shipping.js";
import RTLPage from "views/RTL/RTLPage.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import SignOut from "views/Pages/SignOut.js";
import NewOrder from "views/Dashboard/New_Order.js";
import EditOrder from "views/Dashboard/Edit_Order.js";
import ProhibitedItems from "views/Dashboard/Prohibited_items.js";
import TermsConditions from "views/Dashboard/Terms_Conditions.js";
import Guidance from "views/Dashboard/Guidance";
import ShippingRate from "views/Dashboard/Shipping_rate.js";
import ViewOrder from "views/Dashboard/View_Order.js";
import TrackingOrder from "views/Pages/Tracking_Order.js";


// Admin Pages
import ADashboard from "views/Admin/Dashboard.js";
import AOrders from "views/Admin/Orders.js";
import AShipping from "views/Admin/Shipping.js";
import AProfile from "views/Admin/Profile.js";
import ANewOrder from "views/Admin/New_Order.js";
import AEditOrder from "views/Admin/Edit_Order.js";
import Customers from "views/Admin/Customers.js";
import Users from "views/Admin/Users.js";
import NewCustomer from "views/Admin/New_Customer.js";
import AEditCustomer from "views/Admin/Edit_Customer.js";
import AViewOrder from "views/Admin/View_Order.js";
import AEditUser from "views/Admin/Edit_User.js";
import ANewUser from "views/Admin/New_User.js";

let users = localStorage.getItem("user");
var val,val1=false;
if(users){
users = JSON.parse(users);
let user=users.data; 
val=(user.user_type == 'Admin') ? true : false;
val1=(user.user_type == 'Admin') ? false : true;
}
import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Orders,
    layout: "/admin",
  },
  {
    path: "/shipping",
    name: "Shipping",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Shipping,
    layout: "/admin",
  },
  {
    path: "/prohibited-items/",
    name: "Prohibited Items",
    rtlName: "لوحة القيادة",
    icon: <RocketIcon color="inherit" />,
    component: ProhibitedItems,
    layout: "/admin",

  },
  {
    path: "/terms-and-conditions/",
    name: "Terms & Conditions",
    rtlName: "لوحة القيادة",
    icon: <RocketIcon color="inherit" />,
    component: TermsConditions,
    layout: "/admin",
  },
  {
    path: "/guidance/",
    name: "Guidance",
    rtlName: "لوحة القيادة",
    icon: <RocketIcon color="inherit" />,
    component: Guidance,
    layout: "/admin",
  },
  {
    path: "/shipping-rate/",
    name: "Shipping Rate",
    rtlName: "لوحة القيادة",
    icon: <RocketIcon color="inherit" />,
    component: ShippingRate,
    layout: "/admin",
  },
 
  // {
  //   path: "/rtl-support-page",
  //   name: "RTL",
  //   rtlName: "آرتيإل",
  //   icon: <SupportIcon color="inherit" />,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
        hide:val
      },
     
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
        hide: true
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
        hide: true
      },
      {
        path: "/signout",
        name: "Logout",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        component: SignOut,
        layout: "/auth",
      },
      {
        path: "/neworder",
        name: "New Order",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        component: NewOrder,
        layout: "/admin",
        hide: true
      },
      {
        path: "/editorder/:id",
        name: "Edit Order",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        component: EditOrder,
        layout: "/admin",
        hide: true
      },
      {
        path: "/vieworder/:id",
        name: "View Order",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        component: ViewOrder,
        layout: "/admin",
        hide: true
      },
      {
        path: "/trackingorder/",
        name: "Tracking Order",
        rtlName: "لوحة القيادة",
        secondaryNavbar: true,
        component: TrackingOrder,
        layout: "/auth",
        hide: true
      },
     
    ],
  },
];

var AdmindashRoutes = [
   {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: ADashboard,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: AOrders,
    layout: "/admin",
  },
  {
    path: "/customers",
    name: "Customers",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Customers,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Users,
    layout: "/admin",
  },
  {
    path: "/shipping",
    name: "Shipping",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: AShipping,
    layout: "/admin",
  },
  // {
  //   path: "/rtl-support-page",
  //   name: "RTL",
  //   rtlName: "آرتيإل",
  //   icon: <SupportIcon color="inherit" />,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: AProfile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
        hide: true
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
        hide: true
      },
      {
        path: "/signout",
        name: "Logout",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        component: SignOut,
        layout: "/auth",
      },
      {
        path: "/neworder",
        name: "New Order",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        component: ANewOrder,
        layout: "/admin",
        hide: true
      },
      {
        path: "/newcustomer",
        name: "New Customer",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        component: NewCustomer,
        layout: "/admin",
        hide: true
      },
      {
        path: "/editorder/:id",
        name: "Edit Order",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        component: AEditOrder,
        layout: "/admin",
        hide: true
      },
      {
        path: "/editcustomer/:id",
        name: "Edit Customer",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        component: AEditCustomer,
        layout: "/admin",
        hide: true
      },
      {
        path: "/vieworder/:id",
        name: "View Order",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        component: AViewOrder,
        layout: "/admin",
        hide: true
      },
      {
        path: "/edituser/:id",
        name: "Edit User",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        component: AEditUser,
        layout: "/admin",
        hide: true
      },
      {
        path: "/newuser",
        name: "New User",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        component: ANewUser,
        layout: "/admin",
        hide: true
      },
      {
        path: "/vieworderlist/:id",
        name: "View Order List",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        component: AOrders,
        layout: "/admin",
        hide: true
      }
    ],
  },
];

export default (val == true) ? AdmindashRoutes : dashRoutes;
