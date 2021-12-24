import { getStrapiMedia } from "../lib/media";
import Image from 'next/image';

const Images = ({ image }) => {
  const imageUrl = getStrapiMedia(image);
  const { url, alternativeText } = image
  const loader = () => {
    return getStrapiMedia(image)
  }

  return (
    <Image
      loader={loader}
      src={imageUrl}
      alt={image.alternativeText || image.name}
      width={900}
      height={700}
      Layout='responsive'
      Loading="lazy"
      className="object-cover imagecss"
    />
  );
};

export default Images;