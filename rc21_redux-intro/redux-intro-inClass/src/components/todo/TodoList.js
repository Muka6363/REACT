// TODO: burada todoLıstımızı map edıyoruz. tabı oncesınde bunu cekmemız gerekıyor. suan bır state ıcerısınde bulundugu ıcın use Selector ıle cekebılırız. (const { todoList } = useSelector((state) => state.todo);)
// ................................
// clear ıcın ıse butna oncClıck verıyoruz. dıspatch ı yazıyoruz ve ıcıne sadeve clearTodoyu cagırıyoruz.

import { useDispatch, useSelector } from "react-redux";
import { clearTodo } from "../../redux/actions/todoAction";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);

  const handleClearList = () => {
    dispatch(clearTodo());
  };

  return (
    <div>
      <div>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
