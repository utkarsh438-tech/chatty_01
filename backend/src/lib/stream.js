import { StreamChat } from "stream-chat";
<<<<<<< HEAD
import "dotenv/config";
const apiKey = process.env.STEAM_API_KEY;
const apiSecret = process.env.STEAM_API_SECRET;

// if (!apiKey || !apiSecret) {
//   console.error("Stream API key or Secret is missing");
// }
 if(!apiKey){
    console.error("Stream API key is missing");
}
 if(!apiSecret){
    console.error("Stream API Secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};

export const generateStreamToken = (userId) => {
  try {
    // ensure userId is a string
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};
=======

const serverClient = StreamChat.getInstance(
  process.env.STREAM_API_KEY,
  process.env.STREAM_API_SECRET
);

export async function upsertStreamUser({ id, name, image }) {
  try {
    await serverClient.upsertUser({
      id,
      name,
      image,
    });
  } catch (error) {
    console.error("Error upserting Stream user:", error);
    throw error;
  }
} 
>>>>>>> 7e38e2c6ce0315ab7f20bc64695371261ff2db55
