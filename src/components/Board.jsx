// import { getBoards } from "../utilities/getBoards";
import { useNavigate } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import getBoards from "../utilities/getBoards";

// eslint-disable-next-line react/prop-types
export default function Board({ text, id }) {
  //   const query = useQuery({ queryKey: ["board"], queryFn: getBoards });
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${id}`);
  };
  return (
    <div
      className=" bg-slate-200 h-auto w-11/12 text-left p-2 text-xl font-semibold rounded-r-3xl"
      onClick={handleClick}
    >
      {text}
    </div>
  );
}
