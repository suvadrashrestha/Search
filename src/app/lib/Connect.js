const { default: mongoose } = require("mongoose");
const connection={};
const connectdb =async ()=>{
    try{
        if(connection.isConnected){
            console.log("using existing connection");
        }
       const db=  await mongoose.connect(process.env.MONGO_URL);
       connection.isConnected=db.connections[0].readyState;
    }
    catch(error){
        throw new Error(error);
    }
};
export default connectdb;