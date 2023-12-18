import { Parallax } from 'react-parallax';
import Sat from '../images/image 2.jpg'

const Two = () => (
    <Parallax className='image' bgImage={Sat} strength={800}>
        <div className='content'>
            <span className='img-txt'>A trip to space</span>
        </div>
    </Parallax>
);
export default Two
