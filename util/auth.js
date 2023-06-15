

const { getSession } =require("next-auth/react");
const User =require("./userModel");
import { getToken } from "next-auth/jwt";
module.exports.isAuthenticatedUser = async (req, res) => {
  let user;

  const session = await getSession({ req });
    // const token = await getToken({ req })
    // console.log("token",token)
  if (session) {
    user = await User.findById(session.user.id)
  }

  return user;
};
