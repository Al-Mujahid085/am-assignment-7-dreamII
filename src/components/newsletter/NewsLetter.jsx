

const NewsLetter = () => {
    return (
        <div className="relative top-40">
            <div className="p-4 border rounded-2xl bg-opacity-25 bg-white">
                <div className=" space-y-4 newsletter-bg bg-yellow-50 py-24 rounded-2xl   flex flex-col items-center ">
                    <h2 className="text-3xl text-black font-bold">Subscribe to our Newsletter</h2>
                    <p className="text-lg   text-gray-800">Get the latest updates and news right in your inbox!</p>
                    <div className="">
                        <form action="" className=" flex stretch">
                            <input type="email" className="rounded-xl lg:order w-96 border border-gray-500 px-4 " name="" id="" placeholder="Enter your email" />
                            <button className="btn btn-gradiant">Subscribe</button>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
