const mongoose=require("mongoose")

module.exports.db = async() => {
 try {
     await mongoose.connect(
       "mongodb+srv://Asikur:12345@cluster0.txiokqr.mongodb.net/blog_next_2023may",
       {
         useUnifiedTopology: true,
         useNewUrlParser: true,
       }
     );
    console.log("Mongodb Connected")
 } catch (error) {
    console.log("Mongodb Not Connected",error)
 }
}

