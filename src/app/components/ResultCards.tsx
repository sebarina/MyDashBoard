"use client";
import React from "react";
import Image from "next/image";
import { Badge } from "flowbite-react";
import { TbPoint }   from "react-icons/tb";

import { Icon } from "@iconify/react";
import Link from "next/link";

const ResultCardsData = [
  {
    imageUrl: "https://pub-9f4a34b774a84c8594f368550c6e5237.r2.dev/shareIcon.jpg",
    read: "2 min Read",
    title: "As yen tumbles, gadget-loving Japan goes for secondhand iPhones",
    category: "Social",
    name: "Georgeanna Ramero",
    view: "9,125",
    comments: "3",
    time: "Mon, Dec 19",
    url:''
  },
  {
    imageUrl: "https://pub-9f4a34b774a84c8594f368550c6e5237.r2.dev/shareIcon.jpg",
    read: "2 min Read",
    title:
      "Intel loses bid to revive antitrust case against patent foe Fortress",
    category: "Gadget",
    name: "Georgeanna Ramero",
    view: "4,150",
    comments: "38",
    time: "Sun, Dec 18",
    url:''
  },
  {

    imageUrl: "https://pub-9f4a34b774a84c8594f368550c6e5237.r2.dev/shareIcon.jpg",
    read: "2 min Read",
    title: "COVID outbreak deepens as more lockdowns loom in China",
    category: "Health",
    name: "Georgeanna Ramero",
    view: "9,480",
    comments: "12",
    time: "Sat, Dec 17",
    url:''
  },
];

const ResultCards = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-30">
        {ResultCardsData.map((item, i) => (
          <div className="lg:col-span-4 col-span-12" key={i}>
            <Link href={item.url} className="group">
            <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-0 relative w-full break-words overflow-hidden">
                <div className="relative w-[100%] h-[300px]">
                  <Image src={item.imageUrl} alt="matdash" 
                  className="object-cover overflow-hidden"
                  fill
            
                  />
              
                </div>

                <div className="px-6 pb-6">
                  <Badge color={"muted"} className="mt-6 font-semibold rounded-sm bg-muted">
                    {item.category}
                  </Badge>
                  <h5 className="text-lg my-6 group-hover:text-primary line-clamp-2">{item.title}</h5>
                  <div className="flex">
                    <div className="flex gap-2 me-6 items-center">
                    <Icon icon="solar:eye-outline" height="18" className="text-dark" />
                      <span className="text-sm text-darklink">{item.view}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                    <Icon icon="solar:chat-line-outline" height="18" className="text-dark" />
                      <span className="text-sm text-darklink">{item.view}</span>
                    </div>
                    <div className="flex gap-1 items-center ms-auto">
                      <TbPoint
                        size={15}
                        className="text-dark"
                      />{" "}
                      <span className="text-sm text-darklink">{item.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResultCards;
