import { BsBookmarkStarFill } from "react-icons/bs"
import Titles from "../Titles"
import { Message, SelectBox } from "../UsedInput"
import { useState } from "react"
import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ReviewsData } from "../../data/ReviewData"
import Stars from "../Stars"

const Ratings = [
    {
        title: "0 - Poor",
        value: 0
    },
    {
        title: "1 - Fair",
        value: 1
    },
    {
        title: "2 - Good",
        value: 2
    },
    {
        title: "3 - Very good",
        value: 3
    },
    {
        title: "4 - Excellent",
        value: 4
    },
    {
        title: "5 - Masterpiece",
        value: 5
    }
]

const MovieRates = ({ movie }) => {
    const [rating, setRating] = useState(0);
    const maxPage = 3;
    const [page, setPage] = useState(maxPage);
    const handleLoadingMore = () => {
        setPage(page + maxPage);
    }
    return (
        <div className="my-12">
            <Titles title="Reviews" Icon={BsBookmarkStarFill} />
            <div className="mt-10 xl:grid flex-cols grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded">
                {/* Write Review */}
                <div className="xl:col-span-2 w-full flex flex-col gap-8">
                    <h3 className="text-xl text-text font-semibold">Review {'"' + movie?.name + '"'}</h3>
                    <p className="text-sm leading-7 font-medium text-border">
                        Write a review for this movie. It will be posted on this page.
                    </p>
                    <SelectBox label="Select rating" options={Ratings} onChange={(e) => setRating(e.target.value)} rating={rating} />
                    <Message label={"Message"} placeholder={"Make it short and sweet ..."} />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-submain text-white w-full py-3 flex-rows rounded">
                        Send
                    </motion.button>
                </div>
                <div className="col-span-3 flex flex-col gap-6">
                    <h3 className="text-xl text-text font-semibold">Reviews ({ReviewsData.length})</h3>
                    <ScrollArea className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header relative">
                        {
                            ReviewsData.slice(0, page).map((review, index) => (
                                <div className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg" key={index}>
                                    <div className="col-span-2 bg-main hidden md:block">
                                        <img src={`/images/casts/${review.image}`} alt={review.fullName} className="w-full h-24 rounded-lg object-cover" />
                                    </div>
                                    <div className="col-span-7 flex flex-col gap-2">
                                        <h2>{review.fullName}</h2>
                                        <ScrollArea className="h-12">
                                            <p className="text-xs leading-6 font-medium text-text">
                                                {review.content}
                                            </p>
                                        </ScrollArea>
                                    </div>
                                    <div className="col-span-3 flex-rows md:border-l border-border text-xs gap-1 text-star">
                                        <Stars value={review.rating} />
                                    </div>
                                </div>
                            ))
                        }
                        {
                            page < ReviewsData.length &&
                            <div className="w-full flex-rows mt-4">
                                <button onClick={handleLoadingMore} className="px-6 py-3 rounded-lg border border-submain hover:bg-submain transitions">Loading more</button>
                            </div>
                        }
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}

export default MovieRates