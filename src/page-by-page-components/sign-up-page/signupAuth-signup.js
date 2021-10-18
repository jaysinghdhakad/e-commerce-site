import {useState} from "react"
import "./signup-auth.css"
import {useNavigate} from "react-router-dom";
import {useData} from "../../contexts/userData-context"
import {useLogin} from "../../contexts/login.context"
export default function SignupArea(){
    const Navigate = useNavigate();
    const {setUserLogin} = useLogin();
    const {userData, setUserData} = useData();
    const [userName,setUserName] = useState("");
    const [userPassword,setUserPassword] =useState("");
    const [match,setMatch] = useState(false)
    function getUserName(e){
     setUserName(e.target.value);
    }
    function getUserPassword(e){
        setUserPassword(e.target.value);
    }
    function checkUserPassword(e){
        if(userPassword===e.target.value){
            setMatch(true);
        }
        else{
            setMatch(false);
        }
    }
    function setdata(){
        console.log("this is working")
        if(match){
            setUserData([...userData,{name:userName,password:userPassword}])
            setUserLogin(true);
            console.log("done");
            Navigate("/")
        }
        
    }
    return (
        <div className="signup-area">
        <label for="name">Name</label>
        <input name="name" onChange={(e)=>getUserName(e)}/>
        <label for="email">E-mail</label>
        <input name="email"/>
        <label for="password">Password</label>
        <input name="password" onChange={(e)=>getUserPassword(e)}/>
        <label for="checkPassword">Retype-pasword</label>
        <input class="check" type="password" name="checkPassword" onChange={(e)=>checkUserPassword(e)}/>
        {match? <div>Password matches</div>:null}
        <button onClick={()=>setdata()}>sign-up</button>
       </div>
    )
}