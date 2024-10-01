import React from "react";
import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="p-6 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8 ">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
