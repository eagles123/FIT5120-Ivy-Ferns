import React from "react";

export default function PageFooter() {
  return (
    <React.Fragment>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col s12 m12 offset-m1">
              <p style={{ fontSize: "10px" }}>
                Copyright @ IvyFerns – Building Comfort in Regional Victoria
              </p>
              <p style={{ fontSize: "10px" }}>
                DISCLAIMER: All the icons, photos and videos used on the website
                have been taken from{" "}
                <a href="https://www.wix.com" target="_blank">
                  wix.com
                </a>
                ,{" "}
                <a href="https://www.pixabay.com" target="_blank">
                  pixabay.com
                </a>
                ,{" "}
                <a href="https://www.unsplash.com" target="_blank">
                  {" "}
                  unsplash.com
                </a>{" "}
                and
                <a href="https://www.fontawesome.com" target="_blank">
                  fontawesome.com
                </a>
              </p>
              <div style={{ fontSize: "10px" }}>
                Icons used in Map made by{" "}
                <a
                  href="https://www.freepik.com/"
                  target="_blank"
                  title="Freepik"
                >
                  Freepik
                </a>{" "}
                from{" "}
                <a
                  href="https://www.flaticon.com/"
                  target="_blank"
                  title="Flaticon"
                >
                  www.flaticon.com
                </a>{" "}
                &{" "}
                <a
                  href="https://www.flaticon.com/authors/icongeek26"
                  target="_blank"
                  title="Icongeek26"
                >
                  Icongeek26
                </a>{" "}
                from{" "}
                <a
                  href="https://www.flaticon.com/"
                  target="_blank"
                  title="Flaticon"
                >
                  www.flaticon.com
                </a>{" "}
                is licensed by{" "}
                <a
                  href="http://creativecommons.org/licenses/by/3.0/"
                  title="Creative Commons BY 3.0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CC 3.0 BY
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
