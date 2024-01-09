import { star } from "../assets/icons"
const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-sm">
        <img src={imgURL} alt="" className="w-[125px] h-[125px] rounded-full object-contain"/>
        <p className="font-montserrat w-md text-center mt-6 leading-normal text-lg text-slate-gray">{feedback}</p>
        <div className="flex justify-center items-center mt-4 gap-2">
            <img src={star} alt="rating" className="w-[25px] h-[25px] object-contain" />
            <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
        </div>
        <p className="font-palanquin text-3xl font-bold mt-2">{customerName}</p>
    </div>
  )
}

export default ReviewCard
