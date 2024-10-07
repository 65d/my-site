// import Image from "next/image";

export default function Home() {
  return (
    <div className="animation-53895y3945 grid gap-3 p-3 grid-cols-5 grid-rows-4 h-screen">
      <div className="bg-blue-500 col-span-2 row-span-4 rounded-xl flex justify-center items-center">
        <h1 className="text-white text-2xl font-bold">Grid Item 1</h1>
      </div>
      <div className="bg-yellow-500 col-span-3 row-span-1 rounded-xl flex justify-center items-center">
        <h1 className="text-white text-2xl font-bold">Grid Item 2</h1>
      </div>
      <div className="bg-red-500 col-span-2 row-span-2 rounded-xl flex justify-center items-center">
        <h1 className="text-white text-2xl font-bold">Grid Item 3</h1>
      </div>
      {/* <div className="bg-green-500 col-span-1 row-span-1">Grid Item 3</div> */}
      <div className="bg-yellow-500 col-span-1 row-span-2 rounded-xl flex justify-center items-center">
        <h1 className="text-white text-2xl font-bold">Grid Item 4</h1>
      </div>
      <div className="bg-purple-500 col-span-1 row-span-1 rounded-xl flex justify-center items-center">
        <h1 className="text-white text-2xl font-bold">Grid Item 5</h1>
      </div>
      <div className="bg-orange-500 col-span-2 row-span-1 rounded-xl flex justify-center items-center">
        <h1 className="text-white text-2xl font-bold">Grid Item 6</h1>
      </div>
    </div>
  );
}
