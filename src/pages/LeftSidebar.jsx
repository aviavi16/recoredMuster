import { Link } from "react-router-dom"

export function LeftSidebar(){
    return (
        <section className="leftSidebar-container" id="leftSidebar">
            <div className="left-sidebar-wrap">
                <nav className="leftSidebar-main" aria-label="Main"></nav>

                <Link to={"/dashboard"} className="home-link">
                    <label className="material-symbols-outlined" title="Home">
                        home
                    </label>
                    Home
                </Link>

                <Link to={"/dashboard/pieChart"} className="pie-link">
                    <label className="material-symbols-outlined" title="Pie" >
                        pie_chart
                    </label>
                    Pie
                </Link>

                <Link to={"/dashboard/analyse"} className="analyze-link">
                    <label className="material-symbols-outlined" title="Analyze">
                        query_stats
                    </label>
                    Analyze
                </Link>

                                
                <Link to={"/dashboard/player"} className="player-link">
                    <label className="material-symbols-outlined" title="Player">
                    play_circle
                    </label>
                    Player
                </Link>
            </div>
            
        </section>
    )
}