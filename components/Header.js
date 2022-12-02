import Image from "next/legacy/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/24/outline"; 
function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl ">
        {/*Left*/}
        <div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            // layout="fill"
            width={150}
            height={60}
            // objectFit="contain"
            alt=""
          />
        </div>

        {/*Middle*/}

        <div>
          <div className="h-5 w-5">
            <SearchIcon />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        {/*Right*/}
      </div>
    </div>
  );
}

export default Header;
