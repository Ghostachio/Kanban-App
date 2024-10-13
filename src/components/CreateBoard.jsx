import { useState } from "react";
import { addBoard } from "../utilities/getBoards";

const CreateBoard = () => {
  const [name, setName] = useState("");

  const handleUpdate = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addBoard(name);
    setName(""); // Clear the input after submission
  };

  return (
    <div className="flex flex-col bg-slate-400 gap-7 p-6">
      <h1 className="text-xl text-gray-950 font-bold p-3 text-center rounded-lg">
        Create New Board
      </h1>
      <form
        action=""
        className="flex flex-col justify-center"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <label htmlFor="boardName" className="font-semibold">
            Board Name
          </label>
          <input
            type="text"
            id="boardName"
            className="mt-3 rounded-lg"
            onChange={handleUpdate}
          />
        </div>
        <button className="mt-6 bg-white h-10 rounded-md w-20 self-center text-center">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateBoard;
