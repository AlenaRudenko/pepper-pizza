import { connect } from "react-redux";

import {
  sortByMeat,
  sortByAll,
  sortByVegan
} from "../../../store/mainPageReducer/mainPageActionCreators";
import { NavigationComponent } from "./NavigationComponent";
import "./styles.css";

export const NavigationComponentContainer = connect(null, {
  sortByMeat,
  sortByAll,
  sortByVegan
})(NavigationComponent);
