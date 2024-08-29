import TodoContainer from "./Components/TodoContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from './App.module.css';



const App = () => {
  return (
    (<div className={styles.titleInputListContainer}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoContainer />} />
          <Route path="/new" element={
            <>
              <h1>New Todo List</h1>
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>)
  );

};

export default App

