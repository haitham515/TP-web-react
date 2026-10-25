import { Component } from "react";
import { Link, useParams } from "react-router-dom";

class Second extends Component {
    state = { user: null, error: null };

    fetchUser() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
            .then((res) => {
                if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
                return res.json();
            })
            .then((user) => this.setState({ user }))
            .catch((err) => this.setState({ error: err.message }));
    }

    componentDidMount() {
        this.fetchUser();
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.id !== this.props.id) {
    //         this.setState({ user: null, error: null });
    //         this.fetchUser();
    //     }
    // }

    render() {
        const { user, error } = this.state;

        return (
            <div className="second-page">
                <h1>Annuaire d'utilisateurs</h1>
                <Link to="/users">← Retour à la liste</Link>

                {error && <p className="error">{error}</p>}
                {!user && !error && <p>Chargement...</p>}

                {user && (
                    <div className="user-detail">
                        <h2>{user.name}</h2>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Téléphone:</strong> {user.phone}</p>
                        <p><strong>Site:</strong> {user.website}</p>
                        <p><strong>Société:</strong> {user.company.name}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default function SecondRoute() {
    const { id } = useParams();
    return <Second id={id} />;
}