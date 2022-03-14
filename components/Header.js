import Image from "next/image";
import React from "react";
import HeaderItems from "./HeaderItems";
import {
  BadgeCheckIcon,
  HomeIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems title="Home" Icon={HomeIcon} />
        <HeaderItems title="Trending" Icon={LightningBoltIcon} />
        <HeaderItems title="Verified" Icon={BadgeCheckIcon} />
        <HeaderItems title="Collections" Icon={CollectionIcon} />
        <HeaderItems title="Search" Icon={SearchIcon} />
        <HeaderItems title="Account" Icon={UserIcon} />
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        className="object-contain"
      />
    </header>
  );
};

export default Header;
