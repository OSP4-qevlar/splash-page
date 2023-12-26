
const Features = () => {
    return(
        <section className="sectionWrapper" id="features">
            <h1>Features</h1>
                <div className='card'>
                <featureTitle>Complete Testing Toolkit</featureTitle>
                <featureDescription>A complete library of lightweight tools to test your API against malicious GraphQL queries.</featureDescription>
                </div>

                <div className='card'>
                <featureTitle>No External Dependencies</featureTitle>
                <featureDescription>No need to download any external dependencies. Qevlar is built entirely using vanilla Javascript.</featureDescription>
                </div>

                <div className='card'>
                <featureTitle>Single Configuration File</featureTitle>
                <featureDescription>Just configure a single file for your testing needs and run everything through our easy terminal GUI.</featureDescription>
                </div>



        </section>
    )
}
export default Features; 