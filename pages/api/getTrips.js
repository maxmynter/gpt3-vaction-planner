import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  try {
    let { db } = await connectToDatabase();

    const trips = await db
      .collection("trips")
      .find({}, { _id: 1, text: 1, title: 1, prompts: 0 })
      .limit(100)
      .toArray();

    res.json(trips);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
