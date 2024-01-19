"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [info, setInfo] = useState({email: "", password: "" });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  function handleInput(e){
    setInfo((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }));
  }

  async function handleSubmit(e){
    e.preventDefault();
    if(!info.email || !info.password){
      setError("Must provide all the credentials.") 
    }

    try{
      setPending(true);
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });

      if(res.ok){
        setPending(false);
        const form = e.target;
        form.reset();
        router.push("/loginPage");
        console.log("user registered");
      }
      else{
        const errorData = await res.json();
        setError(errorData.message);
        setPending(false);
      }
    }
    catch(error){
      setPending(false);
      setError("Something went wrong.");
    }

  }

  console.log({info});

  return (
    <div className="bg-[#2D2424] h-screen w-1/2 flex flex-col justify-center">
      <h1 className="text-[#B85C38] text-6xl text-center p-4 font-dancing-script">
        Create an Account
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-md mx-auto justify-center p-4">
        <div className="flex flex-col w-3/4 p-4 m-auto mb-0 mt-0">
          <label className="text-lg text-[#E0C097]">Email</label>
          <input type="email" name="email" className="p-2 rounded-lg" onChange={(e) => handleInput(e)} />
        </div>

        <div className="flex flex-col w-3/4 p-4 m-auto mb-0 mt-0">
          <label className="text-lg text-[#E0C097]">Password</label>
          <input type="password" name="password" className="p-2 rounded-lg" onChange={(e) => handleInput(e)} />
        </div>

        {error && <span className="message bg-[#B85C38] text-[#E0C097] p-4">{error}</span>}
        <button className="w-1/2 p-4 m-auto rounded-lg bg-[#5C3D2E] text-[#E0C097] hover:bg-[#B85C38]" disabled={pending ? true : false}>
            {pending ? "Registering" : "Register"}
        </button>

        <h1 className="text-[#E0C097] text-center mt-4">Already have an account ? <span className="text-[#B85C38] font-bold mx-1"><Link href="/loginPage">Login</Link></span></h1>
      </form>
    </div>
  );
};

export default Register;
