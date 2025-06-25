import React, { useEffect, useState, useContext } from "react";
import billsData from "../../data/bills.json";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";

const Billing = () => {
    const [bills, setBills] = useState([]);
    const [filterType, setFilterType] = useState("all");
    const { balance } = useContext(AuthContext);

    useEffect(() => {
        setBills(billsData);
    }, []);

    const filteredBills =
        filterType === "all"
            ? bills
            : bills.filter((bill) => bill.bill_type === filterType);

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-2">Your Bills</h1>
            <p className="text-center mb-6 text-blue-500 font-semibold">
                Available Balance: ৳{balance}
            </p>

            <div className="flex justify-end mb-4">
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="select select-bordered"
                >
                    <option value="all">All</option>
                    <option value="electricity">Electricity</option>
                    <option value="gas">Gas</option>
                    <option value="internet">Internet</option>
                    <option value="water">Water</option>
                    <option value="credit card">Credit Card</option>
                    <option value="tuition">Tuition</option>
                </select>
            </div>

            {filteredBills.length === 0 ? (
                <p className="text-center text-gray-500">🎉 All bills are paid or no bills in this category!</p>
            ) : (
                <div className="grid gap-4">
                    {filteredBills.map((bill) => (
                        <div
                            key={bill.id}
                            className="card bg-base-100 shadow-md p-4 flex flex-col sm:flex-row items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <img src={bill.icon} alt={bill.bill_type} className="w-12 h-12 object-contain" />
                                <div>
                                    <h2 className="font-semibold">{bill.organization}</h2>
                                    <p className="text-sm text-gray-500 capitalize">{bill.bill_type}</p>
                                    <p className="text-sm text-gray-400">
                                        Due: {new Date(bill.due_date).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 sm:mt-0 text-right">
                                <p className="text-xl font-bold text-blue-500">৳ {bill.amount}</p>

                                {bill.paid ? (
                                    <span className="text-green-500 font-bold text-lg ml-2">✅ Paid</span>
                                ) : (
                                    <Link to={`/billing/${bill.id}`}>
                                        <button className="btn btn-primary btn-sm mt-2">Pay Now</button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Billing;
