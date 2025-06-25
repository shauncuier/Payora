import React from "react";
import { auth } from "../../firebase/Firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { PencilIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (error) return <div className="text-red-500 text-center">Error: {error.message}</div>;

    const isValidImage = (url) =>
        url?.startsWith("http") && /\.(jpeg|jpg|png|gif|webp|svg)$/.test(url);

    return (
        <div className="max-w-4xl mx-auto p-6 relative lg:mt-25 lg:mb-65">
            <h2 className="text-2xl font-semibold mb-6 flex items-center justify-between">
                My Profile
                <button
                    onClick={() => navigate("/profile/edit")}
                    className="btn btn-sm btn-outline flex items-center gap-1"
                >
                    <PencilIcon className="w-4 h-4" />
                    Edit
                </button>
            </h2>

            <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
                    <img
                        src={
                            isValidImage(user?.photoURL)
                                ? user.photoURL
                                : "https://i.ibb.co.com/Z1SQZLsb/1209195215ea.jpg"
                        }
                        alt="User"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-xl font-bold">
                        {user?.displayName || "No Name"}
                    </h3>
                    <p className="text-gray-600">{user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
