import { useMemo } from "react";
import { useSelector } from "react-redux";
import { faker } from "@faker-js/faker";

// Component
import CardContentComponent from "../CardComponent/CardContentComponent";

const ListWithoutVirtualizeComponent = () => {
  const { cardContentList } = useSelector((state) => state.cardReducer);

  const title = useMemo(() => faker.lorem.sentence(1), []);
  const subTitle = useMemo(() => faker.lorem.sentence(3), []);

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex-col justify-center">
        {cardContentList.map((item) => (
          <>
            <div className="p-2 flex flex-col border-solid border-2 items-start mb-10 bg-white">
              <div className="w-10 h-10 rounded-full bg-green-700" />
              <div className="flex flex-col items-start">
                <p className="text-lg">{title}</p>
                <p className="text-sm text-gray-400">{subTitle}</p>
              </div>
              <CardContentComponent content={item} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ListWithoutVirtualizeComponent;
