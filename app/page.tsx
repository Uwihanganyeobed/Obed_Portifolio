import Image from "next/image";

export default function Home() {
  return (
   <main className=" relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className=" max-w-7xl w-full">
      <h1 className=" text-green-800 text-center">Hello, Portifolio</h1>
      <button title="Send" className=" text-white">Send</button>
    </div>
   </main>
  );
}
