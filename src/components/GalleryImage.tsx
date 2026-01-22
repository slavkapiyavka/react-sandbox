import { CONSTANTS } from "../core/constants";
import type { TGalleryImage } from "../core/types";

const GalleryImage = ({ url, alt, size }: TGalleryImage) => {
  return (
    <img
      width={size?.width ?? CONSTANTS.IMAGE_WIDTH}
      height={size?.height ?? CONSTANTS.IMAGE_HEIGHT}
      src={url}
      alt={alt}
    />
  );
};

export default GalleryImage;
