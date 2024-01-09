import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section>
      <div className="max-container">
        <h3 className="font-palanquin font-bold text-4xl capitalize text-center">
          What our <span className="text-coral-red">Customers</span> say?
        </h3>
        <p className="font-montserrat info-text text-center mt-6 max-w-lg m-auto ">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className="flex max-lg:flex-col max-container justify-evenly items-center gap-12 mt-20">
          {reviews.map((review) => (
            <ReviewCard key = {review.customerName} {...review}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
