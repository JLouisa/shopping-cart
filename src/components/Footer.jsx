import gitHubIcon from "../assets/github-original.svg";

const Footer = () => {
  return (
    <footer className="links">
      <a href="https://github.com/JLouisa/shopping-cart" target="__blank">
        <img src={gitHubIcon} alt="gitHubIcon" width="40" height="40" />
      </a>
      <span className="copyright">©2023 | Jonathan Louisa</span>
    </footer>
  );
};

export default Footer;
