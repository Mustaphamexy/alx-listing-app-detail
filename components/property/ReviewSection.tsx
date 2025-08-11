import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewSection: React.FC<{reviews: any[]}> = ({reviews}) => {
  return (
    <div className='px-4 sm:px-6 mt-8 bg-white'>
      <div className='flex items-center gap-2 mb-8'>
        <FaStar className="w-5 h-5 text-yellow-500" />
        <h3 className='text-xl sm:text-2xl font-bold text-gray-900'>4.76</h3>
        <span className='text-gray-600'>( 345 reviews )</span>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {reviews.map((review, index) => (
          <div key={index} className='pb-6'>
            <div className='flex items-start gap-4 mb-3'>
              <img 
                src={review.avatar} 
                alt={review.name} 
                className='w-12 h-12 rounded-full object-cover'
              />
              <div>
                <p className='font-semibold text-gray-900'>{review.name}</p>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <span>{getTimeAgo(review.date)}</span>
                  <span>•</span>
                  <span>{review.tripType || 'Family trip'}</span>
                </div>
              </div>
            </div>
            <p className='text-gray-700 leading-relaxed'>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to format dates
const getTimeAgo = (date?: string) => {
  if (!date) {
    const months = ['March', 'August', 'January'];
    const years = ['2024', '2023'];
    return `${months[Math.floor(Math.random() * months.length)]} ${years[Math.floor(Math.random() * years.length)]}`;
  }
  return date;
};

export default ReviewSection;