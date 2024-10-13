// eslint-disable-next-line react/prop-types
const Todos = ({ todo }) => {
  return (
    <div className="bg-slate-200 w-4/12 p-3 m-3 text-center text-xl font-semibold rounded-lg">
      <p>{todo}</p>
    </div>
  );
};

export default Todos;
