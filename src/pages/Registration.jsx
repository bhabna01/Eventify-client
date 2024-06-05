import { Link, useLocation, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/login.jpg"
import { useEffect, useState } from "react";
import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import useAuth from "../hooks/useAuth";

const Registration = () => {
    const { createUser, user } = useAuth();
    const [passMatch, setPassMatch] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const confirm_password = form.confirm_password.value;

        if (password !== confirm_password) {
            setPassMatch(false);
        }

        console.log(email, password, confirm_password);

        if (password === confirm_password) {
            createUser(email, password).then((data) => {
                if (data?.user?.email) {
                    const userInfo = {
                        email: data?.user?.email,
                        name: name,
                    };
                    fetch("https://eventify-server-amber.vercel.app/user", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(userInfo),
                    })
                        .then((res) => res.json())
                        .then((data) => localStorage.setItem("token", data?.token));
                }
            });

        }
    };
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);
    return (
        // <form onSubmit={handleSubmit} className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        //     <div className="hero-overlay bg-opacity-60 bg-black"></div>
        //     <div className="hero-content flex-col lg:flex-row-reverse p-6 md:p-10">
        //         <div className="text-center lg:text-left text-white">
        //             <h1 className="text-5xl font-bold">Register Now!</h1>
        //             <p className="py-6">
        //                 Join our community and get exclusive access to upcoming events, workshops, and networking opportunities.
        //             </p>
        //         </div>
        //         <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        //             <div className="card-body">
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Email</span>
        //                     </label>
        //                     <input
        //                         type="email"
        //                         placeholder="email"
        //                         className="input input-bordered"
        //                         name="email"
        //                         required
        //                     />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Name</span>
        //                     </label>
        //                     <input
        //                         type="name"
        //                         placeholder="name"
        //                         className="input input-bordered"
        //                         name="name"
        //                         required
        //                     />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Password</span>
        //                     </label>
        //                     <input
        //                         type="password"
        //                         placeholder="password"
        //                         className="input input-bordered"
        //                         name="password"
        //                         required
        //                     />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Confirm Password</span>
        //                     </label>
        //                     <input
        //                         type="password"
        //                         placeholder="confirm password"
        //                         className="input input-bordered"
        //                         name="confirm_password"
        //                         required
        //                     />
        //                 </div>
        //                 {!passMatch && (
        //                     <div className="my-2">
        //                         <p className="text-red-500">Passwords do not match!</p>
        //                     </div>
        //                 )}
        //                 <div className="form-control mt-6">
        //                     <input
        //                         className="btn bg-indigo-500 text-white hover:bg-indigo-600"
        //                         type="submit"
        //                         value="Register"
        //                     />
        //                 </div>
        //                 <div className="mt-6">
        //                     <GoogleLogin />
        //                 </div>
        //                 <div className="mt-6 text-center">
        //                     <p>
        //                         Already have an account?{" "}
        //                         <Link to="/login" className="text-indigo-500 hover:text-indigo-600">
        //                             Login
        //                         </Link>
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </form>
        <div className="container mx-auto px-4 py-8">
            <form onSubmit={handleSubmit} className="hero bg-cover bg-center relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="hero-overlay bg-opacity-60 bg-black"></div>
                <div className="hero-content flex-col lg:flex-row-reverse p-6 md:p-10">
                    <div className="text-center lg:text-left text-white">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                        <p className="py-6">
                            Join our community and get exclusive access to upcoming events, workshops, and networking opportunities.
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
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="name"
                                    placeholder="name"
                                    className="input input-bordered"
                                    name="name"
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="confirm password"
                                    className="input input-bordered"
                                    name="confirm_password"
                                    required
                                />
                            </div>
                            {!passMatch && (
                                <div className="my-2">
                                    <p className="text-red-500">Passwords do not match!</p>
                                </div>
                            )}
                            <div className="form-control mt-6">
                                <input
                                    className="btn bg-indigo-500 text-white hover:bg-indigo-600"
                                    type="submit"
                                    value="Register"
                                />
                            </div>
                            <div className="mt-6">
                                <GoogleLogin />
                            </div>
                            <div className="mt-6 text-center">
                                <p>
                                    Already have an account?{" "}
                                    <Link to="/login" className="text-indigo-500 hover:text-indigo-600">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Registration;