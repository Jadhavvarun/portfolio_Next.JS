import React from 'react';

const ExperienceComponent = () => {
  return (
    <div className="bg-blue-2"> 
    <div className="px-4 md:px-8 lg:px-16 xl:px-32">
      <h2 className="text-4xl md:text-7xl font-bold py-4 text-center text-white">Experience</h2>
      <div className="flex flex-col space-y-6 md:space-y-8">
        <div className="p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Software Developer <br /> <span className="text-neon">@Unipolar Technologies Pvt. Ltd.</span></h3>
          <p className="text-sm md:text-base font-medium mb-2 text-gray-400">Aug 2023 - Present | Belapur, Navi Mumbai</p>
          <p className="text-sm md:text-base text-white">Developed website design using frameworks like Next.js. Created user-friendly and responsive designs using Tailwind CSS. Implemented RESTful APIs and integrated them with frontend components. Deployed projects using platforms like Filezilla, Plesk, and Vercel.</p>
        </div>
        <div className="p-4 md:p-6">
          <h3 className="text-lg md:text-xl text-white font-bold mb-2">Software Developer Intern <br /> <span className="text-neon">@Unipolar Technologies Pvt. Ltd.</span></h3>
          <p className="text-sm md:text-base font-medium mb-2 text-gray-400">Feb 2023 - July 2023 | Belapur, Navi Mumbai</p>
          <p className="text-sm md:text-base text-white">Contributed to website design using frameworks like Next.js. Created user-friendly and responsive designs using Tailwind CSS. Implemented RESTful APIs and integrated them with frontend components. Managed project deployments using platforms like Filezilla, Plesk, and Vercel.</p>
        </div>
        <div className="p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold mb-2 text-white">CS Intern <br /><span className="text-neon">@CS Vinesh K Shah &amp; Associates</span></h3>
          <p className="text-sm md:text-base font-medium mb-2 text-gray-400">Oct 2019 - Dec 2021 | Marin Lines, Mumbai</p>
          <p className="text-sm md:text-base text-white">Contributed to ensuring compliance with company law, maintaining statutory registers, and making necessary filings. Gained hands-on experience in corporate law, secretarial practice, and compliance management. Assisted in managing legal documentation and contracts.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ExperienceComponent;
