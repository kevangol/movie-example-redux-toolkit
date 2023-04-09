import {
  Flex,
  Box,
  Icon,
  Text,
  Container,
  Image,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import Header from "./components/Header";
import MoviesList from "./utils/movies-bucket";
import { RxDoubleArrowRight } from "react-icons/rx";
import { GoStar } from "react-icons/go";

const App = () => {
  return (
    <Container maxW={"100%"} p={"0"}>
      <Header />
      <Container maxW={"70%"} p={"0"}>
        {MoviesList.map((_item: any, _identity: number) => (
          <Flex
            mt={"5"}
            bg={"blackAlpha.100"}
            h={"300px"}
            borderRadius={"20px"}
            overflow={"hidden"}
          >
            <Box h={"inherit"} w={"30%"}>
              <Box h={"inherit"} w={"100%"} overflow={"hidden"}>
                <Image
                  src={_item.movieImage}
                  transition={"all 1s ease"}
                  _hover={{ transform: "scale(1.5)" }}
                />
              </Box>
            </Box>
            <Box pl={"6"} pt="2">
              <Text fontSize={"3xl"} fontWeight={"bold"} m={"0"}>
                {_item.movieName}
              </Text>

              <Stack direction="row" align={"center"}>
                <Text fontSize={"sm"} fontWeight={"semibold"}>
                  CBFC: {_item.cbfc}
                </Text>
                <Text as={"span"}>|</Text>
                <Text fontSize={"sm"} fontWeight={"bold"}>
                  {_item.movieType}
                </Text>
                <Text as={"span"}>|</Text>
                <Text fontSize={"sm"} fontWeight={"bold"}>
                  {_item.duration}
                </Text>
              </Stack>
              <Stack direction="row">
                <Text fontSize={"sm"} fontWeight={"semibold"}>
                  Available in
                </Text>
                <Text fontSize={"sm"} fontWeight={"semibold"}>
                  {_item.language.join(", ")}
                </Text>
              </Stack>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                Released on {_item.releaseData}
              </Text>

              <Stack
                direction="row"
                gap={"10px"}
                mt={"4"}
                alignItems={"center"}
              >
                {_item.cast.map((_caste: any, _index: number) => (
                  <Tooltip label={`${_caste.name} as ${_caste.role}`}>
                    <Box
                      h="16"
                      w={"16"}
                      borderRadius={"100%"}
                      overflow={"hidden"}
                      border={"2px dashed #000"}
                      bg="transparent"
                      boxShadow={"dark-lg"}
                      cursor={"pointer"}
                    >
                      <Image
                        src={_caste.imageLink}
                        alt={_caste.name}
                        w={"100%"}
                        objectFit={"cover"}
                      />
                    </Box>
                  </Tooltip>
                ))}
                <Box>
                  <Icon
                    as={RxDoubleArrowRight}
                    h={5}
                    w={5}
                    cursor={"pointer"}
                  />
                </Box>
              </Stack>
              <Flex mt="2" align={"center"} gap={"4rem"}>
                <Flex align={"center"} justify={"center"} direction="column">
                  <Stack direction={"row"} align={"center"}>
                    <Icon as={GoStar} color={"#0B2447"} h={8} w={8} />
                    <Text fontSize={"4xl"} fontWeight={"bold"}>
                      {_item.reviews.rating}
                    </Text>
                  </Stack>
                  <Stack>
                    <Text fontWeight={"semibold"}>
                      {_item.reviews.totalRatings} Ratings
                    </Text>
                  </Stack>
                </Flex>
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
                >
                  <Text
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    fontSize={"sm"}
                    userSelect={"none"}
                    color={"#fff"}
                  >
                    Add to Watch Later
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        ))}
        <Flex></Flex>
      </Container>
    </Container>
  );
};

export default App;
