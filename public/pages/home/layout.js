import HomeImg from "./components/home-image.js";

const Layout = () => {
  return `
    <div class="Home-Info">
      <h1>
        Welcome.
      </h1>
      <p>
        My name is <span class="name">Alex</span>, I'm
        <span id="dinamicText"></span> </br>
        A npc based in Lima, Perú. Passionated about cutting-edge, pixel-perfect, beautyful interfaces and intuitively implemented UX.
      </p>
      <div class="home-icons">
    <a href="https://github.com/loweffort-alt" target="_blank">
      <img src="images/Home-Icons/Github.svg" alt="github-logo" />
    </a>
    <a href="https://www.linkedin.com/in/alexfarfan/" target="_blank">
      <img src="images/Home-Icons/Linkedn.svg" alt="linkedin-logo" />
    </a>
    <a href="mailto:farfan_alexander@outlook.com" target="_blank">
      <img src="images/Home-Icons/email.svg" alt="email-logo" />
    </a>
    <a href="https://drive.google.com/file/d/1cD8mmd7F3LbAg3V3Yu8PKiyTMSouNMBt/view?usp=share_link" target="_blank">
      <img src="images/Home-Icons/PDF.svg" alt="pdf-logo" />
    </a>
      </div>
    </div>
    <div class="Container-Image">
    ${HomeImg()}
    </div>
  `;
};

export default Layout;
