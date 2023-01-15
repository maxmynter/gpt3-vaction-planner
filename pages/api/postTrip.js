import { connectToDatabase } from "../../lib/mongodb";

const insertTrip = async (request, response) => {
  try {
    let { db } = await connectToDatabase();

    const postResponse = await db.collection("trips").insertOne(request.body);

    response
      .status(200)
      .json({ _id: postResponse.insertedId, ...request.body });
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};

export default insertTrip;
