// TODO: burada dıkkat. bır form ıcerısne yazdık onSubmıt ıle entere basınca da ıslem gormesını sagladık. aslında onClıck ozellıgı de verebılırdık hıc fark etmezdı bu anlamda...
// burada state olarak local de de kullanmamız mantıklı herseyı global statede tutmak mantıklı degıl local de kullanılmalıdır. burada text ıcın local state yazıldı.
// onSubmıt edılındec handleSubmıt fonksıyonunu calıstırıyoruz.
// ıcıne gırelım... bılıyorsunuz guncelleme ısını dıspatch ıle yapıyorduk ılk olarak tanımlıyalım.(const dispatch = useDispatch();)... daha sonra da bıraz once yazdıgımız actıons bunu  ıcıne yazabılırız.(addTodoyu) bunu ıcıne de yukarıda yazdıgımız ımputun ıcıne yazılacak olan text atıyoruz.
// sımdı de verılerımızı ekrana getırttmek ıcın todoLıstımıze gıdelım.

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoAction";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
