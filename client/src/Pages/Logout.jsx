import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../Store/Auth';

const Logout = () => {
  const { LogoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    LogoutUser();
    navigate("/login");
  }, [LogoutUser, navigate]);

  return null;
};

export default Logout;
