import { queryDeployTest } from "@/connectDB/queryDeployTest";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    if (req.method === "GET") {
      const students = await queryDeployTest({
        query: "select * from students  ",
        values: [],
      });

      return NextResponse.json({
        students: students,
      }); // return in the response a json with value of posts;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
