import { Flex, Text } from "@chakra-ui/react";
import { CustomButtonProps } from "../Types/types";

const CustomButton = ({
  onClick,
  buttonTitle,
  watchLater,
}: CustomButtonProps): JSX.Element => {
  return (
    <Flex
      bgGradient={
        !watchLater
          ? "linear(to-l, #1C82AD, #13005A)"
          : "linear(to-l,#F9D949, #F45050)"
      }
      w={"200px"}
      h={"35px"}
      borderRadius={"10px"}
      align={"center"}
      justify={"center"}
      transition={"all 1s ease"}
      cursor={"pointer"}
      _hover={{ boxShadow: "dark-lg" }}
      onClick={onClick}
    >
      <Text
        textTransform={"uppercase"}
        fontWeight={"bold"}
        fontSize={"sm"}
        userSelect={"none"}
        color={"#fff"}
      >
        {watchLater ? "already in watch later" : buttonTitle}
      </Text>
    </Flex>
  );
};

export default CustomButton;
