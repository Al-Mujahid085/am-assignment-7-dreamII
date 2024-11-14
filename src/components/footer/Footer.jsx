
import footerimg from "../../assets/logo-footer.png"
const Footer = () => {
    return (
        <>
        <div className="gap-16 pt-48 flex flex-col items-center w-10/12 mx-auto border-b border-gray-900 pb-20">
            <div><img src={footerimg} alt="" /></div>
            <div className="grid grid-cols-3 ">
                <div className="space-y-4 pr-20">
                    <h3 className="text-lg text-white ">About Us</h3>
                    <p className="text-gray-400 text-sm leading-loose">We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className="pr-32 space-y-4" >
                    <h3 className="text-lg text-white ">Quick Links</h3>
                    <ul className="text-sm text-gray-400 list-disc list-inside space-y-4">
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>

                <div className="pr-28 space-y-4">
                    <h3 className="text-lg text-white ">Subscribe</h3>
                    <p className="text-sm text-gray-400 pr-8 leading-loose">Subscribe to our newsletter for the latest updates.</p>
                
                        <form action="" className=" flex stretch border-none">
                            <input type="email" className="rounded-l-lg    border-black px-4 " name="" id="" placeholder="Enter your email" />
                            <button className="btn btn-gradiant rounded-l-none border-none">Subscribe</button>
                        </form>

                    
                </div>
            </div>

        </div>
        <p className="text-base text-gray-600 text-center py-8">@2024 Your Company All Rights Reserved.</p>
        </>
        
    );
};

export default Footer;