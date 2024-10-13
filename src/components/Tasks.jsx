// import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../utilities/getBoards";
import Todos from "./Todos";
import { useParams } from "react-router-dom";
import CreateTodo from "./CreateTodo";

export default function Tasks() {
  const { id } = useParams();

  const query = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(id),
  });

  return (
    <div>
      {query.data?.map((todo) => (
        <Todos key={todo.id} todo={todo.todo} />
      ))}
      <CreateTodo />
    </div>
  );
}
