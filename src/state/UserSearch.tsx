import { useState } from "react";

export const users = [
  { name: "Bob", age: 20 },
  { name: "Sarah", age: 18 },
  { name: "Kyle", age: 19 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      UserSearch
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Search</button>
      <div>
        {user && user.name}
        {user && user.age}
        {!user && "no user found"}
      </div>
    </div>
  );
};

export default UserSearch;
