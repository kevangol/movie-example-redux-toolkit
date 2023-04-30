import { Flex, Box, Icon, Container, Image, Stack } from "@chakra-ui/react";
import Header from "./components/Header";
import MoviesList from "./utils/movies-bucket";
import { RxDoubleArrowRight } from "react-icons/rx";
import CustomButton from "./components/CustomButton";
import CasteProfile from "./components/CasteProfile";
import ReviewRating from "./components/ReviewRating";
import TitlesAndDescriptions from "./components/TitlesAndDescription";
import { useDispatch, useSelector } from "react-redux";
import { MovieListModel } from "./Types/types";
import { addToWatchLater } from "./redux/feature/watchLaterReducer";
import { ToastContainer, toast } from "react-toastify";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const mediaDataSelector = useSelector(
    (state: any) => state.watchLater.mediaData
  );

  const IdentifyWatchLater = (_item: MovieListModel) => {
    return mediaDataSelector.some(
      (_elements: any) => _elements.medianame === _item.movieName
    );
  };

  const clickHandler = (_identity: number, _item: MovieListModel) => {
    const dataAvailability: boolean = mediaDataSelector.some(
      (_elements: any) => _elements.medianame === _item.movieName
    );
    if (!dataAvailability) {
      toast.success(`${_item.movieName} is successfully add in watch later !`);
      return dispatch(
        addToWatchLater({
          identity: (Math.random() * 1000) / 10 + 100,
          medianame: _item.movieName,
          image: _item.movieImage,
        } as any)
      );
    }
    return toast.info(`${_item.movieName} is already in watch later !`);
  };

  return (
    <Container maxW={"100%"} p={"0"}>
      <Header />
      <Container maxW={"70%"} p={"0"}>
        {MoviesList.map((_item: any, _identity: number) => (
          <Flex
            key={_item.movieName}
            mt={"5"}
            mb={"5"}
            bg={"blackAlpha.100"}
            h={"300px"}
            borderRadius={"20px"}
            overflow={"hidden"}
          >
            <Box h={"inherit"} w={"30%"}>
              <Box h={"inherit"} w={"100%"} overflow={"hidden"}>
                <Image
                  src={_item.movieImage}
                  transition={"all 2s ease"}
                  _hover={{ transform: "scale(1.5)" }}
                />
              </Box>
            </Box>
            <Box pl={"6"} pt="2">
              <TitlesAndDescriptions _item={_item} />

              <Stack
                direction="row"
                gap={"10px"}
                mt={"4"}
                alignItems={"center"}
              >
                {_item.cast.map((_caste: any, _index: number) => (
                  <CasteProfile _caste={_caste} key={_caste.name} />
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
                <ReviewRating _item={_item} />
                <CustomButton
                  buttonTitle="add to watch later"
                  onClick={() => clickHandler(_identity, _item)}
                  watchLater={IdentifyWatchLater(_item)}
                />
              </Flex>
            </Box>
          </Flex>
        ))}
      </Container>
    </Container>
  );
};

export default App;
