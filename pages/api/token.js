import NextAuth, { getSession } from "next-auth/react";
import jwt from "jsonwebtoken"
import { getToken } from "next-auth/jwt";
import Cookies from "js-cookie";
export default async function token(req, res) {
  const session = await getSession({ req });
   const token = await getToken({ req, secret: process.env.JWT_SECRET });
  console.log("token11", token);
  Cookies.set("hi",token)
  //  console.log("sessionauth", session);
  // if (!session) {
  //   res.status(401).json({ error: "Unauthorized" });
  //   return;
  // }

  // Here, you can access the token from the session object
//   const token = session?.token?.account?.id_token;
//   console.log("token",token)
//   if (token) {
//     decodedData = jwt.verify(token, process.env.SECRET);
//     console.log("dec",decodedData);
//     //  user = await User.findById(decodedData.id).populate("friends followers following details");
// }
  // Use the token to make API requests or perform any desired operations
  // For example, if you're using axios:
  // const response = await axios.get('https://api.example.com/data', {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // })

  res.status(200).json({ session:session });
}
