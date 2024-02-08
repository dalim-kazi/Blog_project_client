import React from "react";
import { FaMoon } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar fluid rounded className="border-b-2">
      <Navbar.Brand>
        <Link className="font-bold">
          <span className="px-5 py-1 rounded-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 self-center whitespace-nowrap text-xl dark:text-white">
            Dalim
          </span>
          Blog
        </Link>
      </Navbar.Brand>
      <form>
        <TextInput
          type="text"
          placeholder="Search...."
          rightIcon={IoSearchOutline}
          className=" hidden lg:block"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <IoSearchOutline />
      </Button>
      <div className="flex items-center gap-2 md:order-2">
        <Button className="w-12 h-10 hidden md:block" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to={"/signIn"}>
          <Button gradientDuoTone="purpleToBlue" pill>
            SignIn
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      {/* <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div> */}
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} className="text-xl" as={"div"}>
          <Link to={"/"}>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} className="text-xl" as={"div"}>
           <Link to={"/about"}>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} className="text-xl" as={'div'}>
         <Link to={"/projects"}>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
