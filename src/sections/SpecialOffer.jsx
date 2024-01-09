import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
const SpecialOffer = () => {
  return (
    <section className="max-container flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold leading-[1] lg:max-w-lg">
          <br />
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          Offer
        </h2>
        <p className="mt-4 info-text lg-max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text ">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat rounded-full text-lg leading-none text-slate-gray border-slate-500">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
