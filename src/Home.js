import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY2 = "flag_storage";

const Home = () => {
  const [isHappy, setIsHappy] = useState(true);

  function changeMind() {
    setIsHappy((prevIsHappy) => !prevIsHappy);
  }

  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_KEY2) === "false") {
      setIsHappy(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY2, isHappy);
  }, [isHappy]);

  return (
    <div className="Home">
      <h1>Hello Home</h1>
      <h1>Happy?</h1>
      <div onClick={changeMind}>
        <button>{isHappy ? "Yes" : "No"}</button>
      </div>
    </div>
  );
};

export default Home;
