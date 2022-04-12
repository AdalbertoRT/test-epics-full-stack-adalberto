import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./routes";
import { UserStorage } from "./store/UserContext";

function App() {
    return (
        <UserStorage>
            <AppRoutes />
        </UserStorage>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
