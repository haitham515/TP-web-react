export default function RowOfUser({ user, onDelete, onSelect }) {
    return (
        <tr className="user-row">
            <td className="user-name">
                <a href="#" className="user-link" onClick={() => onSelect(user.id)}>
                    {user.name}
                </a>
            </td>
            <td className="user-email">{user.email}</td>
            <td className="user-company">{user.company.name}</td>
            <td className="user-actions">
                <button className="delete-btn" onClick={() => onDelete(user.id)}>
                    Supprimer
                </button>
            </td>
        </tr>
    );
}