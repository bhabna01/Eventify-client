import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const SingleEventRow = ({ event, onDelete }) => {
    const token = localStorage.getItem("token");
    const { _id, title, price, description, image_url } = event;

    const handleDelete = async () => {
        await fetch(`https://eventify-server-amber.vercel.app/events/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then(() => {
                toast.success("Event Deleted");
                onDelete(_id);
            });
    };
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 h-24 mask mask-squircle">
                            <img src={image_url} alt={title} />
                        </div>
                    </div>
                </div>
            </td>
            <td>{title}</td>
            <td>{price}</td>
            <td>{description}</td>
            <td>
                <button className="btn btn-info btn-sm mx-1">
                    <Link to={`/events/${_id}`}>Details</Link>
                </button>
                <button className="btn btn-warning btn-sm mx-1">
                    <Link to={`edit/${_id}`}>Edit</Link>
                </button>
                <button onClick={handleDelete} className="btn btn-error btn-sm mx-1">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default SingleEventRow;