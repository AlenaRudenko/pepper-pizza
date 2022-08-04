import { NavigationComponentContainer } from "./../navigation/NavigationComponentContainer";
import { PizzaComponentContainer } from "./../content/PizzaComponentContainer";
import { IPizza } from "../../../store/mainPageReducer/interfaces";
interface IProps {
  isLoading: boolean;
  pizzas: IPizza[];
}
export const MainPage = ({ isLoading, pizzas }: IProps) => {
  return (
    <div>
      <NavigationComponentContainer />
      <h2 className="app__title">Все пиццы</h2>
      {isLoading ? (
        <span>loading</span>
      ) : (
        <div className="content__container">
          {pizzas.map((item) => (
            <PizzaComponentContainer
              title={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};
