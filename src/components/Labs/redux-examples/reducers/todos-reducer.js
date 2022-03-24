const data = [
  {
    _id: "123",
    do: "Accelerate the world's transition to sustainable energy",
    done: false,
  },
  {
    _id: "234",
    do: "Reduce space transportation costs to become a spacefaring civilization",
    done: false,
  },
];

const todosReducer = (state = data, action) => {
  switch (action.type) {
    case "create-todo":
      const newState = { ...action.todo, _id: new Date().getTime() + "" };
      return [...state, newState];
    case "update-todo":
      return state.map((e) =>
        e._id === action.todo._id ? (e = action.todo) : e
      );
    case "delete-todo":
      return state.filter((e) => e._id !== action.todo._id);
    default:
      return state;
  }
};

export default todosReducer;
