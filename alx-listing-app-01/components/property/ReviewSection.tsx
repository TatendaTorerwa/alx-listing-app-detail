import { FC } from "react";

interface Review {
  avatar: string;
  name: string;
  rating: number;
  comment: string;
}

const ReviewSection: FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          <div className="flex items-center">
            {/* Profile Picture */}
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              {/* User Name and Rating */}
              <p className="font-bold">{review.name}</p>
              <div className="flex items-center">
                <span className="text-yellow-500">{review.rating} stars</span>
                {/* Render star icons */}
                {Array.from({ length: review.rating }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15l-5.293 2.792 1.136-6.635L1.5 6.118l6.745-.584L10 .5l2.755 5.034 6.745.584-4.343 5.039 1.136 6.635L10 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          {/* Review Content */}
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
