import PropTypes from "prop-types";
import SingleSP from "../singleSelectedP/SingleSP";

const SelectedP = ({handleSelectedPlayers,selectedPl, removePlayer}) => {
   
    return (
        <div className="text-5xl mt-3">
            {
                selectedPl.map(player=><SingleSP key={player.name} removePlayer={removePlayer} player={player}></SingleSP>)
            }
           <button onClick={() => handleSelectedPlayers("available")} className="btn bg-yellow-300 text-black font-bold">Add More Player</button>
        </div>
    );
};

SelectedP.propTypes={
    selectedPl:PropTypes.array.isRequired,
    handleSelectedPlayers:PropTypes.func,
    removePlayer:PropTypes.func
}
export default SelectedP;