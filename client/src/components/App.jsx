import React from 'react';
import AppNavBar from './AppNavBar';
import ShoppingList from "./ShoppingList";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return(
        <div>
            <AppNavBar />
            <ShoppingList />
        </div>
    );
}

export default App;