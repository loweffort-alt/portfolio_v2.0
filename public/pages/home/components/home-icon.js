const icons = [
  {
    name: "Github",
    link: "https://github.com/loweffort-alt",
    imgsrc: "images/Home-Icons/Github.svg",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/alexfarfan/",
    imgsrc: "images/Home-Icons/Linkedn.svg",
  },
  {
    name: "email",
    link: "mailto:farfan_alexander@outlook.com",
    imgsrc: "images/Home-Icons/email.svg",
  },
  {
    name: "pdf",
    link: "https://drive.google.com/file/d/1JwILcdWksCjSnvmxUkH1wjoF3e_QWX3W/view?usp=sharing",
    imgsrc: "images/Home-Icons/PDF.svg",
  },
];

const HomeIcon = (name, link, img) => {
  const a = document.createElement(a);
  return `
    <template>
      <a href="https://github.com/loweffort-alt" target="_blank">
        <img src="images/Home-Icons/Github.svg" alt="github-logo" />
      </a>
    </template>
  `;
};

export default HomeIcon;
