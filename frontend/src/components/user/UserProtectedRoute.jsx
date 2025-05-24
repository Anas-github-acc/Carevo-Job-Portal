import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";

const UserProtectedRoute = ({children}) => {
    useAuthCheck();
    const {user} = useSelector(store=>store.auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user === null){
            navigate("/");
        }
    },[user, navigate]);

    return (
        <>
        {children}
        </>
    )
};

export default UserProtectedRoute; 