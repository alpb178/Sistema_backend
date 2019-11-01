
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "components/layout/Header";

import Empresa from "entidades_bd/empresas/ListaEmpresas";
import Estado from "entidades_bd/estados/ListaEstados";
import Organismo from "entidades_bd/organismos/ListaOrganismos";

import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";

// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/empresa",
    name: "Gestion Empresa",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Empresa,
    layout: "/admin"
  },
  {
    path: "/areas",
    name: "Gestion Area",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Estado,
    layout: "/admin"
  },
  {
    path: "/usuarios",
    name: "Gestion Usuarios",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Organismo,
    layout: "/admin"
  },

     
  {
    path: "/roles",
    name: "Gestion Roles",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },

  {
    path: "/credenciales",
    name: "Gestion Credenciales",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  
  
  {
    path: "/estados",
    name: "Gestion Estados",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Estado,
    layout: "/admin"
  },
  
  {
    path: "/organismos",
    name: "Gestion Organismos ",
    rtlName: "إخطارات",
    icon: Notifications,
    component: Organismo,
    layout: "/admin"
  },
  {
    path: "/visitantes",
    name: "Gestion Visitantes ",
    rtlName: "إخطارات",
    icon: Notifications,
    component: Organismo,
    layout: "/admin"
  },

  {
    path: "/maps",
    name: "Mapa",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/rtl-page",
    name: "Gestion Rol",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  },

 
];

export default dashboardRoutes;
