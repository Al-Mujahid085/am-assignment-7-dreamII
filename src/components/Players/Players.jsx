import PropTypes from "prop-types";
import AvailableP from "../available/AvailableP";
import SelectedP from "../selected/SelectedP";
import { useEffect, useState } from "react";
import {Zoom, Bounce, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Players = ({ setUsersCoin, usersCoin, handleSelectedPlayers, availablePlayer }) => {
    const [selectedPCount, setSelectedPCount] = useState(0)
    const handleSelectedPCount = (player) => {
        if (player.price < usersCoin && selectedPCount < 6 && selectedPl.every(p => p.name !== player.name)) { setSelectedPCount(selectedPCount + 1) }

    }

    const [selectedPl, setSelectedPl] = useState([]);
    const handleSelectedP = (player) => {
        if (player.price <= usersCoin && selectedPCount < 6 && selectedPl.every(p => p.name !== player.name)) {
            toast.success(<div className="text-xs text-black">
                Congrates, <span className="text-black font-bold text-base">{player.name}</span> is now in your squad.
            </div>, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Flip,
            });
          
            setSelectedPl([...selectedPl, player]);
            setUsersCoin(usersCoin - player.price)
            console.log(player)
            console.log(selectedPl)

        }
        else if(selectedPl.some(p => p.name === player.name)){
            toast.error(<div className="">
                <span className="font-bold text-base text-black"> {player.name } </span>
               is already selected.
            </div>, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
        }
        else if (player.price > usersCoin) {
            toast.error(<div className="text-xs">Sorry, you do not have enough <span className="text-black font-bold">money</span> to buy
                <span className="font-bold text-base text-black"> {player.name}</span>

            </div>, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: Zoom,
            });
        }
        else if (selectedPCount === 6) {
            toast.warn(<div className="text-xs font bold text-black">Sorry, you cant take more than 6 player


            </div>, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
        }
     


    }

    const removePlayer = (player) => {
        const recentSPlayers = selectedPl.filter(p => p.name !== player.name);
        setSelectedPl(recentSPlayers);
        setSelectedPCount(selectedPCount - 1)
        setAllPlayer([...allPlayer, player])
        setUsersCoin(usersCoin + player.price)
        toast.warn(<div className="text-black text-xs">
            <span className="text-sm text-black font-bold">{player.name}</span> has been removed.
        </div>, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    const [allPlayer, setAllPlayer] = useState([]);

    const hidePCart = (playe) => {
        if (playe.price < usersCoin && selectedPCount < 6 && selectedPl.every(p => p.name !== playe.name)) {

            // setAllPlayer(allPlayer.length- 1);
        }
    }
    useEffect(() => {
        fetch('/Players.json')
            .then(res => res.json())
            .then(data => setAllPlayer(data))
    }, [])
    return (
        <div className=" mt-8">

            <div className="flex justify-between sticky top-20 z-20">
                <div className="backdrop-blur-lg bg-gray-400 bg-opacity-50 flex items-center justify-center p-2 rounded-xl overflow-hidden text-black">
                    {
                        availablePlayer.availablePlayer ? <h4 className="text-2xl font-bold">Available Players</h4> : <h4 className="text-2xl font-bold">Selected Players- ({selectedPCount}/6)</h4>
                    }
                </div>

                <div className='border '>

                    <button onClick={() => handleSelectedPlayers("available")}
                        className={`${availablePlayer.availablePlayer ? "btn active bg-yellow-500 font-bold px-6 py-2 rounded-l-xl" : "btn text-gray-600 px-6 py-2"}`}>Available</button>

                    <button onClick={() => handleSelectedPlayers("selected")} className={`${!availablePlayer.availablePlayer ? "btn active bg-yellow-500 font-bold px-6 py-2 rounded-r-xl" : "btn text-gray-600 px-6 py-2"}`}>Selected ({selectedPCount})</button>
                </div>
            </div>
            <div>
                {
                    availablePlayer.availablePlayer ? <AvailableP hidePCart={hidePCart} handleSelectedPCount={handleSelectedPCount} handleSelectedP={handleSelectedP} allPlayer={allPlayer}></AvailableP> : <SelectedP removePlayer={removePlayer} selectedPl={selectedPl} handleSelectedPlayers={handleSelectedPlayers}></SelectedP>
                }
            </div>

        </div>
    );
};
Players.propTypes = {
    availablePlayer: PropTypes.func,
    setUsersCoin: PropTypes.func,
    handleSelectedPlayers: PropTypes.func,
    usersCoin: PropTypes.number
}

export default Players;