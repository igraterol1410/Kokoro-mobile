import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

const MobileRouter = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            <Component {...props} />
        )} />
      );
}   

export default MobileRouter