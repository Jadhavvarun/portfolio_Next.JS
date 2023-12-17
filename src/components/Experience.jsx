import React from 'react';

const ExperienceComponent = () => {
    return (
        <div className="my-8 mx-96 px-32">
            <h2 className="text-7xl text-center font-bold mb-4">Experience</h2>
            <div className="flex flex-col space-y-8">
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">Software Developer <br /> @Unipolar Technologies Pvt. Ltd.</h3>
                    <p className="text-lg font-medium mb-2">Aug 2023 - Present | Belapur, Navi Mumbai</p>
                    <p className="text-lg">Developed website design using framework like Next.js.User-friendly and responsive designs using Tailwind CSS. Implemented RESTful APIs and integrated them with frontend components. Deployment of the project through platform like Filezilla, Plesk and Vercel.
                    </p>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">Software Developer Intern<br /> @Unipolar Technologies Pvt. Ltd.</h3>
                    <p className="text-lg font-medium mb-2">Feb 2023 - July 2023 | Belapur, Navi Mumbai</p>
                    <p className="text-lg">Developed website design using framework like Next.js.User-friendly and responsive designs using Tailwind CSS. Implemented RESTful APIs and integrated them with frontend components. Deployment of the project through platform like Filezilla, Plesk and Vercel.
                    </p>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">CS Intern<br /> @CS Vinesh K Shah & Associates</h3>
                    <p className="text-lg font-medium mb-2">Oct 2019 - Dec 2021 | Marin Lines, Mumbai</p>
                    <p className="text-lg">Assisted in ensuring compliance with company law, maintaining statutory registers, and making necessary filings. Gained hands-on experience in corporate law, secretarial practice and compliance management.Assisted in managing legal documentation and contracts.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceComponent;
