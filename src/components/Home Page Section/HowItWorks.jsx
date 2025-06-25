import React from 'react';

const HowItWorks = () => {
    const steps = [
        { icon: "🔐", title: "Login", desc: "Sign in or create an account securely." },
        { icon: "💳", title: "Add Card", desc: "Link your bank card or use your balance." },
        { icon: "📲", title: "Pay Bill", desc: "Select and pay your utility bill instantly." }
    ];
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {steps.map((step, idx) => (
                        <div key={idx} className="card bg-blue-100 text-center p-6 shadow">
                            <div className="text-4xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-700">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;