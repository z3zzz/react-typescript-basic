import { ChildAsFC } from "./Child";
import Grandchild from './Grandchild'

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("clicked!")}>
      <Grandchild />
    </ChildAsFC>
  );
};

export default Parent;
