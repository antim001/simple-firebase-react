import { getAuth ,GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user,setUser]=useState(null)
    const auth=getAuth(app)
    const provider = new GoogleAuthProvider();
 const handleWithGoogle=()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      const Loguser = result.user;
      console.log(Loguser);
      setUser(Loguser);
      
    }).catch((error) => {
      console.log('error',error.message);
    });
 }
    return (
        <div>
            <button onClick={handleWithGoogle}>Google Login</button>
            {
              user && <div>
                <h2>User:{user.displayName}</h2>
                <h2>Email:{user.email}</h2>
                <img src={user.photoURL} alt="" />
              </div>

            }
        </div>
    );
};

export default Login;