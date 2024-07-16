import Link from 'next/link';
import { useState } from 'react';

interface buttonProps {
    showGreenImage: boolean;
    link: string,
  }



const ConditionalButton: React.FC<buttonProps> = ({
    showGreenImage, link,
}) => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true); // Update state to show submitted text
    };
    if (showGreenImage){
        return (
            <Link href={link}><button className="px-5 py-2 bg-cyan-50 hover:bg-cyan-500 rounded-full">Submit</button></Link>
        )
    } else {
        return (
            <div>
                {submitted && <p className='text-red-500'>Wrong Key</p>}
                <button onClick={handleSubmit} className="px-5 py-2 bg-cyan-50 hover:bg-cyan-500 rounded-full">Submit</button>
                
            </div>
        ) 
    }
};

export default ConditionalButton;