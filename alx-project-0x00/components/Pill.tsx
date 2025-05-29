// const Pill: React.FC = () => {
//   return (
//     <div className=" flex justify-center  items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
//       <p className=" text-sm ">Title</p>
//     </div>
//   )
// }

// export default Pill;

import React from "react";

interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <span className="px-3 py-1 bg-gray-700 text-sm rounded-full font-medium">
      {title}
    </span>
  );
};

export default Pill;