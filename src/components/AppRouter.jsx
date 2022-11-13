import React, {useContext} from 'react';
import {Route, Switch} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routing/routing";
import {AuthContext} from "../context/context";

const AppRouter = () => {
    const {isUserAuth, setIsUserAuth} = useContext(AuthContext);
    console.log(isUserAuth);
    return (
        isUserAuth
            ?
            <Switch>
                {privateRoutes.map(r =>
                    <Route key={r.path}
                           component={r.component}
                           path={r.path}
                           exact={r.exact}
                    />
                )}
                <Redirect to={'/error'}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(r =>
                    <Route key={r.path}
                           component={r.component}
                           path={r.path}
                           exact={r.exact}
                    />
                )}
                <Redirect to={'/login'}/>
            </Switch>
    );
};

export default AppRouter;