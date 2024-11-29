import { useRoutes } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import { useScrollToTop } from "@/hooks";

const RoutesComponent = () => {
    useScrollToTop();
    
    return useRoutes([
        MainRoutes, 
    ]);
}

export default RoutesComponent;