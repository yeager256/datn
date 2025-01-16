import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { RouteType } from "../interfaces/type";
import { toast } from "react-toastify";

const Middleware = ({ middleware, children }: RouteType) => {
  const { isLogin, user } = useSelector(
    (state: RootState) => state.authReducer
  );
  const { cart } = useSelector((state: RootState) => state.appReducer);

  const location = useLocation();

  if (!middleware || middleware.length == 0) return <>{children}</>;

  // kiểm tra đăng nhập
  if (middleware.includes("auth") && !isLogin)
    return <Navigate to={"/login?redirect=" + location.pathname} />;

  // kiểm tra là cửa hàng
  if (middleware.includes("seller") && isLogin) {
    if (!user || !user.roles || !user.roles.includes("Seller"))
      return <Navigate to="/shop/welcome" />;
    if (
      location.pathname == "/shop/welcome" ||
      location.pathname == "/shop/settings"
    )
      return <Navigate to="/shop/dashboard" />;
  }
  if (middleware.includes("notseller") && user.roles.includes("Seller"))
    return <Navigate to="/shop/dashboard" />;
  if (middleware.includes("hascart") && cart.length == 0 && cart.filter(c=>c.is_checked ==true).length ==0) {
    toast.error("Vui lòng chọn sản phẩm!");
    return <Navigate to="/cart" />;
  }
  return <>{children}</>;
};

export default Middleware;
