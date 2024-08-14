import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import InitializeAuth from "./auth/InitializedAuth"
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import CreateBookForm from "./components/book/CreateBookForm";
import { router } from "./routes/router";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <InitializeAuth>
          <RouterProvider router={router} />
          {/* <Routes>
            <Route path="/create-book" element={<CreateBookForm />} />
          </Routes> */}
        </InitializeAuth>
      </Provider>
    </div>
  );
}

export default App;
