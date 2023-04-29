import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { GoStar } from "react-icons/go";
import { ReviewRatingProps } from "../Types/types";

const ReviewRating = ({ _item }: ReviewRatingProps): JSX.Element => (
  <Flex align={"center"} justify={"center"} direction="column">
    <Stack direction={"row"} align={"center"}>
      <Icon as={GoStar} color={"#0B2447"} h={8} w={8} />
      <Text fontSize={"4xl"} fontWeight={"bold"}>
        {_item.reviews.rating}
      </Text>
    </Stack>
    <Stack>
      <Text fontWeight={"semibold"}>{_item.reviews.totalRatings} Ratings</Text>
    </Stack>
  </Flex>
);

export default ReviewRating;
