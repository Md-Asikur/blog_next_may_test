// import { Email, Facebook, Instagram, Twitter } from "@material-ui/icons";

import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios"
import Cookies from "js-cookie";
import jwt from "jsonwebtoken"

const Login =(props) => {
  const route=useRouter()
  const { data: session } = useSession();
   const [sessions, setSession] = useState(null);
  // const{user} = useSelector(e=>e.user)
  console.log("session", sessions);
 
  
  
  
  // },[])
  // useEffect(() => {
  //   async function fetchSession() {
  //     const session = await getSession({ cookie: { name: "session-token" } });
  //     setSession(session);
  //   }
  //   fetchSession();
  // }, []);
  useEffect(() => {
    const x = async () => {
      const { data } =await axios.get("/api/token");
      setSession(data);
    }
    x();
  },[])
  async function handleGoogleSignin() {
    const res = await signIn("google");
    console.log(res)
  }
  async function handleauth0Signin() {
    const res = await signIn("auth0");
    console.log(res);
  }

  const [name, setName] = useState("")
  const [password, setPassword] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/login`,
        {
          username: name,
          password,
        },
        {
          withCredentials: true, // Include cookies in the request
        }
      );
      // Cookies.set("token",data.token)
      route.push("/profile")
      window.alert("Success")
      console.log(data);
    } catch (error) {
      console.log(error);
      window.alert("error",error.message)
    }
  }

  return (
    <div className="btn-login-main">
      <div className="container">
        <div className="btn-login-div">
          <p>{session?.user?.id}</p>
          <p>{session?.user?.name}</p>
          <p>{session?.user?.email}</p>
          <p>{session?.user?.emailVerified}</p>
          {session?.user?.avatar && (
            <img
              src={session?.user?.avatar}
              style={{ height: "100px", width: "100px" }}
            />
          )}
          <h3 style={{ padding: "10px 0px" }}>Or</h3>
          <button className="btn-login google" onClick={handleGoogleSignin}>
            <Image
              src={"/google2.png"}
              alt="google"
              height={25}
              width={25}
              style={{ animation: "none", margin: "0px 8px 0px 0px" }}
            ></Image>
            With Google
          </button>
          <button className="btn-login google" onClick={handleauth0Signin}>
            <Image
              src={"/google2.png"}
              alt="google"
              height={25}
              width={25}
              style={{ animation: "none", margin: "0px 8px 0px 0px" }}
            ></Image>
            With auth0Login
          </button>
          <button type="" onClick={()=>signOut()}>Logout</button>
          <form onSubmit={submit}>
            <label for="">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name here"
            />
            <label for="">Email</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="email enter "
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login