import { connectToDatabase } from "@lib/mongodb";
import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { PostLikes } from "types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body)
  console.log(req.method)
      // switch the methods
      switch (req.method) {
        case 'GET': {
          getLikes(req, res);
          // putLikes(req, res);
        }

        case 'POST': {
            return;
        }

        case 'PUT': {
            return;
        }

        case 'DELETE': {
            return;
        }
    }
}
//eg, 
//http://localhost:3000/api/post/likes?id=61888383e0e1844eff991564

async function getLikes(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body)
  if ("id" in req.query) {
    try {
      const postId = req.query["id"] as string;
      const { db } = await connectToDatabase();
      const data: PostLikes = await db
      .collection("postLikes")
      .findOne({ _id: new ObjectId(postId) }) as PostLikes
      res.status(200).json(data);
    } catch(error) {
      console.log(error)
      res.status(400).send({ error : 'error while accessing db' })
    }

  }else{
    res.status(400).send({ error: 'bad request' })
  }
}

async function putLikes(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if ("id" in req.query) {

    try {
      const postId = req.query["id"] as string;
      const { db } = await connectToDatabase();

      // update the published status of the post
      await db.collection("postLikes").updateOne(
        {
            _id: new ObjectId("61888383e0e1844eff991564")
        },
        { $set: { likes: 1234 } }
      );

      res.status(200).json({ message: 'Success' })
    } catch(error) {
      console.log(error)
      res.status(400).send({ error : 'error while accessing db' })
    }

  }else{
    res.status(400).send({ error: 'bad request' })
  }
}
