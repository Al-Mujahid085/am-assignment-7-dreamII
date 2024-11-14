import PropTypes from "prop-types";
import profileIcon from "../../assets/user-image-with-black-background.png";
import flag from "../../assets/white-flag.png";

const P = ({ player ,handleSelectedP, handleSelectedPCount , hidePCart}) => {
    const { name, country, batting_hand, price, image, bowling_technique } = player;
    return (
        <div className="border p-4 rounded-xl text-sm space-y-2 font-semibold text-black">
            <div className="h-[205px] overflow-hidden rounded-xl"><img src={image} className="w-full " alt="" /></div>

            <div className="flex items-center gap-3"><p><img src={profileIcon} className="w-7" alt="" /></p> <p className="text-base font-bold text-black"> {name}</p></div>

            <div className="flex justify-between items-center "><div className="flex items-center gap-3"><img className="w-7" src={flag} alt="" /> <p className="text-gray-500"> {country}</p></div><p>All-Rounder</p></div>

            <div className="space-y-0">
                <div className="flex justify-between">
                    <p>Rating:</p>
                    <div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div></div></div>
                <div className="flex justify-between"> <p className="text-gray-500">{batting_hand} Bat</p><p>{bowling_technique}</p></div>
                <div className="flex justify-between items-center"><p>Price: {price} </p> <button className="btn text-amber-500 border-amber-500 bg-pink-100"  onClick={()=>{handleSelectedPCount(player) , handleSelectedP(player) , hidePCart(player)}
                    }>Choose Player</button></div>
            </div>
        </div>
    );
};


P.propTypes = {
    player: PropTypes.object.isRequired,
    handleSelectedP: PropTypes.func,
    handleSelectedPCount: PropTypes.func,
    hidePCart: PropTypes.func
}
export default P