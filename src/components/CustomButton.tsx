import { Flex, Text } from "@chakra-ui/react";
import { CustomButtonProps } from "../utils/movies-bucket";

const CustomButton = ({
  onClick,
  buttonTitle,
}: CustomButtonProps): JSX.Element => {
  return (
    <Flex
      bgGradient="linear(to-l, #1C82AD, #13005A)"
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
        {buttonTitle}
      </Text>
    </Flex>
  );
};

export default CustomButton;
