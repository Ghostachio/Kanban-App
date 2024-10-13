import { useParams } from "react-router-dom";
import { addTodo } from "../utilities/getBoards";
import { useState } from "react";

const CreateTodo = () => {
  const [todo, setTodo] = useState("");
  const { id } = useParams();

  const handleUpdate = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTodo(todo, id);
    setTodo(""); // Clear the input after submission
    console.log(id);
  };

  return (
    <div className="flex flex-col bg-slate-400 gap-7 p-6 w-3/12 m-3 rounded-md mt-32">
      <h1 className="text-xl text-gray-950 font-bold p-3 text-center rounded-lg">
        Create New Task To Do!
      </h1>
      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
        <div className="text-center flex flex-col ">
          <label htmlFor="todoName" className="font-semibold">
            New Task
          </label>
          <input
            type="text"
            id="todoName"
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

export default CreateTodo;
