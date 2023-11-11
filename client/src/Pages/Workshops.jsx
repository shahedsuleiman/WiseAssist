import React from "react";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpeg";
import work4 from "../assets/work4.jpg";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FilterList from "../Components/FilterList";
import SearchBar from "../Components/SearchBar";
import Footer1 from "../Components/Footer1";

function Workshops() {
  return (
    <>
      <Header />
      <SearchBar />
      <FilterList />
      <main class=" md:px-20 sm:px-14 px-6">
        <div class="sm:flex  h-80 items-center shadow-md mt-10">
          <div className="w-full sm:w-1/2">
            <img
              class="bg-cover h-full w-full object-cover"
              src={work1}
              alt=""
            />
          </div>
          <div class="md:px-10 sh sm:px-5">
            <h1 class="text-gray-800 font-bold text-2xl my-2">
              long established
            </h1>
            <p class="text-gray-700 mb-2 md:mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
            <div class="flex justify-between mb-2">
              <span class="font-thin text-sm">May 20th 2020</span>
              <button
                href="/"
                className="block w-full rounded bg-indigo-950 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-900 focus:outline-none focus:ring active:bg-indigo-900 sm:w-auto"
              >
                View
              </button>
            </div>
          </div>
        </div>
        <div class="sm:flex h-80 items-center shadow-md mt-10">
          <div className="w-full sm:w-1/2">
            <img
              class="bg-cover h-full w-full object-cover"
              src={work2}
              alt=""
            />
          </div>
          <div class="md:px-10 sh sm:px-5">
            <h1 class="text-gray-800 font-bold text-2xl my-2">
              long established
            </h1>
            <p class="text-gray-700 mb-2 md:mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
            <div class="flex justify-between mb-2">
              <span class="font-thin text-sm">May 20th 2020</span>
              <button
                href="/"
                className="block w-full rounded bg-indigo-950 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-900 focus:outline-none focus:ring active:bg-indigo-900 sm:w-auto"
              >
                View
              </button>
            </div>
          </div>
        </div>
        <div class="sm:flex h-80 items-center shadow-md mt-10">
          <div className="w-full sm:w-1/2">
            <img
              class="bg-cover h-full w-full object-cover"
              src={work3}
              alt=""
            />
          </div>
          <div class="md:px-10 sh sm:px-5">
            <h1 class="text-gray-800 font-bold text-2xl my-2">
              long established
            </h1>
            <p class="text-gray-700 mb-2 md:mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
            <div class="flex justify-between mb-2">
              <span class="font-thin text-sm">May 20th 2020</span>
              <button
                href="/"
                className="block w-full rounded bg-indigo-950 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-900 focus:outline-none focus:ring active:bg-indigo-900 sm:w-auto"
              >
                View
              </button>
            </div>
          </div>
        </div>
        <div class="sm:flex h-80 items-center shadow-md mt-10">
          <div className="w-full sm:w-1/2">
            <img class="bg-cover  w-full object-cover" src={work4} alt="" />
          </div>
          <div class="md:px-10 sh sm:px-5">
            <h1 class="text-gray-800 font-bold text-2xl my-2">
              long established
            </h1>
            <p class="text-gray-700 mb-2 md:mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
            <div class="flex justify-between mb-2">
              <span class="font-thin text-sm">May 20th 2020</span>
              <button
                href="/"
                className="block w-full rounded bg-indigo-950 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-900 focus:outline-none focus:ring active:bg-indigo-900 sm:w-auto"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Workshops;
