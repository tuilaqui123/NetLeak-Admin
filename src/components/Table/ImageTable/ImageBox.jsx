import img from '../../../assets/img.jpg'

const ImageBox = ({ele}) => {
    return (
        <div className="w-full flex flex-col items-center ">
        <div className="flex-grow flex items-center justify-center rounded-md  bg-[#7883a1]">
            <img
                src={ele.avatar}
                className="w-full h-auto"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
        </div>
        <p className="py-5 font-bold">{ele.name}</p>
    </div>
    );
}

export default ImageBox;