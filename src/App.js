import { useEffect, useCallback } from "react";
import { faker } from "@faker-js/faker";
import { useDispatch } from "react-redux";

// Global css
import "./App.css";
// Component
import ListWithVirtualizeComponent from "./components/ListWithVirtualizeComponent";
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
      const newList = Array.from({ length: 40 }).map((_) =>
        faker.lorem.sentence()
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
      {/* {list.map((item) => (
        <div className="p-2 mb-6 flex flex-col border-solid border-2">
          <div className="flex">
            {item.last_name} {item.first_name}
          </div>
          <div>{item.gender}</div>
        </div>
      ))} */}
      <ListWithVirtualizeComponent
      // cardContentList={cardContentList}
      // hasNextPage={hasNextPage}
      // isNextPageLoading={isNextPageLoading}
      // loadingHandler={loadingHandler}
      // setCardContentList={setCardContentList}
      />
    </div>
  );
}

export default App;
