import {useLogin} from "../contexts/login.context"
import {Route} from "react-router-dom"
export default function ToggleRoute({...props}){
    const {userLogin} = useLogin()

    return !userLogin? <Route {...props}/>: null;
}