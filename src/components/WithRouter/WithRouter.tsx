import React from "react";
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {Location} from "history";
import {NavigateFunction} from "react-router";

export interface iWithRouter {
    location: Location;
    navigate: NavigateFunction;
    params: any
}


export default function WithRouter<ComponentProperties = {}>(props: ComponentProperties & {
    element: React.ComponentType<ComponentProperties>
}) {

    const Component = props.element;
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    console.info(Component.displayName || Component.name, {location, navigate, params});

    return <Component {...props}
                      location={location}
                      navigate={navigate}
                      params={params}>
        <Outlet/>
    </Component>; // never change the order

}
WithRouter.displayName = 'PassPropertiesAndRender';

export function ppr<T = {}, >(Element: React.ComponentType<any>, props: T) {
    return <WithRouter<T> {...props} element={Element}/>;
}
