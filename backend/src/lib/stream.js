import { StreamChat } from "stream-chat";

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