// import { Email, Facebook, Instagram, Twitter } from "@material-ui/icons";

import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = (props) => {
  const { data: session } = useSession();
  const [sessions, setSession] = useState(null);
  // const{user} = useSelector(e=>e.user)
  console.log("session", sessions);

  
  async function handleGoogleSignin() {
    await signIn("google");
  }

  const [data, setdata] = useState(props.data);
  // const [password, setPassword] = useState("");
  // useEffect(() => {
  //   const hi = async () => {
  //       try {
  //         const { data } = await axios.get(
  //           `${process.env.NEXT_PUBLIC_SERVER_URL}/user/profile`,
  //           {
  //             withCredentials: true, // Include cookies in the request
  //           }
  //         );
  //         setdata(data);
  //         console.log(data);
          
  //       } catch (error) {
  //         console.log(error);
  //         // window.alert("error", error.message);
  //       }
  //   }
  //   hi();

  // },[])

  return (
    <div className="btn-login-main">
      <div className="container">
        <div className="btn-login-div">
          <p>{data?._id}</p>
          <p>{data?.username}</p>
          <p>{data?.email}</p>
          <p>{data?.role}</p>
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
          
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie;
  // console.log("cookies",cookies)
   const res = await axios.get(`${process.env.SERVER_URL}/user/profile`, {
     headers: {
       Cookie: cookies,
     },
   });
  const data = await res.data;
  return {
    props: {
      data
    }
  }
}
export default Login;
