import { useEffect, useCallback } from "react";
import { faker } from "@faker-js/faker";
import { useDispatch } from "react-redux";

// Global css
import "./App.css";
// Component
import ListWithVirtualizeComponent from "./components/ListWithVirtualizeComponent";
import ListWithoutVirtualizeComponent from "./components/ListWithoutVirtualizeComponent";
// Redux
import {
  loadingHandlerAction,
  setCardContentListAction,
} from "./features/card/cardSlice";

function App() {
  const dispatch = useDispatch();

  const initialCardContentList = useCallback(() => {
    dispatch(loadingHandlerAction(true));
    setTimeout(() => {
      const newList = Array.from({ length: 100 }).map((_) =>
        faker.lorem.sentence(100)
      );
      dispatch(setCardContentListAction(newList));
      dispatch(loadingHandlerAction(false));
    }, 2000);
  }, [dispatch]);

  useEffect(() => {
    initialCardContentList();
  }, [initialCardContentList]);

  return (
    <div className="App bg-gray-100">
      {/* <ListWithoutVirtualizeComponent /> */}
      <ListWithVirtualizeComponent />
    </div>
  );
}

export default App;
