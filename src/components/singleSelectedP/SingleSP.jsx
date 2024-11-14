import PropTypes from "prop-types";
import deleteI from "../../assets/delete.png"
const SingleSP = ({ player, removePlayer }) => {
    const { name, image, role ,price} = player;
    return (

        <div className="mb-6 border-b-2 shadow-lg p-5">

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 ">
                    <div className="h-20 w-20 rounded-xl overflow-hidden">
                        <img src={image} className="" alt="" />
                    </div>
                    <div className=" flex  flex-col justify-between">
                        <p className="text-xl font-bold text-black ">{name}</p>
                        <p className="text-sm">{role}</p>
                        <p className="text-xs text-black font-bold">$ {price}</p>
                    </div>
                </div>
                <div className="h-10 w-10">
                    <button onClick={() => removePlayer(player)}>
                        <img src={deleteI} className="w-full" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};
SingleSP.propTypes = {
    player: PropTypes.object,
    removePlayer: PropTypes.func
}
export default SingleSP;