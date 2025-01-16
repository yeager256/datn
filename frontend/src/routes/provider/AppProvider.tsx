import { createContext, FC, ReactNode, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin, setUser } from "../../redux/reducers/authReducer";
import { RootState } from "../../redux/reducers";
import { SMe } from "../../services/AppService";
import { IUser } from "../../interfaces/type";
interface AuthContextType {
  isLogin: boolean;
  user: IUser | null;
  logOut: () => void;
}
interface AppProviderProps {
  children: ReactNode;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const auth = useSelector((state: RootState) => state.authReducer);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isLogin = auth.isLogin;
  const user = auth.user;
  const token = localStorage.getItem("ACCESS_TOKEN") ?? "";
  useEffect(() => {
    if (token) {
      SMe().then((res) => {
        if (res.status) {
          dispatch(setUser(res.data.user));
          dispatch(setIsLogin(true));
          localStorage.setItem("CURRENT_USER", JSON.stringify(res.data.user));
          localStorage.setItem("IS_LOGIN", JSON.stringify(true));
        } else {
          dispatch(setIsLogin(false));
          dispatch(setUser(null));
          localStorage.removeItem("CURRENT_USER");
          localStorage.removeItem("ACCESS_TOKEN");
          localStorage.setItem("IS_LOGIN", JSON.stringify(false));
        }
      });
    }
  }, [token]);

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("site");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isLogin, user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AppProvider");
  }
  return context;
};
