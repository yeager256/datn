import { RouteType } from "../interfaces/type";
import AppLayout from "../layouts/AppLayout";
import Error from "../pages/Error";
import HomePage from "../pages/HomePage";


export const routesConfig: RouteType[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
     
    ],
  },
 
  {
    path: "*",
    element: <Error />,
  },
];
