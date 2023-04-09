import { Flex, Box, Icon, Badge, Text, Stack } from "@chakra-ui/react";

import { MdOutlineNotificationsActive, MdShop } from "react-icons/md";

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
        <Text as={"h1"} fontSize={"2xl"} color={"#fff"}>
          BookShow
        </Text>
      </Box>
      <Flex w={"50%"} align={"center"} justify={"flex-end"} pr={"20px"}>
        <Stack direction={"row"} gap={"20px"}>
          <Icon
            as={MdOutlineNotificationsActive}
            color={"#fff"}
            h={7}
            w={30}
            transform={"rotate(30deg)"}
          />
          <Icon as={MdShop} color={"#fff"} w={30} h={7} />
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Header;
