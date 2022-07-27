
import { PropTypes } from 'prop-types';

const GifGridItem = ({ img }) => {

    return (
        <div className="w-full md:w-1/3 px-2 my-2" >
            <div className="rounded-md border">
                <img src={img.url} alt="desc to img" className="rounded-t-md h-72 object-cover mx-auto" />
                <p className="p-2 text-ellipsis w-full">
                    {img.title}
                </p>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {
    img: PropTypes.object.isRequired
}

export {
    GifGridItem
}