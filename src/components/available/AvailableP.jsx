import P from "../playe/P";
import PropTypes from "prop-types";
const AvailableP = ({allPlayer , handleSelectedP, handleSelectedPCount, hidePCart}) => {
    // console.log(allPlayer)
    return (
        <div className="grid grid-cols-3 gap-4 ">
            {
                allPlayer.map(player=><P hidePCart={hidePCart} handleSelectedPCount={handleSelectedPCount} handleSelectedP={handleSelectedP} key={player.name} player={player}></P>)
            }
            
        </div>
        
    );
};

AvailableP.propTypes={
    allPlayer: PropTypes.array.isRequired,
    handleSelectedP:PropTypes.func,
    handleSelectedPCount: PropTypes.func,
    hidePCart: PropTypes.func
}
export default AvailableP;