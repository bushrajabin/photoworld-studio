import ownerImage from "../assets/images/ownerImage.jpeg";

function About() {
    return (
        <section id="about" className="about py-7">
            <div className="container about-content grid">
                <div className="about-left">
                    <img src={ownerImage} alt="Owner" />
                </div>
                <div className="about-right">
                    <h2>About Me</h2>
                    <p>
                        I’m Majid Ahmad, a professional photographer and videographer.       with a strong background in both creative photography and
                        cinematic storytelling. With years of hands-on experience across
                        diverse genres, I bring a unique and well-rounded perspective to
                        every project I take on. My work reflects a passion for visual
                        storytelling, attention to detail, and a deep understanding of
                        how to capture moments that truly matter — whether it's through
                        the lens of a camera or behind the scenes in video production. I
                        strive to blend creativity with technical expertise, ensuring
                        every shot tells a story that resonates.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;