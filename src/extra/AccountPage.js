import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const isLoggedIn = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) setTimeout(() => navigate("/"), 2000);
  }, [isLoggedIn, navigate]);

  return <></>;
};
export default AccountPage;
