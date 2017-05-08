

export const allTodos = ({ todos }) => {
  let ids = Object.keys(todos);
  return ids.map(id => todos[id]);
};
