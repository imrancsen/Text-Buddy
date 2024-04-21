import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn }) => {

    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }
};
export default Protected;