//importing express and mongoose
import express from "express"
import mongoose from "mongoose"

//importing productsroutes,cartroutes,authroutes
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import authRoutes from "./routes/authRoutes.js";

//importing jwt
import jwt from "jsonwebtoken";

//creating a express
const app=new express();

app.use(express.json());


//creating a server at 3000 port 
app.listen(3000,()=>{
    console.log("server is running at port 3000");
})

//connecting to mongodb database using mongoose
mongoose.connect("mongodb://localhost:27017");

//db connection
const db =mongoose.connection;

//To check wheather connection is successfull or not
db.on("open",()=>
{
    console.log("connection is successfull");
})
db.on("error",()=>
{
    console.log("connection is not successfull");
})

// Routes
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

//middleware for authentiaction
export function auth(req,res,next){
    const authHeader=req.headers["authorization"];
    const token=authHeader&&authHeader.split(" ")[1];
    jwt.verify(token,"secretKey",(err,user)=>{
        if(err){
            res.status(403).json({message:"invalid id jwt token"})
        }
        req.user=user;
        next();
    })
}