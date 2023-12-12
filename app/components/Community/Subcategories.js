function Subcategories({ community }) {
    // Render subcategories of the selected community
    return (
        <div>
            <h2>{community.name} Subcategories</h2>
            {community.subcategories.map(subcategory => (
                <div key={subcategory.name}>
                    {subcategory.name}
                </div>
            ))}
        </div>
    );
}
