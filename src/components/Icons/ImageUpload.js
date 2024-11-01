import React from "react";
import {Button,useColorModeValue} from "@chakra-ui/react";
import ImageUploading from 'react-images-uploading';

export default function ImageUploads(props) {
  const { action,buttonTexts,acceptTypes} = props;
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );
  return (
   <ImageUploading
   onChange={action}
    dataURLKey="data_url"
    acceptTypes={acceptTypes}
  >
{({
      imageList,
      onImageUpload,
            }) => (
      // write your building UI
      <div className="upload__image-wrapper">
       
        <Button
             bg={bgButton}
             color="white"
             fontSize="xs"
             variant="no-hover"
            onClick={onImageUpload}
            
           >
           {buttonTexts}
           </Button>
      </div>
    )}
  </ImageUploading>
  );
}
