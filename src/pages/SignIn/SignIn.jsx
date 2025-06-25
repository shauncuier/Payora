import React, { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/Firebase.config";
import { useNavigate, useLocation, Link } from "react-router";
import Swal from "sweetalert2";

const SignIn = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            Swal.fire({
                title: "Logged in successfully!",
                icon: "success",
                toast: true,
                position: "top-end",
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                showConfirmButton: false,
            });
            navigate(from, { replace: true });
        } catch  {
            setError("Invalid credentials");
            Swal.fire({
                title: "Error",
                text: "Invalid credentials. Please try again.",
                icon: "error",
                toast: true,
                position: "top-end",
                timerProgressBar: true,
                showConfirmButton: false,
                timer: 3000,
            });
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            navigate(from, { replace: true });
        } catch (err) {
            setError(err.message);
            Swal.fire({
                title: "Error",
                text: err.message,
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div className="max-w-md mx-auto my-10 p-10 rounded lg:my-52 shadow-lg border">
            <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
            <form onSubmit={handleLogin} className="space-y-4">
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
                    Sign In
                </button>
            </form>
            <div className="text-center mt-4">
                <p>
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-500">
                        Register
                    </Link>
                </p>
                <p>
                    {" "}
                    <Link to="/forgot-password" className="text-blue-500">
                        Forgot Password
                    </Link>
                </p>
                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline mt-2 w-full"
                >
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default SignIn;
