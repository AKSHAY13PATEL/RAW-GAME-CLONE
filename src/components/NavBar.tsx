import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SerachInput from "./SerachInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to={"/"}>
        <Image src={logo} boxSize="10" objectFit={"cover"} />
      </Link>
      <SerachInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
