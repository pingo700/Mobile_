import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeRoute from "./home.route";


export default function Routes() {
  return (
    <NavigationContainer>
      <HomeRoute/>
    </NavigationContainer>
  );
}