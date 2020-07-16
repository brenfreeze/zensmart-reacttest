import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './views/Home/Home'
import TodoList from './views/TodoList/TodoList'
import Buttons from './views/Buttons/Buttons'

const App = () => {
return (
    <Router>
        <Switch>
            <Route path="/todo-list" component={TodoList} />
            <Route path="/three-lg-btns" component={Buttons} />
            <Route path="/" component={Home} />
        </Switch>
    </Router>
)
}

export default App