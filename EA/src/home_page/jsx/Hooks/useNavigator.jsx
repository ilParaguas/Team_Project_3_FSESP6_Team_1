import { useNavigate } from "react-router-dom";

const navigate=useNavigate();
export function useNavigator(url){
    navigate(url);
}