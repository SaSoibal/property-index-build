import { ENVIRONMENT } from "../config/environment/environment";
import img from '../asstes/images/banner.jpg'

export default function DynamicBackground({ imageUrl, children }) {
    const imgUrl = imageUrl ? ENVIRONMENT.FILE_URL + imageUrl?.image : img;
    const backgroundStyle = {
        background: `url(${imgUrl})`
    };

    return (
        <div className="banner_area" style={backgroundStyle}>
            {children}
        </div>
    );
}