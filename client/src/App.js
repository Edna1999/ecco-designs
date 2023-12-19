import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Main.js';


function App() {

    return (
<div>
    <Router>
        <Routes>

            <Route
            path="/ecco-designs"
            element={<Main />}
            />

        </Routes>
    </Router>
</div>
    )
}

export default App;