import { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { faker } from "@faker-js/faker";

// Component
import CardHeaderComponent from "./CardHeaderComponent";
import CardContentComponent from "./CardContentComponent";

const defaultProps = {
  item: {},
};

const propTypes = {
  item: PropTypes.object,
};

const CardComponent = ({ index, data, style }) => {
  const isLoading = useMemo(() => data[index] === undefined, [data, index]);

  const title = useMemo(() => faker.lorem.sentence(1), []);
  const subTitle = useMemo(() => faker.lorem.sentence(3), []);

  const renderHeader = useCallback(
    () =>
      isLoading ? (
        <div className="animate-pulse flex gap-3 w-3/5">
          <div className="rounded-full bg-slate-700 h-10 w-10" />
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-10 h-10 rounded-full bg-red-800" />
          <div className="flex flex-col items-start">
            <p className="text-lg">{title}</p>
            <p className="text-sm text-gray-400">{subTitle}</p>
          </div>
        </>
      ),
    [isLoading, title, subTitle]
  );

  return (
    <div
      style={style}
      className="p-2 flex flex-col border-solid border-2 items-start mb-10 bg-white"
    >
      <CardHeaderComponent>{renderHeader()}</CardHeaderComponent>
      <CardContentComponent content={data[index]} />
    </div>
  );
};

CardComponent.defaultProps = defaultProps;
CardComponent.propTypes = propTypes;
export default CardComponent;
