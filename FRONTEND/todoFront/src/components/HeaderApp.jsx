function HeaderApp({onFilterChange}) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <a className="navbar-brand">
                        TO-DO LIST
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarBar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => onFilterChange("ALL")}>
                                    ALL
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => onFilterChange("PENDING")}>
                                    PENDING
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => onFilterChange("COMPLETED")}>
                                    COMPLETED
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default HeaderApp;