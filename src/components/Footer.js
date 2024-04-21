import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter className="bg-light text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#55acee" }}
            href="https://twitter.com/yashtiwari907"
            role="button"
            target="_blank"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="mailto:tech.yashtiwari@gmail.com"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="https://www.instagram.com/_shivyash9_/"
            role="button"
            target="_blank"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/yash-tiwari-6a1970211/"
            role="button"
            target="_blank"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#333333" }}
            href="https://www.github.com/refertoyash"
            role="button"
            target="_blank"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="/">
          All rights reserved
        </a>
        <p>
          Made with ❤ by{" "}
          <a href="https://www.github.com/refertoyash" target="_blank">
            Yash
          </a>
        </p>
      </div>
    </MDBFooter>
  );
};

export default Footer;
