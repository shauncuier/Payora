


import React, { useState } from "react";
import { auth } from "../../firebase/Firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Profile_Update = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const [displayName, setDisplayName] = useState(user?.displayName || "");
    const [email] = useState(user?.email || "");

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const isValidImageURL = (url) => {
        return url.startsWith("http") && /\.(jpeg|jpg|png|gif|webp|svg)$/.test(url);
    };

    const handleProfileUpdate = async () => {
        if (!isValidImageURL(photoURL)) {
            return Swal.fire({
                title: "Invalid Image URL",
                text: "Please enter a valid image URL ending in .jpg, .png, etc.",
                icon: "warning",
                toast: true,
                position: "top-end",
                timerProgressBar: true,
                showConfirmButton: false,
                timer: 3000,
            });
        }
        try {
            if (user) {
                await updateProfile(user, {
                    displayName,
                    photoURL,
                });
                navigate("/profile");
                Swal.fire({
                    title: 'Success!',
                    text: 'Profile updated successfully!',
                    icon: 'success',
                    toast: true,
                    position: 'top-end',
                    timerProgressBar: true,
                    showConfirmButton: false,
                    timer: 3000,
                });
            }
        } catch {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to update profile!',
                icon: 'error',
                toast: true,
                position: 'top-end',
                timerProgressBar: true,
                showConfirmButton: false,
                timer: 3000,
            });
        }
    };

    return (
        <div className="profile-container max-w-4xl mx-auto p-6 lg:my-25">
            <h2 className="text-2xl font-semibold mb-4">Profile</h2>

            <div className="flex items-center gap-4 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img
                        src={
                            isValidImageURL(photoURL)
                                ? photoURL
                                : "https://i.ibb.co.com/Z1SQZLsb/1209195215ea.jpg"
                        }
                        alt="User"
                        className="w-full h-full object-cover"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Change photo URL"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                />
            </div>

            <div className="mb-4">
                <label className="label" htmlFor="displayName">
                    <span className="label-text">Display Name</span>
                </label>
                <input
                    type="text"
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                />
            </div>

            <div className="mb-4">
                <label className="label" htmlFor="email">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    disabled
                    className="input input-bordered w-full max-w-xs"
                />
            </div>

            <div>
                <button
                    onClick={handleProfileUpdate}
                    className="btn btn-primary"
                    disabled={loading || !displayName || !photoURL}
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default Profile_Update;
