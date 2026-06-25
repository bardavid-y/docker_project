const mongoose = require("mongoose");
async function connectDB(){
    try{
     await  mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gxzgvey.mongodb.net/${process.env.BD_NAME}`);
     //await  mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gxzgvey.mongodb.net/${process.env.BD_NAME}`);
      console.log("💥 Mongo DB connect successfully 💥");
        
    }
    catch(erorr){
        console.error("Data DB connction failed 😢");
        

    }
    
}
module.exports = connectDB; //הפונקציה הזו זמינה לקבצים אחרים