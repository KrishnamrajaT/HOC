import { Hoc } from "./Hoc";
import { User } from "./User";
export const App = () => {
  const NewUsers = Hoc(User);
  return (
    <div>
      <NewUsers />
    </div>
  );
};
