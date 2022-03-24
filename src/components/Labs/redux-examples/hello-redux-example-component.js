import { useSelector } from "react-redux";

const HelloReduxExampleComponent = () => {
  const message = useSelector((state) => {
    return state.hello.message;
  });
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};
export default HelloReduxExampleComponent;
