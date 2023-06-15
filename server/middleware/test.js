const axios=require("axios")



module.exports.test =async (req,res,next) => {
 try {
  //  const token=  await axios.get(`${process.env.CLIENT_URL}/api/token`)
  //    console.log("token Returned",token)
   axios
     .get(`${process.env.CLIENT_URL}/util/auth`)
     .then((response) => {
       console.log(response.data);
     })
     .catch((error) => {
       console.error(error);
     });

 } catch (error) {
    console.log("err",error)
 }
}

