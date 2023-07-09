import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <Router>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </TodoProvider>
    </Router>
  );
}

export default App;
