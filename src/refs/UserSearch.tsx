import { useState, useRef, useEffect } from "react";

export const users = [
  { name: "Bob", age: 20 },
  { name: "Sarah", age: 18 },
  { name: "Kyle", age: 19 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  return (
    <div>
      UserSearch
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
