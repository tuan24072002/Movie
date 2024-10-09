import { FiUser } from "react-icons/fi";

const Promos = () => {
    return (
        <div className="my-20 py-10 md:px-20 px-8 bg-dry">
            <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
                <div className="flex lg:gap-10 gap-6 flex-col">
                    <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
                        Download Your Movies & Watch Offline. <br />
                        Enjoy on Your Mobile
                    </h1>
                    <p className="text-text text-sm xl:text-base leading-6 xl:leading-8">
                        Download your favorite movies and enjoy them anytime,
                        anywhere without an internet connection.
                        Experience the convenience of watching on your mobile device,
                        whether {"you're"} commuting, traveling, or relaxing at home.
                        Never miss a moment of your beloved films!
                    </p>
                    <div className="flex gap-4 md:text-lg text-sm">
                        <div className="flex-cols bg-black text-submain px-6 py-3 rounded font-bold">
                            HD 4k
                        </div>
                        <div className="flex-rows gap-4 bg-black text-submain px-6 py-3 rounded font-bold">
                            <FiUser /> 10k
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="/images/mobile.png" alt="Mobile App" className="w-full object-contain" />
                </div>
            </div>
        </div>
    )
}

export default Promos