import React from 'react';

const DivisionServices = () => {
    const divisions = [
        { name: "Dhaka", services: "DESCO, WASA" },
        { name: "Chattogram", services: "PDB, Jalalabad Gas" },
        { name: "Khulna", services: "KDA, Gaslink" },
        { name: "Rajshahi", services: "Rajshahi WASA, WZPDCL" },
    ];
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">Division-wise Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {divisions.map((div, idx) => (
                        <div key={idx} className="card bg-blue-100 p-6 shadow">
                            <h3 className="text-xl font-bold">{div.name}</h3>
                            <p className="mt-2 text-gray-700">Supported: {div.services}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DivisionServices;