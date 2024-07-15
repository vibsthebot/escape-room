import Image from 'next/image'
import Link from 'next/link';

interface buttonProps {
    showGreenImage: boolean;
  }

const ConditionalButton: React.FC<buttonProps> = ({
    showGreenImage,
}) => {
    
    if (showGreenImage){
        return (
            <Link href={"/page2"}><button type="submit" className="px-5 py-2 bg-cyan-50 hover:bg-cyan-500 rounded-full">Submit</button></Link>
        )
    } else {
        return (
            <button type="submit" className="px-5 py-2 bg-cyan-50 hover:bg-cyan-500 rounded-full">Submit</button>
        ) 
    }
};

export default ConditionalButton;