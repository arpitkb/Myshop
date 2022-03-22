import React from 'react'
import { Switch, useRouteMatch, Route } from 'react-router-dom'
import Product from '../components/Product'
function ProductRoute() {
    let match = useRouteMatch();
  return (
    <Switch>
        <Route path={`${match.path}/:ProductId`}>
            <Product />
        </Route>
    </Switch>
  )
}

export default ProductRoute