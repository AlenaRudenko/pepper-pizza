import { connect } from "react-redux";

import { sortByMeat } from "../../../store/mainPageReducer/mainPageActionCreators";

import "./styles.css";

export const NavigationComponentContainer = connect(null, { sortByMeat })(
  NavigationComponent
);
