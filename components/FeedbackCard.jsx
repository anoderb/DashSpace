import { quotes } from "@/public/assets";
import Image from "next/image";

const FeedbackCard = ({ content, name, title, }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <p className="font-poppins font-normal text-[14px] leading-[32.4px] text-white ">
      {content}
    </p>

    <div className="flex flex-row">
      <div className="flex flex-col">
        <h4 className="font-poppins font-semibold text-[24px] leading-[38px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[10px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);


export default FeedbackCard;
