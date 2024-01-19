"use client"
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState({query: ""});

  function handleSearch(e) {
    setQuery((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.replaceAll(' ', '%20')
    }));
  }

  async function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    form.reset();
    console.log(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" onChange={(e) => handleSearch(e)}/>
      <button type="submit">Search</button>
    </form>
  );
}