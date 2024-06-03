import { Link, useLocation, useNavigate } from "react-router-dom";

import backgroundImage from "../assets/login.jpg"
import { useEffect } from "react";
import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import useAuth from "../hooks/useAuth";
const Login = () => {
    const { signIn, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || "/";

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        await signIn(email, password);
    };

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);
    return (
        <form onSubmit={handleSubmit} className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-overlay bg-opacity-60 bg-black"></div>
            <div className="hero-content flex-col lg:flex-row-reverse p-6 md:p-10">
                <div className="text-center lg:text-left text-white">
                    <h1 className="text-5xl font-bold">Login to Your Account</h1>
                    <p className="py-6">
                        Access your event dashboard, manage your tickets, and stay updated with the latest event information.
                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                name="password"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className="btn bg-indigo-500 text-white hover:bg-indigo-600"
                                type="submit"
                                value="Login"
                            />
                        </div>
                        <div className="mt-6">
                            <GoogleLogin />
                        </div>
                        <div className="mt-6 text-center">
                            <p>
                                New here?{" "}
                                <Link to="/register" className="text-indigo-500 hover:text-indigo-600">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    );
};

export default Login;