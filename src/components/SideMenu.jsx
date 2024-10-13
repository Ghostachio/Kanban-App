import { useQuery } from "@tanstack/react-query";
import Board from "./Board";
import { getBoards } from "../utilities/getBoards.js";
import CreateBoard from "./CreateBoard.jsx";
import { useState } from "react";
// import { useParams } from "react-router-dom";

export default function SideMenu() {
  // const queryClient = useQueryClient();

  const query = useQuery({ queryKey: ["board"], queryFn: getBoards });
  const [create, setCreate] = useState(false);

  const handleCreate = () => {
    setCreate(!create);
  };

  return (
    <aside className="w-2/12 h-lvh bg-slate-500">
      <div className="w-full pt-8 pb-8 flex gap-2 justify-center items-center">
        <svg
          className="w-[48px] h-[48px] text-gray-800 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.1"
            d="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
          />
        </svg>

        <h1 className="font-bold text-4xl">KanBan</h1>
      </div>
      <div>
        <h2 className="pl-7 text-xl font-semibold">
          All boards ({query.data?.length})
        </h2>
      </div>
      <div className="flex flex-col gap-2 justify-start mt-10">
        {query.data?.map((todo) => (
          <Board key={todo.id} text={todo.text} id={todo.id} />
        ))}
      </div>
      <button
        className="m-5 self-center w-10/12 h-16 rounded-3xl bg-slate-100 "
        onClick={handleCreate}
      >
        Create New Board
      </button>
      {create && <CreateBoard />}
    </aside>
  );
}
