import React from 'react';
import fertilizr from '../../../Assests/FarmerDashboard/fertilizer.png';
import pesticide from '../../../Assests/FarmerDashboard/pesticide.png';
import seeds from '../../../Assests/FarmerDashboard/seeds.png';
import bottleImage from '../../../Assests/FarmerDashboard/bottleImage.jpg'

// Reusable Card Component
function DashboardCard({ image, title }) {
  return (
    <div className='flex flex-row px-[10px] rounded-md bg-light_green w-[200px] m-4 py-[14px] items-center justify-center'>
      <div className='flex items-center justify-center'>
        <img src={image} alt={title} className='w-14 h-14' />
      </div>
      <div className='ml-2 flex items-center justify-center'>
        <h1 className='text-black font-bold'>{title}</h1>
      </div>
    </div>
  );
}

function GalleryCard({ image, title, description }) {
  return (
    <div className='p-4 rounded-md bg-light_green shadow-md'>
      <img src={image} alt={title} className='w-full h-32 object-cover rounded-md mb-2' />
      <h2 className='text-black font-bold text-lg'>{title}</h2>
      <p className='text-gray-700 text-sm'>{description}</p>
    </div>
  );
}

function FarmerDashboard() {
  // Data for repeated red cards
  const redCardData = [
    { label: "test 1" },
    { label: "test 2" },
    { label: "test 3" },
    { label: "test 4" },
    { label: "test 5" },
    { label: "test 6" },
    { label: "test 7" },
    { label: "test 8" }, 
    { label: "test 9" },
    { label: "test 10" }, 
  ];

  const galleryData = [
    { image: bottleImage, title: "Fertilizer", description: "High-quality fertilizer for your crops." },
    { image: bottleImage, title: "Pesticide", description: "Effective pesticide for pest control." },
    { image: bottleImage, title: "Seeds", description: "Organic seeds for a healthy yield." },
    { image: bottleImage, title: "Fertilizer", description: "Boost your crop growth with our fertilizer." },
    { image: bottleImage, title: "Pesticide", description: "Protect crops with eco-friendly pesticides." },
    { image: bottleImage, title: "Seeds", description: "Premium quality seeds for higher production." },
    // Add more items if needed
  ];

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-full flex flex-row items-center justify-center px-[200px] gap-x-[100px]'>
        {/* Fertilizer Card */}
        <DashboardCard image={fertilizr} title="Fertilizer" />

        {/* Pesticide Card */}
        <DashboardCard image={pesticide} title="Pesticide" />

        {/* Seeds Card */}
        <DashboardCard image={seeds} title="Seeds" />
      </div>

      <div className='flex flex-row bg-slate-100 w-full'>
        <div className='flex flex-col  bg-agro_lightgreen w-1/6 '>
          {/* Render red cards by mapping through redCardData array */}
          {redCardData.map((card, index) => (
            <div key={index} className=' p-4 flex items-center justify-center border-b-agro_yellow border-solid border-b-2'>
              <h2 className='text-black font-bold'>{card.label}</h2>
            </div>
          ))}
        </div>
        <div className='flex w-4/5 items-center justify-center '>
          <div className='grid grid-cols-3 gap-4 w-full p-4'>
              {galleryData.map((item, index) => (
                <GalleryCard key={index} image={item.image} title={item.title} description={item.description}/>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmerDashboard;
