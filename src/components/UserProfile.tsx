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
    <section className={`card ${user.isActive ? "card_active-user" : ""}`}>
      <div className="user-info">
        <p className="card__text">name: {user.name}</p>
        <p className="card__text">age: {user.age}</p>
      </div>
      <div className="buttons-group">
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
      </div>
    </section>
  );
};

export default UserProfile;
