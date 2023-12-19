import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';


function App() {

    return (
<div>
    <Router>
        <Routes>

            <Route
            path="/eco-designs"
            element={<Home />}
            />

        </Routes>
    </Router>
</div>
    )
}

export default App;