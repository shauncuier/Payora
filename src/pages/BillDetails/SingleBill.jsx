import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router";
import billsData from "../../data/bills.json";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const SingleBill = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { balance, updateBalance } = useContext(AuthContext);

    const bill = billsData.find((item) => item.id.toString() === id);

    if (!bill) {
        return <p className="text-center mt-10 text-red-500">❌ Bill not found</p>;
    }

    const handlePay = () => {
        if (bill.paid) {
            Swal.fire("Already Paid", "You have already paid this bill ✅", "info");
            return;
        }

        if (balance < bill.amount) {
            Swal.fire("Insufficient Balance", "❌ You don't have enough balance!", "error");
            return;
        }

        updateBalance(bill.amount);
        bill.paid = true; // Note: this is a local change only

        Swal.fire("Success", `✅ ৳${bill.amount} paid to ${bill.organization}`, "success").then(() => {
            navigate("/billing");
        });
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:my-34">
            {/* Left Column */}
            <div className="relative flex justify-center items-center bg-base-200 rounded-xl p-8">
                <img
                    src={bill.icon}
                    alt={bill.organization}
                    className="w-40 h-40 object-contain"
                />
                
            </div>

            {/* Right Column */}
            <div className="space-y-4">
                <h1 className="text-2xl font-bold">{bill.organization}</h1>
                <p className="capitalize text-gray-600 font-medium">Type: {bill.bill_type}</p>
                <p className="text-gray-500">
                    Due Date: {new Date(bill.due_date).toLocaleDateString()}
                </p>
                <p className="text-xl font-semibold text-blue-600">৳ {bill.amount}</p>

                {bill.paid ? (
                    <span className="text-green-500 font-bold">✅ Already Paid</span>
                ) : (
                    <button onClick={handlePay} className="btn btn-primary mt-4">
                        Pay Bill
                    </button>
                )}
            </div>
        </div>
    );
};

export default SingleBill;
