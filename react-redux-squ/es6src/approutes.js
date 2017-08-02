import React from 'react'
import { IndexRoute, Router, Route, hashHistory } from 'react-router'
import Root from './components/root'
import UsersListPage from './components/users-list-page'
import UserDetailsPage from './components/user-details-page'

export default () => 
<Route path="/" component={Root}>
    <IndexRoute component={UsersListPage} />
    <Route path="/:userid" component={UserDetailsPage} />
</Route> 
    