import { Parallax } from 'react-parallax';
import Nasa from "../assets/img/nasa.jpg"

const ImageOne = () => (
    <Parallax className='image' bgImage={Nasa} bgImageAlt="Nasa" strength={800}>
        <div className='content'>
            <span className='img-txt'>A trip to Space</span>
        </div>
        <div style={{ height: '200px' }} />
    </Parallax>
);

export default ImageOne;