import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

export default function EditProfile() {
    const token = localStorage.getItem("token");
    const data = useLoaderData();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;

        const age = form.age.value;
        const mobileNumber = form.mobileNumber.value;

        const userData = {
            name,
            age,
            mobileNumber,
            //   email: data?.email,
        };

        fetch(
            `http://localhost:5000/user/${data?.email}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(userData),
            }
        )
            .then((res) => res.json())
            .then(() => toast.success("Profile updated "));
    };
    return (
        <div className="p-8 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 mb-7">Edit Profile</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-lg font-medium text-gray-700 mb-2">User Name</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={data?.name}
                        className="py-3 px-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-lg font-medium text-gray-700 mb-2">User Email</label>
                    <input
                        type="text"
                        value={data?.email}
                        disabled
                        name="email"
                        className="py-3 px-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="age" className="text-lg font-medium text-gray-700 mb-2">User Age</label>
                    <input
                        type="text"
                        name="age"
                        className="py-3 px-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="mobileNumber" className="text-lg font-medium text-gray-700 mb-2">User Mobile</label>
                    <input
                        type="text"
                        name="mobileNumber"
                        className="py-3 px-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <input
                        type="submit"
                        value="Update Profile"
                        className="py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none"
                    />
                </div>
            </form>
        </div>
    );
}