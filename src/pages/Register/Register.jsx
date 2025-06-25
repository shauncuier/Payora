// File: src/pages/Register/Register.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
    createUserWithEmailAndPassword,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/Firebase.config";
import Swal from "sweetalert2";

const Register = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        setError(""); // Clear any previous errors

        // Password validation
        if (!/(?=.*[a-z])/.test(password)) {
            return setError("Password must include a lowercase letter.");
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            return setError("Password must include an uppercase letter.");
        }
        if (password.length < 6) {
            return setError("Password must be at least 6 characters.");
        }

        // Photo URL validation
        if (!photo.startsWith("http") || !/\.(jpeg|jpg|png|gif|webp|svg)$/.test(photo)) {
            return setError("Please provide a valid image URL (jpg, png, gif, etc.).");
        }

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user, {
                displayName: name,
                photoURL: photo,
            });

            Swal.fire({
                title: "Registration Successful",
                text: "You have registered successfully!",
                icon: "success",
                confirmButtonText: "OK",
                toast: true,
                position: "top-end",
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                showConfirmButton: false,
            });

            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="max-w-md mx-auto my-10 p-6 border rounded shadow bg-white lg:my-52">
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
            <form onSubmit={handleRegister} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="input input-bordered w-full"
                    required
                />
                <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                    required
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="btn btn-primary w-full">
                    Register
                </button>
            </form>

            <div className="text-center mt-4">
                <p>
                    Already have an account?{" "}
                    <Link to="/signin" className="text-blue-500">
                        Sign In
                    </Link>
                </p>
                <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-outline mt-2 w-full"
                >
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Register;
