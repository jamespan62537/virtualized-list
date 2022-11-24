import { useCallback, useMemo } from "react";
import { faker } from "@faker-js/faker";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import { useSelector, useDispatch } from "react-redux";

// Component
import CardComponent from "../CardComponent";
// Redux
import {
  loadingHandlerAction,
  setCardContentListAction,
} from "../../features/card/cardSlice";

const ListWithVirtualizeComponent = () => {
  const dispatch = useDispatch();
  const { cardContentList, hasNextPage, isNextPageLoading } = useSelector(
    (state) => state.cardReducer
  );

  const loadMoreItems = useCallback(() => {
    if (isNextPageLoading) return;
    dispatch(loadingHandlerAction(true));
    setTimeout(() => {
      const newList = Array.from({ length: 40 }).map((_) =>
        faker.lorem.sentence()
      );
      dispatch(setCardContentListAction(newList));
      dispatch(loadingHandlerAction(false));
    }, 2000);
  }, [dispatch, isNextPageLoading]);

  const itemCount = useMemo(
    () => (hasNextPage ? cardContentList.length + 1 : cardContentList.length),
    [cardContentList.length, hasNextPage]
  );

  const isItemLoaded = useCallback(
    (index) => index < cardContentList.length || !hasNextPage,
    [cardContentList, hasNextPage]
  );

  return (
    <div className="h-screen w-1/2 flex justify-center">
      <AutoSizer>
        {({ height, width }) => {
          return (
            <InfiniteLoader
              isItemLoaded={isItemLoaded}
              itemCount={itemCount}
              loadMoreItems={loadMoreItems}
            >
              {({ onItemsRendered, ref }) => {
                return (
                  <List
                    className="List"
                    height={height}
                    itemCount={itemCount}
                    itemSize={120}
                    width={width}
                    itemData={cardContentList}
                    onItemsRendered={onItemsRendered}
                    ref={ref}
                  >
                    {CardComponent}
                  </List>
                );
              }}
            </InfiniteLoader>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default ListWithVirtualizeComponent;
