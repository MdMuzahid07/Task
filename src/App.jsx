import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="max-w-7xl mx-auto mt-32">
      <h1 className="text-4xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod odit
        non commodi voluptatem perferendis modi sunt adipisci saepe ducimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod odit
        non commodi voluptatem perferendis modi sunt adipisci saepe ducimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod odit
        non commodi voluptatem perferendis modi sunt adipisci saepe ducimus.
      </h1>
    </div>
  );
};

export default App;
