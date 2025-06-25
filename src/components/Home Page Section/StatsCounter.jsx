import React from 'react';
import CountUp from 'react-countup';


const StatsCounter = () => {

    const stats = [
        { label: "Total Users", value: 12000, suffix: "+" },
        { label: "Bills Paid", value: 89000, suffix: "+" },
        { label: "Divisions Served", value: 8 },
        { label: "Years of Trust", value: 3, suffix: "+" },
    ];
    return (
        <section className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Payora in Numbers</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="card bg-white shadow p-6">
                            <div className="lg:text-4xl  font-bold text-blue-600">
                                <CountUp enableScrollSpy end={stat.value} duration={2.5} suffix={stat.suffix || ""} />
                            </div>
                            <p className="text-gray-700 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;