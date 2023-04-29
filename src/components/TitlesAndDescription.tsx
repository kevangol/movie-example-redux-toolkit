import { Stack, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { TitlesAndDescriptionsProps } from "../Types/types";

const TitlesAndDescriptions = ({ _item }: TitlesAndDescriptionsProps) => (
  <Fragment>
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
  </Fragment>
);

export default TitlesAndDescriptions;
