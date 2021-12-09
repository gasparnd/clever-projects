import React from "react";

export const Footer = () => {
  return (
    <footer
      style={{ maxHeight: 500, paddingTop: 60, paddingBottom: 100 }}
      className="bg-black px-4 2xl:flex 2xl:justify-center mt-16"
    >
      <div className="2xl:w-1/2">
        <h4 className="text-white text-5xl font-bold mb-8">Let’s talk.</h4>
        <a
          href="mailto:contacto@cleveritgroup.com"
          className="text-white text-xl"
        >
          contacto@cleveritgroup.com
        </a>
        <div className="flex justify-between flex-wrap ">
          <div className="mb-3">
            <div className="flex justify-between my-3 w-full">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/cleverit-group/mycompany/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#bfc7fd"
                  width="20px"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/cleveritgroup/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#bfc7fd"
                  width="20px"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>

              <a target="_blank" href="https://dribbble.com/cleverexperience">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#bfc7fd"
                  width="20px"
                >
                  <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z" />
                </svg>
              </a>

              <a target="_blank" href="https://vimeo.com/cleverex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#bfc7fd"
                  width="20px"
                >
                  <path d="M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z" />
                </svg>
              </a>
            </div>
            <p className="text-white text-xl">
              Isidora Goyenechea 3365, Las Condes.
            </p>
          </div>
          <div className="flex">
            <ul className="mr-8">
              <li>
                <a
                  className="text-white text-xl"
                  href="https://www.cleveritgroup.com/contact"
                  target="_blank"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="text-white text-xl"
                  href="https://www.cleveritgroup.com/service"
                  target="_blank"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-white text-xl"
                  href="https://www.cleveritgroup.com/blog"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a
                  className="text-white text-xl"
                  href="https://www.cleveritgroup.com/culture"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-white text-xl"
                  href="https://www.cleveritgroup.com/clever-meets"
                  target="_blank"
                >
                  Meets
                </a>
              </li>
              <li>
                <a
                  className="text-white text-xl"
                  href="https://www.cleveritgroup.com/clever-stories"
                  target="_blank"
                >
                  Stories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
