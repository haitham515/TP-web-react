export default function ResearchBar({ value, onChange }) {
    return (
        <div className="research-bar">
            <input
                className="research-input"
                type="text"
                placeholder="Rechercher..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}