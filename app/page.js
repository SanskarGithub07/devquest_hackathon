"use client";
import SearchBar from "./Components/SearchBar";
import dummyData from "./dummy";
import Table from "./Components/Table";
import Card from "./Components/Card";
import Search from "./Components/Search";
import Clients from "./Components/Clients";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function Home() {
  async function handleClick() {
    const res = await fetch("api/productData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      console.log("Aa gaya bhai data");
    } else {
      console.log("Nahi aaya bhai data.");
    }
  }

  return (
    <div>
      {/* <h1>Product Search</h1>
      <SearchBar />
      <Table data={dummyData} />

      <button
        onClick={handleClick}
        className="p-4 m-4 w-1/6 bg-[#000000] text-[#ffffff]"
      >
        Add
      </button> */}
      <Navbar />
      <div className="flex flex-col gap-10 justify-start bg-gray-100">
        <Search />
        <Clients />
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-jakarta-sans ml-24 p-1 font-bold text-xl text-gray-500">Popular Products</h1>
          <div className="flex flex-row justify-evenly ">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div className="flex justify-center align-middle">
          <button className="btn btn-primary p-2 font-jakarta-sans font-bold w-[150px] text-lg">
            Show more
          </button>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
