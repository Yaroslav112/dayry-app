import React, { useState } from "react";
import "./App.css";
import AsideBar from "./components/aside-bar";
import Items from "./components/items";
import Comments from "./components/comments";
import { Provider } from "react-redux";
import store from "./store";

function App() {
    const [selectedItemId, setSelectedItemId] = useState(null);

    return (
        <Provider store={store}>
            <div className='App'>
                <div className='container'>
                    <AsideBar />
                    <Items onItemSelect={setSelectedItemId} />
                    <Comments itemId={selectedItemId} />
                </div>
            </div>
        </Provider>
    );
}

export default App;
