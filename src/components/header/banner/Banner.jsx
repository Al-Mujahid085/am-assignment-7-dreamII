import PropTypes from 'prop-types';
import './banner.css'
import '../../../index.css'
import bannerImage from '../../../assets/banner-main.png'



const Banner = ({handleUsersCoin}) => {
    return (
        <div className='banner-bg w-full gap-6 bg-black items-center flex flex-col justify-center p-16'>
            <div><img src={bannerImage} alt="" /></div>
            <h1 className='text-4xl font-bold text-gray-200'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='inter font-medium text-gray-400 text-2xl'>Beyond Boundaries Beyond Limits</p>
            <div className='p-2 bg-black border-2 rounded-xl border-yellow-500'><button onClick={handleUsersCoin} className='bg-yellow-500 rounded-xl p-3'>Claim Free Credit</button></div>

            
        </div>
    );
};
Banner.propTypes={
    handleUsersCoin: PropTypes.func
}
export default Banner;