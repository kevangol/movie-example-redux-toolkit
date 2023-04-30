import { Flex, Box, Icon, Badge, Text, Stack } from "@chakra-ui/react";

import { MdWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex
      bgGradient="linear(to-l, #1C82AD, #13005A)"
      width={"100%"}
      h={"16"}
      align={"center"}
      boxShadow={"sm"}
      position={"sticky"}
      top={"0"}
      zIndex={"1"}
    >
      <Box w={"50%"} pl={"20px"}>
        <Text as={"h1"} fontSize={"2xl"} color={"#fff"} cursor={"pointer"}>
          <Link to={"/"}>BookShow</Link>
        </Text>
      </Box>
      <Flex w={"50%"} align={"center"} justify={"flex-end"} pr={"20px"}>
        <Stack direction={"row"} gap={"20px"}>
          <Link to={"/watch-later"}>
            <Icon
              as={MdWatchLater}
              color={"#fff"}
              w={30}
              h={7}
              cursor={"pointer"}
            />
          </Link>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Header;
