import mongoose from "mongoose";

export function dbConnection(){
try {
        mongoose.connect("mongodb+srv://aniruthasivakumar03:Mahathi03@cluster0.omsyxcc.mongodb.net/?retryWrites=true&w=majority", 
        {useNewUrlParser:true,
        useUnifiedTopology: true,} )
        console.log("Database connected Sucessfully")
    } catch (error) {
       console.log("Error connecting DB----", error) 
    }
}

