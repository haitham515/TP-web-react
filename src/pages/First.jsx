import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResearchBar from "../components/ResearchBar";
import TableOfUsers from "../components/Table";

export default function First() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    //   const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
                // console.log("vos users sont : ", res.json());
                return res.json();
            })
            .then((data) => setUsers(data))
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = (id) => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="first-page">
            <h1>Annuaire d'utilisateurs</h1>
            {/* {error && <p className="error">{error}</p>} */}
            <ResearchBar value={search} onChange={setSearch} />
            <TableOfUsers
                users={filteredUsers}
                onDelete={handleDelete}
                onSelect={(id) => navigate(`/users/${id}`)}
            />
        </div>
    );
}