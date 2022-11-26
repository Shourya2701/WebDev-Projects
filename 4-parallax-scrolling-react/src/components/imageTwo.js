import { Parallax } from 'react-parallax';
import Satellite from "../assets/img/satellite.jpeg"

const ImageTwo = () => (
    <Parallax className='image' bgImage={Satellite} bgImageAlt="Nasa" strength={800}>
        <div className='content'>
            <span className='img-txt'>A trip to Space</span>
        </div>
        <div style={{ height: '200px' }} />
    </Parallax>
);

export default ImageTwo;