import About from "../pages/About";
import Garage from "../pages/Garage";
import Home from "../pages/Home";
import Service from "../pages/Service";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean,
}

const routes: RouteType[] = [
    {
      path: "/about",
      component: About,
      name: "About",
      protected: false,
    },
    {
      path: "/garage",
      component: Garage,
      name: "Garage",
      protected: true,
    },
    {
      path: "/",
      component: Home,
      name: "Home",
      protected: false,
    },
    {
      path: "/service",
      component: Service,
      name: "Service",
      protected: true,
    }
];

export default routes