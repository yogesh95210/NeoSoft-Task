'use client';
import Image from 'next/image';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ProductCard({ image, title, description }: ProductCardProps) {
  return (
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto">
      {/* Image Section */}
      {/* <div className="relative w-full h-64 sm:h-72">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover rounded-t-xl"
          sizes="(max-width: 640px) 100vw, 400px"
        />
      </div> */}

      <div className="w-full h-64 sm:h-72">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover rounded-t-xl"
  />
</div>

      {/* Text Section */}
      <div className="p-5 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        <button className="w-full text-[#F96302] font-semibold py-2 border border-[#F96302] rounded-md hover:bg-[#F96302] hover:text-white transition-colors duration-200">
          View More
        </button>
      </div>
    </div>
  );
}
