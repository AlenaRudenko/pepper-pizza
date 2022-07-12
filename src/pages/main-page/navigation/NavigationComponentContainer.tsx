import { connect } from "react-redux";
import { sortByCategory } from "../../../store/mainPageReducer/mainPageActionCreators";
import { IStore } from "../../../store/store";
import { NavigationComponent } from "./NavigationComponent";
import "./styles.css";

const mapStateToProps = (state: IStore) => ({
  categories: state.mainPage.categories
});

const mapDispatchToProps = {
  sortByCategory
};

export const NavigationComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationComponent);
export type INavigationStoreProps = ReturnType<typeof mapStateToProps>;
export type INavigationDispatchProps = typeof mapDispatchToProps;
