import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const HomePagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <header className="bg-white-A700_01 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-1 md:flex-col flex-row gap-12 items-center justify-start mb-[9px] ml-24 md:ml-[0] md:mt-0 mt-10 w-auto md:w-full">
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
                <div className="flex flex-col gap-3 items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 tracking-[0.08px] w-auto"
                    size="txtUbuntuMedium16"
                  >
                    Home
                  </Text>
                  <Line className="bg-blue_gray-800 h-[5px] rounded-sm w-full" />
                </div>
                <Button
                  className="common-pointer bg-transparent cursor-pointer font-medium min-w-[37px] py-0.5 text-base text-center text-gray-900 tracking-[0.08px]"
                  onClick={() => navigate("/nftsmarketpageone")}
                >
                  NFTs
                </Button>
                <Button
                  className="common-pointer bg-transparent cursor-pointer font-medium min-w-[51px] py-0.5 text-base text-center text-gray-900 tracking-[0.08px]"
                  onClick={() => navigate("/tradingpage")}
                >
                  Trades
                </Button>
                <Button
                  className="common-pointer bg-transparent cursor-pointer font-medium min-w-[69px] py-0.5 text-base text-center text-gray-900 tracking-[0.08px]"
                  onClick={() => navigate("/aboutuspage")}
                >
                  About Us
                </Button>
                <Button
                  className="common-pointer bg-transparent cursor-pointer font-medium min-w-[39px] py-0.5 text-base text-center text-gray-900 tracking-[0.08px]"
                  onClick={() => navigate("/faqspage")}
                >
                  FAQs
                </Button>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-start mb-[46px] md:ml-[0] ml-[151px] mr-24 md:mt-0 mt-[77px] w-auto">
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
        <div className="flex flex-col md:gap-10 gap-24 items-center justify-start max-w-[1244px] mt-36 mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-24 items-center justify-start w-auto md:w-full">
            <div className="flex flex-col md:gap-10 gap-24 items-center justify-start w-auto md:w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
                <Text
                  className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800 tracking-[0.16px] w-auto"
                  size="txtUbuntuMedium32"
                >
                  Tasks
                </Text>
                <div className="flex flex-col gap-14 items-center justify-start w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row md:gap-10 gap-[338px] items-start justify-between w-auto md:w-full">
                    <div className="flex flex-col gap-10 items-start justify-start w-auto">
                      <Text
                        className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                        size="txtUbuntuMedium20Gray900"
                      >
                        Tasks Categories
                      </Text>
                      <div className="flex flex-col gap-8 items-start justify-start w-auto">
                        <Text
                          className="capitalize text-gray-900 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuMedium18Gray900"
                        >
                          Affiliate Marketing
                        </Text>
                        <Text
                          className="capitalize text-gray-900 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuMedium18Gray900"
                        >
                          Surveys
                        </Text>
                        <Text
                          className="capitalize text-gray-900 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuMedium18Gray900"
                        >
                          Quiz
                        </Text>
                        <Text
                          className="capitalize text-gray-900 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuMedium18Gray900"
                        >
                          Questionnaire
                        </Text>
                        <Text
                          className="capitalize text-gray-900 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuMedium18Gray900"
                        >
                          Feedback
                        </Text>
                        <Text
                          className="capitalize text-gray-900 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuMedium18Gray900"
                        >
                          Reviews
                        </Text>
                        <Text
                          className="capitalize text-gray-900 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuMedium18Gray900"
                        >
                          Watch Videos
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-10 items-start justify-start w-auto">
                      <Text
                        className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                        size="txtUbuntuMedium20Gray900"
                      >
                        Available Tasks
                      </Text>
                      <div className="flex flex-col gap-8 items-start justify-start w-auto">
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          Create Contents
                        </Text>
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          Design Surveys
                        </Text>
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          Image Quiz
                        </Text>
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          Provide Feedback
                        </Text>
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          Social media promotion
                        </Text>
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          Network
                        </Text>
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          View short videos
                        </Text>
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          Answer questions online
                        </Text>
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          Send Emails
                        </Text>
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          Monitor feedbacks
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-10 items-start justify-start w-auto">
                      <Text
                        className="capitalize text-gray-900 text-xl tracking-[0.10px] w-auto"
                        size="txtUbuntuMedium20Gray900"
                      >
                        Previous Tasks
                      </Text>
                      <div className="flex flex-col gap-8 items-start justify-start w-auto">
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          Create Contents
                        </Text>
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          Distribute Surveys
                        </Text>
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          Sorting Quiz
                        </Text>
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          Collect Feedback
                        </Text>
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          Social media promotion
                        </Text>
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          Refer
                        </Text>
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          View short videos
                        </Text>
                        <Text
                          className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
                          size="txtUbuntuRegular18Gray500"
                        >
                          Monitor feedbacks
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-12 items-center justify-start w-auto sm:w-full">
                    <Text
                      className="leading-[24.00px] text-center text-gray-900 text-lg tracking-[0.09px]"
                      size="txtUbuntuMedium18Gray900"
                    >
                      <>
                        Are you ready to kick start your earning journey? <br />
                        Begin completing tasks and unlock incredible rewards.
                      </>
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-xl tracking-[0.10px] uppercase w-auto"
                      size="txtUbuntuBold20"
                    >
                      Start earning
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:gap-10 gap-24 items-center justify-start w-auto md:w-full">
                <div className="flex flex-col gap-10 items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-lg text-yellow-A400 tracking-[0.09px] uppercase w-auto"
                    size="txtUbuntuMedium18"
                  >
                    Other Aiders Services
                  </Text>
                  <Text
                    className="leading-[45.00px] max-w-[908px] md:max-w-full text-center text-gray-900 text-lg tracking-[0.09px]"
                    size="txtUbuntuRegular18Gray900"
                  >
                    As an ambassador for the aiders network, you have the
                    opportunity to refer and onboard individuals to this
                    platform. By doing so, you can earn fantastic rewards and
                    incentives.
                  </Text>
                </div>
                <Button className="border-2 border-blue_gray-800 border-solid cursor-pointer font-bold min-w-[286px] py-[17px] rounded-[28px] text-blue_gray-800 text-center text-lg tracking-[0.09px]">
                  Become an Ambassador
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-14 items-center justify-start w-auto md:w-full">
              <div className="flex flex-col gap-12 items-center justify-start w-auto md:w-full">
                <Text
                  className="text-base text-gray-900 tracking-[0.08px] uppercase w-auto"
                  size="txtUbuntuMedium16"
                >
                  Charity Services
                </Text>
                <Text
                  className="leading-[45.00px] max-w-[908px] md:max-w-full text-center text-gray-900 text-lg tracking-[0.09px]"
                  size="txtUbuntuRegular18Gray900"
                >
                  Supporting blockchain and other projects through charitable
                  donations is a way to contribute funds towards meaningful
                  causes. These donations can be used to raise funds for health
                  emergencies and disasters, providing much-needed assistance in
                  times of crisis.
                </Text>
              </div>
              <Text
                className="text-blue_gray-800 text-xl tracking-[0.10px] uppercase w-auto"
                size="txtUbuntuBold20"
              >
                Donate now
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-14 items-center justify-start w-auto md:w-full">
            <div className="flex flex-col gap-12 items-center justify-start w-auto md:w-full">
              <Text
                className="text-base text-gray-900 tracking-[0.08px] uppercase w-auto"
                size="txtUbuntuMedium16"
              >
                Assistance
              </Text>
              <Text
                className="leading-[24.00px] max-w-[832px] md:max-w-full text-center text-gray-900 text-lg tracking-[0.09px]"
                size="txtUbuntuRegular18Gray900"
              >
                Are you facing tight deadlines and require assistance with
                various tasks such as completing surveys, watching videos and
                more? Look no further! Our platform offers an affordable
                solution for you. Simply upload your tasks and relax while our
                team takes care of them.
              </Text>
            </div>
            <Text
              className="text-blue_gray-800 text-xl tracking-[0.10px] uppercase w-auto"
              size="txtUbuntuBold20"
            >
              Upload task
            </Text>
          </div>
        </div>
        <Footer className="bg-white-A700 flex items-center justify-center mt-52 md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomePagePage;
