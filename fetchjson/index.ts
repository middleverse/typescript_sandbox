import axios from "axios"; // module used for network requests

const url = "http://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  // This interface defines a new Type called 'Todo'
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(ID, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
        The Todo with ID: ${id}
        Has a title of : ${title}
        Is it finished? ${completed}
    `);
};

// Notes:
// ======
// Every value in TS has a Type
// 1. Primitive types are self explanatory
// 2. Object Types are functions, arrays, classes, objects
//    (any types we create)
//
// Why do we care about types?
// 1. Types are used to analyze our code for errors
// 2. Allows other engineers to understand what values are
//    flowing around in our codebase
