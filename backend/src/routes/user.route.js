import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
<<<<<<< HEAD
import {
    acceptFriendRequest,
    getFriendRequests,
    getMyFriends,
    getOutgoingFriendReqs,
    getRecommendedUsers,
    sendFriendRequest,
  } from "../controllers/user.controller.js";
  

  const router = express.Router();

  // apply auth middleware to all routes
  router.use(protectRoute);
  
  router.get("/", getRecommendedUsers);
  router.get("/friends", getMyFriends);
  
  router.post("/friend-request/:id", sendFriendRequest);
  router.put("/friend-request/:id/accept", acceptFriendRequest);
  
  router.get("/friend-requests", getFriendRequests);
  router.get("/outgoing-friend-requests", getOutgoingFriendReqs);
  export default router;
=======
import { getRecommendedUsers, getMyFriends } from "../controllers/user.controller.js";

const router = express.Router();

 router.use(protectRoute);
 router.get("/recommended", getRecommendedUsers);
 router.get("/friends", getMyFriends);

export default router;
>>>>>>> 7e38e2c6ce0315ab7f20bc64695371261ff2db55
