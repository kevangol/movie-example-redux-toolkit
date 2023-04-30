import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPlayFill } from "react-icons/bs";
import { Fragment } from "react";
import Header from "./components/Header";
import { deleteWatchLater } from "./redux/feature/watchLaterReducer";
import { toast } from "react-toastify";

const WatchLater = (): JSX.Element => {
  const dispatch = useDispatch();

  const mediaDataSelector = useSelector(
    (state: any) => state.watchLater.mediaData
  );

  const clickHandler = (movieName: string) => {
    toast.warning(`${movieName} is removed from watch later !`);
    dispatch(
      deleteWatchLater(
        mediaDataSelector.filter((_item: any) => _item.medianame !== movieName)
      )
    );
  };

  return (
    <Fragment>
      <Header />
      <Stack padding={"10"}>
        {mediaDataSelector.length > 0 ? (
          mediaDataSelector.map((_elements: any, _identity: any) => (
            <Flex maxH={100}>
              <Box
                maxH={100}
                maxW={100}
                overflow={"hidden"}
                borderRadius={"md"}
                position={"relative"}
              >
                <Image src={_elements.image} />
                <Box position={"absolute"} bg={"#000"}>
                  <BsFillPlayFill color="#ffffff" />
                </Box>
              </Box>
              <Flex alignItems={"flex-start"} padding={"3"}>
                <Stack>
                  <Text
                    fontWeight={"bold"}
                    fontSize={"1xl"}
                    textTransform={"uppercase"}
                  >
                    {_elements.medianame}
                  </Text>
                  <Flex gap={"10px"}>
                    <Text
                      fontWeight={"bold"}
                      fontSize={"sm"}
                      color={"green.300"}
                      cursor={"pointer"}
                      userSelect={"none"}
                    >
                      Play now
                    </Text>
                    <Text
                      fontWeight={"bold"}
                      fontSize={"sm"}
                      color={"red.400"}
                      cursor={"pointer"}
                      userSelect={"none"}
                      onClick={() => clickHandler(_elements.medianame)}
                    >
                      Remove
                    </Text>
                  </Flex>
                </Stack>
              </Flex>
            </Flex>
          ))
        ) : (
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            No Watch Later
          </Text>
        )}
      </Stack>
    </Fragment>
  );
};

export default WatchLater;
