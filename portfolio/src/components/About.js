import profilePicture from "../assets/images/photo.jpg"
import Title from "./Title";
import {Link} from "react-router-dom";

const About = ({showMore = false}) => {

    return (
        <section className="section about">
            <div className="section-center about-center">
                <article className="about-img" data-border="yes">
                    <img className="hero-photo" src={profilePicture} alt="ratnesh kumar profile" />
                </article>
                <article className="about-info">
                    <Title title="about" className="about-title"/>
                    <p>
                        I am a developer with a keen interest in technology. Beside challenging myself, I love
                        learning new
                        technologies and languages.
                    </p>
                    <p>
                        Starting as a full-time software developer, I have worked with JAVA, SQL, Groovy, and
                        Spring-Boot. I also have
                        supported multiple System Integration Testing and Productions. I always have looked towards
                        automating manual
                        tasks like a Junkie which maintains production. I am currently working in Ahmedabad, Gujrat
                        specializes in
                        back-end development, algorithms, and data structure.
                    </p>
                    {showMore && <Link className="btn" to='/about/'>learn more</Link>}
                </article>
            </div>
        </section>
    )
}

export default About;