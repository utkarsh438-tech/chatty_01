import  {generateStreamToken} from "../lib/stream.js"

export async function getStreamToken(req,res){
    try{
        const token=generateStreamToken(req.user.id);
        req.status(200).json({token});

    }
    catch(error){
        console.log("Error in getting getStreamToken controller:",error.message);
        req.status(500).json({message:"Internal Server Error"});
    }
}