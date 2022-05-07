import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import { RiGlobalLine } from "react-icons/ri";


const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Services That We
          <br />
          Continue To Improve
        </h1>
        <p className="text-left my-2 text-white font-light md:w-12/12 w-10/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer.
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security Gurantee"
          icon={<BsShieldFillCheck fontSize={25} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and also maintaining the quality of our products."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best Exchange Rates"
          icon={<BiSearchAlt fontSize={25} className="text-white" />}
          subtitle="Krypton charges 0.875% or lower on crypto trades, and unlike many other brokerages enables users to transfer crypto to a personal wallet."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest Transactions"
          icon={<RiSendPlaneFill fontSize={25} className="text-white" />}
          subtitle="There have been numerous altcoin projects developed as a means of improving the scalability as well as the transaction speed found within the Ethereum (ETH) blockchain networks."
        />
        <ServiceCard
          color="bg-[#072136]"
          title="Around The Globe"
          icon={<RiGlobalLine fontSize={25} className="text-white" />}
          subtitle="Use Krypton to purchase NFT's, Cryptocurrency, Real-Estate etc from anywhere using our application. We also provide CryptoManiac to view the trending crypto coins."
        />
      </div>
    </div>
  </div>
);

export default Services;
