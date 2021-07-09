import GitHubIcon from 'assets/img/GitHub-logo.png'

function Footer() {
    return (
        
            <footer className="footer mt-auto py-3 bg-dark">
                <div className="container">
                    <p className="text-light">App desenvolvido por <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">Daniel Correa Alves</a></p>
                    <p className="text-light">  <a href="https://github.com/dan-correa" target="_blank" rel="noreferrer">< img src={GitHubIcon} alt="GitIcon" width="60"/></a></p>
                    <p className="text-light"><small><strong>Semana Spring React</strong><br />
                        Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
                </div>
            </footer>
        
    );
}

export default Footer;
