import React from "react";

import { Img, List, Text } from "components";
import NFTsMarketPageOneColumnone from "components/NFTsMarketPageOneColumnone";

const Frame656Page = () => {
  return (
    <>
      <div className="flex flex-col font-ubuntu gap-10 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Text
          className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
          size="txtUbuntuBold20Gray900"
        >
          Top Collections
        </Text>
        <div className="flex flex-col items-center w-full">
          <List
            className="sm:flex-col flex-row md:gap-10 gap-28 grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-10 items-start justify-start md:px-5 w-auto sm:w-full">
              <NFTsMarketPageOneColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
              <NFTsMarketPageOneColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
              <NFTsMarketPageOneColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
              <NFTsMarketPageOneColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
              <NFTsMarketPageOneColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
            </div>
            <div className="flex flex-col gap-10 items-start justify-start md:px-5 w-auto sm:w-full">
              <NFTsMarketPageOneColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
              <NFTsMarketPageOneColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
              <NFTsMarketPageOneColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
              <NFTsMarketPageOneColumnone className="bg-white-A700_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] shadow-bs w-full" />
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default Frame656Page;
