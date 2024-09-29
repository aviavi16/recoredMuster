import { useEffect } from "react"
import { utilService } from "../services/util.service"
import Roomonitor from "../assets/imgs/roomonitor.png"

export function HomePage() {
    useEffect( () => {
        closeSideBar()
    }, []) 
    function closeSideBar(){
        var leftSidebar = document.getElementById('leftSidebar')
        leftSidebar.style.display = 'none'
    }
    return (
        <section className="home-container">

            <h1>    Home sweet Home     </h1> 
            <div className="content-wrapper">
                <div className="content-sub-wrapper">
                    <div className="image-text-left">
                        <div className="image-text">
                            <div className="title">
                                <h1>Noise Detection</h1>
                            </div>

                            <div className="image-title-text">
                                <h3>Monitor noise levels in real time</h3>
                            </div>
                            <div className="image-paragraph-text">
                                <p> {utilService.makeLorem()} </p>
                                <p> This is a paragraph </p>
                                <p> This is another paragraph </p>
                                <p> This is another paragraph </p>
                                <p> This is a paragraph </p>

                            </div>

                        </div>
                        <div className="learn-more-container">
                            <a href="#como-funciona" title="learn-more" className="learn-more-btn">Learn More</a>
                        </div>
                    </div>
                    
                    <div className="img-container">
                            <img src={Roomonitor} />
                    </div>
                </div>     
            </div>
            
       </section >
    )
}



