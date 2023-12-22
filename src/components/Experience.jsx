import React from 'react';

const ExperienceComponent = () => {
  return (
    <div className="my-20 mx-96 px-32">
      <h2 className="text-7xl text-center font-bold mb-4">Experience</h2>
      <div className="flex flex-col space-y-8">
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">Software Developer <br /> <span className="text-neon">@Unipolar Technologies Pvt. Ltd.</span></h3>
          <p className="text-lg font-medium mb-2 text-gray-400">Aug 2023 - Present | Belapur, Navi Mumbai</p>
          <p className="text-lg">Developed website design using frameworks like Next.js. Created user-friendly and responsive designs using Tailwind CSS. Implemented RESTful APIs and integrated them with frontend components. Deployed projects using platforms like Filezilla, Plesk, and Vercel.
          </p>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">Software Developer Intern <br /> <span className="text-neon">@Unipolar Technologies Pvt. Ltd.</span></h3>
          <p className="text-lg font-medium mb-2 text-gray-400">Feb 2023 - July 2023 | Belapur, Navi Mumbai</p>
          <p className="text-lg">Contributed to website design using frameworks like Next.js. Created user-friendly and responsive designs using Tailwind CSS. Implemented RESTful APIs and integrated them with frontend components. Managed project deployments using platforms like Filezilla, Plesk, and Vercel.
          </p>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">CS Intern <br /><span className="text-neon"> @CS Vinesh K Shah &amp; Associates </span></h3>
          <p className="text-lg font-medium mb-2 text-gray-400">Oct 2019 - Dec 2021 | Marin Lines, Mumbai</p>
          <p className="text-lg">Contributed to ensuring compliance with company law, maintaining statutory registers, and making necessary filings. Gained hands-on experience in corporate law, secretarial practice, and compliance management. Assisted in managing legal documentation and contracts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
