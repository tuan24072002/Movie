import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Stars = ({ value }) => {
    const fullStars = Math.floor(value);
    const halfStar = value % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <>
            {Array(fullStars).fill().map((_, index) => (
                <span key={index}><FaStar /></span>
            ))}
            {halfStar && <span><FaStarHalfAlt /></span>}
            {Array(emptyStars).fill().map((_, index) => (
                <span key={index + fullStars + 1}><FaRegStar /></span>
            ))}
        </>
    );
};

export default Stars;
