import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";

const ProfilePagePasswordPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-green-A100 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <header className="bg-white-A700_01 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-1 md:flex-col flex-row gap-12 items-center justify-start mb-[26px] ml-24 md:ml-[0] md:mt-0 mt-10 w-auto md:w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-[74px] w-[74px]"
                src="images/img_frame434.svg"
                alt="frame434"
              />
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-800 uppercase w-auto"
                size="txtUbuntuBold36"
              >
                aiders
              </Text>
            </div>
            <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
              <div className="bg-white-A700_01 border border-gray-900 border-solid flex flex-col items-start justify-start sm:px-5 px-8 py-[7px] rounded-[25px] w-auto">
                <div className="flex flex-row gap-[72px] h-9 md:h-auto items-center justify-start w-[291px]">
                  <Text
                    className="text-gray-500 text-sm tracking-[0.07px] w-auto"
                    size="txtUbuntuMedium14"
                  >
                    Search for anything here
                  </Text>
                  <Img
                    className="h-9 w-9"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-16 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuMedium16"
                  >
                    Home
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuMedium16"
                  >
                    NFTs
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuMedium16"
                  >
                    Trades
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuMedium16"
                  >
                    About Us
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-auto">
                  <a
                    href="javascript:"
                    className="text-base text-gray-900 tracking-[0.08px] w-auto"
                  >
                    <Text size="txtUbuntuMedium16">FAQs</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-start mb-[46px] md:ml-[0] ml-[196px] mr-24 md:mt-0 mt-[77px] w-auto">
            <Button className="border-2 border-blue_gray-800 border-solid flex h-14 items-center justify-center p-4 rounded-[20px] w-14">
              <Img
                className="h-6"
                src="images/img_ggprofile.svg"
                alt="ggprofile"
              />
            </Button>
            <Button className="border-2 border-blue_gray-800 border-solid cursor-pointer font-bold min-w-[214px] py-[17px] rounded-[28px] text-blue_gray-800 text-center text-lg tracking-[0.09px]">
              Connect Wallet
            </Button>
          </div>
        </header>
        <div className="bg-white-A700_01 flex flex-col items-start justify-start max-w-[1126px] mt-36 mx-auto p-16 md:px-5 rounded-[60px] w-full">
          <div className="flex flex-col gap-8 items-start justify-start md:ml-[0] ml-[11px] w-auto md:w-full">
            <Text
              className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800 tracking-[0.16px] w-auto"
              size="txtUbuntuMedium32"
            >
              Profile Details
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[272px] items-start justify-between w-auto md:w-full">
                <Text
                  className="common-pointer text-gray-400 text-xl tracking-[0.80px] w-auto"
                  size="txtUbuntuMedium20Gray400"
                  onClick={() => navigate("/profilepagepersonaldata")}
                >
                  Personal Data
                </Text>
                <Text
                  className="text-blue_gray-800 text-xl tracking-[0.80px] w-auto"
                  size="txtUbuntuMedium20"
                >
                  Password
                </Text>
                <Text
                  className="common-pointer text-gray-500 text-xl tracking-[0.80px] w-auto"
                  size="txtUbuntuMedium20Gray500"
                  onClick={() => navigate("/profilepageverificationstatus")}
                >
                  Verification Status
                </Text>
              </div>
              <Img
                className="h-0.5 w-[976px]"
                src="images/img_group2.svg"
                alt="groupTwo"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 h-[395px] md:h-auto items-start justify-start md:ml-[0] ml-[11px] mt-[55px] w-[600px] md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="text-blue_gray-800 text-xl tracking-[0.80px] w-auto"
                size="txtUbuntuMedium20"
              >
                Current Password
              </Text>
              <Input
                name="password_One"
                placeholder="*********"
                className="font-medium p-0 placeholder:text-blue_gray-800 sm:px-5 text-blue_gray-800 text-left text-xl tracking-[0.80px] w-full"
                wrapClassName="bg-green-A100 flex pb-[25px] pt-5 px-[35px] rounded-[30px] w-full"
                suffix={
                  <Img
                    className="mt-px mb-auto h-6 ml-[35px]"
                    src="images/img_cihide.svg"
                    alt="ci:hide"
                  />
                }
              ></Input>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="text-blue_gray-800 text-xl tracking-[0.80px] w-auto"
                size="txtUbuntuMedium20"
              >
                New Password
              </Text>
              <div className="bg-green-A100 flex flex-col items-end justify-start p-[21px] sm:px-5 rounded-[30px] w-full">
                <Img
                  className="h-6 mb-1 mr-[62px] w-6"
                  src="images/img_cihide.svg"
                  alt="cihide"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="text-blue_gray-800 text-xl tracking-[0.80px] w-auto"
                size="txtUbuntuMedium20"
              >
                Confirm New Password
              </Text>
              <div className="bg-green-A100 flex flex-col items-end justify-start p-[21px] sm:px-5 rounded-[30px] w-full">
                <Img
                  className="h-6 mb-1 mr-[62px] w-6"
                  src="images/img_cihide.svg"
                  alt="cihide_One"
                />
              </div>
            </div>
          </div>
          <Button className="bg-blue_gray-800 cursor-pointer font-bold mb-[124px] min-w-[144px] md:ml-[0] ml-[11px] mt-[104px] py-[17px] rounded-[28px] text-center text-lg text-white-A700_01 tracking-[0.09px]">
            Update
          </Button>
        </div>
        <Footer className="bg-white-A700 flex items-center justify-center mt-52 md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProfilePagePasswordPage;
