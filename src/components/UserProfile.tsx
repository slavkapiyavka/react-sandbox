import { useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });

  const changeUserName = () => setUser((v) => ({ ...v, name: "keker" }));
  const increaseAge = () => setUser((u) => ({ ...u, age: u.age + 1 }));
  const toggleActivity = () =>
    setUser((u) => ({ ...u, isActive: !u.isActive }));

  return (
    <section>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
      <p>isActive: {user.isActive ? "yep" : "nope"}</p>
      <button
        disabled={user.name === "keker"}
        onClick={changeUserName}
        type="button"
      >
        change name
      </button>
      <button onClick={increaseAge} type="button">
        increase age
      </button>
      <button onClick={toggleActivity} type="button">
        toggle state
      </button>
    </section>
  );
};

export default UserProfile;
