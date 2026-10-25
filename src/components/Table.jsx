import RowOfUser from "./RowOfUser";

export default function TableOfUsers({ users, onDelete, onSelect }) {
    return (
        <table className="users-table">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Société</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.length === 0 ? (
                    <tr>
                        <td colSpan={4} className="no-result">
                            Aucun utilisateur trouvé
                        </td>
                    </tr>
                ) : (
                    users.map((user) => (
                        <RowOfUser
                            key={user.id}
                            user={user}
                            onDelete={onDelete}
                            onSelect={onSelect}
                        />
                    ))
                )}
            </tbody>
        </table>
    );
}