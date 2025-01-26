import { RouteType } from "../interfaces/type";
import AppLayout from "../layouts/AppLayout";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import CollectionPage from "../pages/CollectionPage";
import ContactPage from "../pages/ContactPage";
import DetailPage from "../pages/DetailPage";
import Error from "../pages/Error";
import HomePage from "../pages/HomePage";
import PostDetail from "../pages/PostDetail";
import PostPage from "../pages/PostPage";


export const routesConfig: RouteType[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/collection", element: <CollectionPage /> },
      { path: "/detail", element: <DetailPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/post", element: <PostPage /> },
      { path: "/post-detail", element: <PostDetail /> },
      { path: "/contact", element: <ContactPage /> },
     
    ],
  },
 
  {
    path: "*",
    element: <Error />,
  },
];
