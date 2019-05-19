import React from "react";

export default function PageFooter() {
  return (
    <React.Fragment>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col s12 m12 offset-m2">
              <p style={{ fontSize: "10px" }}>
                Copyright @ IvyFerns – Building Comfort in Regional Victoria
              </p>
              <p style={{ fontSize: "10px" }}>
                DISCLAIMER: All the icons, photos and videos used on the website
                have been taken from wix.com, pixabay.com, unsplash.com and
                fontawesome.com
              </p>
              <div style={{ fontSize: "10px" }}>
                Icons used in Map made by{" "}
                <a href="https://www.freepik.com/" title="Freepik">
                  Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>{" "}
                &{" "}
                <a
                  href="https://www.flaticon.com/authors/icongeek26"
                  title="Icongeek26"
                >
                  Icongeek26
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
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
