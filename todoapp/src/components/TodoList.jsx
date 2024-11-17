import TodoItem from './TodoItem';
import styles from './todoList.module.css'

export default function TodoList({todos, setTodos}) {

    const sortedTodos = todos.slice().sort((a, b) =>Number(a.done) - Number(b.done));  // slice() creates a copy of the array instead of altering the original. a - b or b - a determines the direction of the sort (ex: a to b). Number() casts the values into numbers

    return (
        <div className={styles.list}>
            {sortedTodos.map(item=> (
                <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
            ))}
        </div>
    );
}