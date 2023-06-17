import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SerachInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={30}
        placeholder="Search the game..."
        variant="filled"
      ></Input>
    </InputGroup>
  );
};

export default SerachInput;
