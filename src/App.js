//Router
import { Route, Routes } from "react-router-dom";

//components
import Header from "./components/Header";

//pages
import Home from "./pages/Home";

//context
import { MyContext } from "./utils/MyContext";

const App = () => {
  return (
    <MyContext>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MyContext>
  );
};

export default App;
