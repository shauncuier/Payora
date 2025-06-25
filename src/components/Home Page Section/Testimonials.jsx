import React from 'react';

const Testimonials = () => {
    const users = [
        {
            name: "Mitu",
            division: "Chattogram",
            quote: "Payora saved me from a late gas bill this winter!"
        },
        {
            name: "Rafiq",
            division: "Sylhet",
            quote: "Very easy to use. I paid my tuition fee in seconds."
        },
        {
            name: "Nila",
            division: "Dhaka",
            quote: "I love the clean winter look of the site. Very smooth."
        }
    ];
    return (
        <section className="bg-blue-50 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {users.map((user, idx) => (
                        <div key={idx} className="card bg-white shadow p-6">
                            <p className="italic text-gray-700">“{user.quote}”</p>
                            <div className="mt-4 text-sm font-semibold">{user.name} – {user.division}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;