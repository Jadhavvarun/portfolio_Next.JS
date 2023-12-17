import React from 'react';

const EducationComponent = () => {
  return (
    <div className="my-8 mx-96 px-32">
      <h2 className="text-7xl text-center font-bold mb-4">Education</h2>
      <div className="flex flex-col space-y-8">
        <div className="p-6">
          <h3 className="font-bold text-2xl">Master of Computer Application</h3>
          <p className="text-lg font-medium mb-2">June 2021 - July 2023 | Sterling Institute of Management Studies.</p>
          <p className="text-lg">Completed a master&apos;s project on deep learning, developing a new neural network architecture for natural language understanding.</p>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-2xl">Bachelor of Commerce</h3>
          <p className="text-lg font-medium mb-2">June 2018 - July 2021 | Sydenham College of Commerce and Economics.</p>
          <p className="text-lg">Completed a bachelor&apos;s degree in commerce.</p>
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
