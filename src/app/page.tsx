"use client"
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({ name: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Access form data
    const { name } = formData;

    // Store data in local storage (if supported)
    if (typeof window !== 'undefined') {
      localStorage.setItem('name', name);
    }

    // Handle form submission completion (optional)
    console.log('Form submitted!');
    //setFormData({ name: '' }); // Clear form after submission (optional)

  };

  return (
    <main className="h-screen self-start flex flex-col items-center justify-center">
      <h1 className='p-10 text-5xl justify-center items-center'>Welcome to the Escape Room</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center align-center">
        <label>Type in your name</label>
        <input
          type="name"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="rounded-md border-15 p-2"
        />
        <Link href={"/intro"}><button type="submit" className="px-5 py-2 bg-cyan-50 hover:bg-cyan-500 rounded-full">Submit</button></Link>
      </form>
    </main>
  );
}
