import supabase from "./supabase";

const getBoards = async () => {
  const { data: boards, error } = await supabase.from("boards").select("*");

  if (error) {
    console.error("Error fetching todos:", error);
  } else {
    return boards;
  }
};

const getTodos = async (id) => {
  // const boardId = 2; // Example board ID
  const { data: todo, error } = await supabase
    .from("todos")
    .select("*")
    .eq("boardID", id);

  if (error) {
    console.error("Error fetching todos:", error, `message is ${id}`);
  } else {
    return todo;
  }
};

const addBoard = async (name) => {
  event.preventDefault();
  const { data } = await supabase
    .from("boards")
    .insert([{ text: name }])
    .select();
  return data;
};
const addTodo = async (todo, id) => {
  event.preventDefault();

  const { data } = await supabase
    .from("todos")
    .insert([{ todo: todo, boardID: id }])
    .select();
  return data;
};

export { getBoards, getTodos, addBoard, addTodo };
