import React from 'react';

const EducationComponent = () => {
  return (
    <div className="bg-blue-2">
    <div className="px-4 md:px-8 lg:px-16 xl:px-32">
      <h2 className="text-4xl md:text-7xl font-bold py-4 text-center text-white">Education</h2>
      <div className="flex flex-col space-y-6 md:space-y-8">
        <div className="p-4 md:p-6">
          <h3 className="font-bold text-xl md:text-2xl text-white">Master of Computer Application</h3>
          <p className="text-md md:text-lg font-medium mb-2 text-gray-400">June 2021 - July 2023 | Sterling Institute of Management Studies.</p>
          <p className="text-md md:text-lg text-white">Completed a master&apos;s project on deep learning, developing a new neural network architecture for natural language understanding.</p>
        </div>
        <div className="p-4 md:p-6">
          <h3 className="font-bold text-xl md:text-2xl text-white">Bachelor of Commerce</h3>
          <p className="text-md md:text-lg font-medium mb-2 text-gray-400">June 2018 - July 2021 | Sydenham College of Commerce and Economics.</p>
          <p className="text-md md:text-lg text-white mb-8">Completed a bachelor&apos;s degree in commerce.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EducationComponent;
