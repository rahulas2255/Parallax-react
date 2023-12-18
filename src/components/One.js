import { Parallax } from 'react-parallax';
import Earth from '../images/image 3.jpg'

const One = () => (
    <Parallax className='image' bgImage={Earth} strength={800}>
        <div className='content'>
            <span className='img-txt'>EXPLORE SPACE</span>
        </div>
    </Parallax>
);
export default One