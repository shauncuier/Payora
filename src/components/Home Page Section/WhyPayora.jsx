import React from 'react';

const WhyPayora = () => {

    const features = [
        { icon: "💳", title: "Instant Payments", desc: "Fast, secure transactions anytime." },
        { icon: "🛡️", title: "Secure Platform", desc: "Protected with bank-level security." },
        { icon: "🌐", title: "All Divisions Covered", desc: "We support services across Bangladesh." },
        { icon: "🏦", title: "Multiple Agencies", desc: "Electricity, Gas, Water & More." }
    ];
    return (
        <section className="bg-blue-50 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Payora?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, idx) => (
                        <div key={idx} className="card bg-white shadow-md p-6 text-center">
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyPayora;