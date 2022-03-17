import React from 'react'
import Search from '../components/Search'
import {Switch, useRouteMatch, Route} from 'react-router-dom'
function SearchRoute() {
    let match = useRouteMatch();
  return (
    <Switch>
        <Route path={`${match.path}/:ProductId`}>
            <Search />
        </Route>
    </Switch>
  )
}

export default SearchRoute