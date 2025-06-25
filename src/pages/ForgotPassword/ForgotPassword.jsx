
import { Link } from "react-router";

const ForgotPassword = () => {

    return (
        <div className="max-w-md mx-auto my-10 p-10 rounded lg:my-52 shadow-lg border">
            <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
            <form className="space-y-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full"


                    required
                />

                <button type="submit" className="btn btn-primary w-full">
                    Send Reset Link
                </button>
            </form>
            <div className="text-center mt-4">
                <Link to="/signin" className="text-blue-500">Back to Sign In</Link>
            </div>
        </div>
    );
};

export default ForgotPassword;
