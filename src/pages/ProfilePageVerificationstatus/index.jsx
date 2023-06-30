import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";

const ProfilePageVerificationstatusPage = () => {
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
        <div className="bg-white-A700_01 flex flex-col items-center justify-start max-w-[1126px] mt-36 mx-auto p-16 md:px-5 rounded-[60px] w-full">
          <div className="flex flex-col gap-[55px] items-start justify-start mb-[117px] w-[98%] md:w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
              <Text
                className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800 tracking-[0.16px] w-auto"
                size="txtUbuntuMedium32"
              >
                Profile Details
              </Text>
              <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[272px] items-start justify-between w-auto md:w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20Gray900"
                  >
                    Personal Data
                  </Text>
                  <Text
                    className="text-gray-500 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20Gray500"
                  >
                    Password
                  </Text>
                  <Text
                    className="text-gray-500 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20Gray500"
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
            <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-start justify-start w-[84%] md:w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-[146px]">
                <Text
                  className="text-gray-500 text-xl tracking-[0.80px] w-auto"
                  size="txtUbuntuMedium20Gray500"
                >
                  Profile Picture
                </Text>
                <div className="md:h-[100px] h-[107px] relative w-[81%]">
                  <Img
                    className="absolute h-[100px] left-[0] rounded-[50%] top-[0] w-[100px]"
                    src="images/img_ellipse12.png"
                    alt="ellipseTwelve"
                  />
                  <Button className="absolute bg-gray-400 bottom-[0] flex h-[50px] items-center justify-center p-[13px] right-[0] rounded-[50%] w-[50px]">
                    <Img
                      className="h-6"
                      src="images/img_materialsymbolseditoutline.svg"
                      alt="materialsymbols"
                    />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-10 items-end justify-start w-auto md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20Gray900"
                  >
                    Names:
                  </Text>
                  <Input
                    name="frame495"
                    placeholder="Benson Judge"
                    className="font-medium p-0 placeholder:text-blue_gray-800 sm:px-5 text-blue_gray-800 text-left text-xl tracking-[0.80px] w-full"
                    wrapClassName="bg-green-A100 px-[35px] py-[23px] rounded-[30px] w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20Gray900"
                  >
                    Username:
                  </Text>
                  <Text
                    className="bg-green-A100 justify-center sm:px-5 px-[35px] py-[23px] rounded-[30px] text-blue_gray-800 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20"
                  >
                    Ben-J
                  </Text>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20Gray900"
                  >
                    Phone number:
                  </Text>
                  <Text
                    className="bg-green-A100 justify-center sm:px-5 px-[35px] py-[23px] rounded-[30px] text-blue_gray-800 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20"
                  >
                    +44 546 6788 987
                  </Text>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20Gray900"
                  >
                    Email Address:
                  </Text>
                  <Text
                    className="bg-green-A100 justify-center sm:px-5 px-[35px] py-[23px] rounded-[30px] text-blue_gray-800 text-xl tracking-[0.80px] w-auto"
                    size="txtUbuntuMedium20"
                  >
                    bensonjudge@email.com
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-white-A700 flex items-center justify-center mt-52 md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProfilePageVerificationstatusPage;
