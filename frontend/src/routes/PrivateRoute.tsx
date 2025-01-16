import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { SMe } from "../services/AppService";
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      SMe().then((res) => {
        if (res.status) {
          localStorage.setItem("CURRENT_USER", JSON.stringify(res.data));
          localStorage.setItem("IS_LOGIN", JSON.stringify(true));
          setIsAuthenticated(true);  
        } else {
          localStorage.removeItem("CURRENT_USER");
          localStorage.removeItem("ACCESS_TOKEN");
          localStorage.setItem("IS_LOGIN", JSON.stringify(false));
          setIsAuthenticated(false); 
        }
      }).catch(() => {
        setIsAuthenticated(false);
      });
    } else {
      setIsAuthenticated(false); 
    }
  }, [token]);

  if (isAuthenticated === null) {
    return <>{children}</>; 
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
