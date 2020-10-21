import React, { useState, useEffect } from "react";

function Card({ data }) {
  const [color, setColors] = useState({});

  useEffect(() => {
    cardColor();
  }, []);

  function cardColor() {
    let classes, typeColor, subTypeColor;

    switch (data.type) {
      case "Browser":
        classes = "bg-black";
        typeColor = "text-yellow-300"
        subTypeColor = "text-white"
        break;
      case "Framework":
        classes = "bg-teal-600";
        typeColor = "text-yellow-300"
        subTypeColor = "text-white"
        break;
      case "DevTools":
        classes = "bg-red-600";
        typeColor = "text-white"
        break;
      case "Databases":
        classes = "bg-yellow-300";
        typeColor = "text-gray-700"
        break;
      default:
        classes = "bg-purple-600";
        typeColor = "text-yellow-300";
        subTypeColor  = "text-gray-100"
        break;
    }
    setColors({ cardColor: classes , titleText:typeColor, subTitle:subTypeColor});

    return classes;
  }

  return (
    <div className="my-2 px-2 w-1/2 overflow-hidden sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="rounded h-full flex justify-center items-center">
        <div
          className={`rounded shadow-md h-48 w-48 p-6 flex flex-col justify-around ${color.cardColor}`}
        >
          <div>
            <p className={`text-base ${color.titleText}`}>{data.type}</p>
          </div>
          <div>
            <p className={`text-2xl ${color.subTitle}`}>{data.name}</p>
          </div>
          {/* <div class="text-sm">
            <p class="text-green-500 mb-1 flex item-center">
              <i class="material-icons">arrow_drop_up</i> 5.77%
            </p>
            <p class="text-gray-600">Since last month</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
