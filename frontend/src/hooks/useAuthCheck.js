import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/user/me", { withCredentials: true });
        if (res.data && res.data.user) {
          dispatch(setUser(res.data.user));
        } else {
          dispatch(setUser(null));
          navigate("/");
        }
      } catch (err) {
        dispatch(setUser(null));
        navigate("/");
      }
    }
    checkAuth();
  }, [dispatch, navigate]);
} 