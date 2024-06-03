import toast from "react-hot-toast";


const AddEvent = () => {
    const handleSubmit = async (e) => {
        const token = localStorage.getItem("token");
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;

        const price = form.price.value;
        const description = form.description.value;
        const image_url = form.image_url.value;

        const data = { title, price, description, image_url };

        await fetch("http://localhost:5000/events", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(() => {
                toast.success("Product added successful");
                form.reset();
            });
    };
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-5xl font-bold text-center text-primary mb-8">Add an Event</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                    <input
                        className="input input-bordered w-full"
                        type="text"
                        name="title"
                        placeholder="Title"
                    />
                </div>

                <div className="form-control mb-4">
                    <input
                        className="input input-bordered w-full"
                        type="number"
                        name="price"
                        placeholder="Price"
                    />
                </div>
                <div className="form-control mb-4">
                    <textarea
                        className="textarea textarea-bordered w-full"
                        name="description"
                        placeholder="Description"
                    />
                </div>
                <div className="form-control mb-4">
                    <input
                        className="input input-bordered w-full"
                        type="text"
                        name="image_url"
                        placeholder="Image URL"
                    />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary w-full">Add Event</button>
                </div>
            </form>

        </div>
    );
};

export default AddEvent;