import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] " />
      <div className="mt-8 flex justify-start items-center gap-2">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat leading-normal text-xl text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="font-palanquin text-2xl font-semibold mt-2 leading-normal">{name}</h3>
      <p className="font-montserrat text-2xl text-coral-red font-semibold mt-3 leading-normal">{price}</p>
    </div>
  );
};

export default PopularProductCard;
