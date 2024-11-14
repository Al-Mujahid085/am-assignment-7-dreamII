import logo from '../../../assets/logo.png'
import coin from '../../../assets/icons8-coin-48.png'
import PropTypes from 'prop-types';
const Navbar = ({usersCoin}) => {
  
    return (
        
        <div className="flex justify-between items-center pt-2 pb-6 sticky top-0   bg-white bg-opacity-50 backdrop-blur-lg z-10 ">
            <div><img src={logo} alt="" /></div>
            <div className='flex gap-8 text-sm text-gray-600 items-center'>
                <a href="">Home</a>
                <a href="">Fixture</a>
                <a href="">Teams</a>
                <a href="">Schedules</a>
                <p className=' text-black font-bold flex items-center gap-2 border px-4 py-2 rounded-lg'>
                    {usersCoin} <span className='text-amber-500'>Coin</span>  <img src={coin} alt="" className='h-8'/></p>
            </div>
        </div>
    );
};
Navbar.propTypes={
    usersCoin: PropTypes.number.isRequired
}
export default Navbar;