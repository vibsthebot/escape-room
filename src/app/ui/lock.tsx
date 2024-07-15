import Image from 'next/image'

interface ImageProps {
    showGreenImage: boolean;
    greenImagePath?: string; // Optional path to green image
    redImagePath?: string; // Optional path to red image
  }

const ConditionalImage: React.FC<ImageProps> = ({
    showGreenImage,
  greenImagePath = '/green_lock.png', // Default green image path
  redImagePath = '/red_lock.png', // Default red image path
}) => {
    
  const imageSrc = showGreenImage ? greenImagePath : redImagePath;

  return (
    <Image src={imageSrc} width={50} height={50} alt="Lock image (could be red or green)" />
  );
};

export default ConditionalImage;