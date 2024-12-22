import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="text-center text-white">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">

          <p className="footer-text">sifzerda 🎵 2024</p>


          <a href="https://github.com/sifzerda/bandpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          <br></br>

          <a href="https://react-td-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">My Project Portfolio</a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;








