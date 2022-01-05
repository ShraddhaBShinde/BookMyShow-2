import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHoc = ({element: Element, ...rest}) => {

    return(
        <>
          <Route
          {...rest}
          element = {(props) => (
              <DefaultLayout> 
                  <Element {...props}/>
              </DefaultLayout>
          )}/>
        </>
    );
};

export default DefaultHoc;