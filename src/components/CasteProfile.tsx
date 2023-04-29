import { Box, Image, Tooltip } from "@chakra-ui/react";
import { CasteProfileProps } from "../utils/movies-bucket";

const CasteProfile = ({ _caste }: CasteProfileProps) => {
  return (
    <Tooltip label={`${_caste.name} as ${_caste.role}`} key={_caste.name}>
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
  );
};

export default CasteProfile;
