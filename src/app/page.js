"use client";
import { getDataStudents } from "@/helperFunction/getDataStudents";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // inset the data into a state :
    getDataStudents().then((resolve) => {
      setData(resolve);
    });
  }, []);

  useEffect(() => {
    // print the data in the console to cheak it before use it in the main div component :
    console.log("############### , the data is : ", data);
  }, [data]);

  // the return of the component :
  return (
    <main className=" grid grid-cols-3 space-y-4 bg-green-500  min-h-screen  p-24">
      {data.length > 0 ? (
        data.map((elem, index) => {
          return (
            <div
              key={index}
              className=" bg-yellow-300 h-10 w-200px p-3 flex justify-center items-center border border-black  "
            >
              {elem.first_name}
            </div>
          );
        })
      ) : (
        <div>is loading ....... </div>
      )}
    </main>
  );
}
