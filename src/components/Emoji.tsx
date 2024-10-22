import bullsEye from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) null;

  // the 'emojiMap' - stores the objects that we will later pass to <Image> dynamically
  // ': {}' defines the TYPES of what is being stored in the emojiMap
  // '[key: number] : ' - defines the TYPE of each key (e.g '3:') as being a number dynamically
  // it is saying that for any key that is a number the value will be of ': ImageProps'
  // 'ImageProps' defines the TYPE of each value (e.g. '{ src: meh, alt: 'meh' }') as
  // being an ImageProp(erty) as defined in chakra ui - it is an interface that defines the 'props' /
  // properties available on the image component (e.g. src and alt)
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
    5: { src: bullsEye, alt: 'exceptional', boxSize: '35px' },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
