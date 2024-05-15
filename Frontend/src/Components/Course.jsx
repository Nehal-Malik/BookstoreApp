import React from "react";
import List from "../../public/List.json";
import Cards from "./Cards";
import {Link} from "react-router-dom"

function Course() {
  console.log(List);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 it items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here:)</span>
          </h1>

          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi
            debitis, sed, sit temporibus nobis voluptatibus alias asperiores
            reprehenderit facere repudiandae quibusdam ipsum repellat pariatur
            illo exercitationem amet! Maxime, sit?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fugiat, accusamus harum tempore atque
            sapiente, ipsam, quia quasi magni repudiandae quos qui facilis. Odit
            unde iste repudiandae minima recusandae suscipit illo!Lorem
          </p>
         <Link to="/">
         <button className="mt-6 bg-pink-500 text-white hover:bg-pink-700 duration-300 px-4 py-2 rounded-md">
            Back
          </button>
         </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4" >
          {List.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
