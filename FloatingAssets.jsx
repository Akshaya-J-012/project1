function FloatingAssets() {
    return (
        <div className="floating-assets">
            {/* Moon SVG */}
            <svg className="f-moon" width="100" height="100" viewBox="0 0 100 100">
                <path d="M50 10A40 40 0 1 0 90 50A30 30 0 0 1 50 10Z" fill="white" opacity="0.1" />
            </svg>

            {/* Glowing Orbs */}
            {[...Array(5)].map((_, i) => (
                <div key={i} className={`orb orb-${i}`}></div>
            ))}

            {/* Sparkles */}
            <svg className="sparkle" width="20" height="20" viewBox="0 0 20 20">
                <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8Z" fill="var(--secondary)" opacity="0.4" />
            </svg>
        </div>
    );
}

export default FloatingAssets;
