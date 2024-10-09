import Layout from "@/layout/Layout"
import Head from "@/components/Head"

const AboutPage = () => {
    return (
        <Layout>
            <div className="min-h-screen container mx-auto px-2 my-6">
                <Head title="About Us" />
                <div className="xl:py-20 py-10 px-4">
                    <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
                        <div className="flex-cols">
                            <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                                Welcome to our Movie
                            </h3>
                            <div className="mt-3 text-sm leading-8 text-text">
                                <p>
                                    we believe that every story deserves to be told. Our passion for filmmaking drives us to create captivating narratives that resonate with audiences around the world. With a diverse team of talented writers, directors, and producers, we are dedicated to pushing the boundaries of creativity and innovation in the film industry.
                                    <br />
                                    Our journey began with a simple dream: to bring unique and compelling stories to life. From gripping dramas to light-hearted comedies, we embrace a wide range of genres that inspire and entertain. We strive not only to create films but to foster a community of movie lovers who appreciate the art of storytelling.
                                    <br />
                                    Join us as we explore the magic of cinema, delve into the human experience, and celebrate the power of imagination. Together, we can make memories that will last a lifetime on the silver screen.
                                    <br />
                                    Thank you for being a part of our adventure!
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="p-8 bg-dry rounded-lg">
                                    <span className="text-3xl block font-extrabold mt-4">
                                        10 k
                                    </span>
                                    <h4 className="text-lg font-bold mb-1">
                                        Listed Movies
                                    </h4>
                                    <p className="mb-0 text-text leading-7 text-sm">
                                        This is a continuously updated collection of the latest films, providing viewers with an extensive library of titles.
                                    </p>
                                </div>
                                <div className="p-8 bg-dry rounded-lg">
                                    <span className="text-3xl block font-extrabold mt-4">
                                        2 M
                                    </span>
                                    <h4 className="text-lg font-bold mb-1">
                                        Lovely Users
                                    </h4>
                                    <p className="mb-0 text-text leading-7 text-sm">
                                        A popular movie website with 2 million users.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <img src="/images/aboutus.jpg" alt="About Us" className="w-full xl:h-header rounded-lg object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage