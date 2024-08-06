import AddTodo from "@/components/todos/AddTodo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-4xt font-extrabold uppercase">
        Todo App
      </span>
      <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
        <span className="lowercase">Server</span>Actions
      </h1>
   <div className="flex justify-center flex-col items-center">
      <AddTodo/>
   </div>
    </div>
  );
}
