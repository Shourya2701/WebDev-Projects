import { Parallax } from 'react-parallax';
import spaceStation from "../assets/img/spaceStation.jpeg"

const ImageThree = () => (
    <Parallax className='image' bgImage={spaceStation} bgImageAlt="Nasa" strength={800}>
        <div className='content'>
            <span className='img-txt'>A trip to Space</span>
        </div>
        <div style={{ height: '200px' }} />
    </Parallax>
);

export default ImageThree;