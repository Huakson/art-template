import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";

const NavigationOverlay = ({ activeStatus, getActiveStatus }) => {
  return (
    <div className={`navigation-overlay ${activeStatus ? "active" : ""}`}>
      <div className="navigation-overlay__content">
        <button
          className="navigation-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false);
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        >
          <IoIosClose />
        </button>
        <div className="navigation-overlay__content-container">
          <nav>
            <ul>
              <li className="has-children">
                <Accordion>
                  <Accordion.Toggle variant="link" eventKey="0" as="a">
                    Home
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <ul className="sub-menu">
                      <li className="has-children-submenu">
                        <Accordion>
                          <Accordion.Toggle variant="link" eventKey="0" as="a">
                            Home Group One
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                            <ul className="sub-menu">
                              <li>
                                <Link
                                  href="/home/decor"
                                  as={process.env.PUBLIC_URL + "/home/decor"}
                                >
                                  <a>Decor</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/home/creative"
                                  as={process.env.PUBLIC_URL + "/home/creative"}
                                >
                                  <a>Creative</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/home/perfumes"
                                  as={process.env.PUBLIC_URL + "/home/perfumes"}
                                >
                                  <a>Perfumes</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/home/trending"
                                  as={process.env.PUBLIC_URL + "/home/trending"}
                                >
                                  <a>Trending</a>
                                </Link>
                              </li>
                            </ul>
                          </Accordion.Collapse>
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                          <Accordion.Toggle variant="link" eventKey="0" as="a">
                            Home Group Two
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                            <ul className="sub-menu">
                              <li>
                                <Link
                                  href="/home/essentials"
                                  as={
                                    process.env.PUBLIC_URL + "/home/essentials"
                                  }
                                >
                                  <a>Essentials</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/home/accessories"
                                  as={
                                    process.env.PUBLIC_URL + "/home/accessories"
                                  }
                                >
                                  <a>Accessories</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/home/lookbook"
                                  as={process.env.PUBLIC_URL + "/home/lookbook"}
                                >
                                  <a>Lookbook</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/home/furniture"
                                  as={
                                    process.env.PUBLIC_URL + "/home/furniture"
                                  }
                                >
                                  <a>Furniture</a>
                                </Link>
                              </li>
                            </ul>
                          </Accordion.Collapse>
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                          <Accordion.Toggle variant="link" eventKey="0" as="a">
                            Home Group Three
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                            <ul className="sub-menu">
                              <li>
                                <Link
                                  href="/home/smart-design"
                                  as={
                                    process.env.PUBLIC_URL +
                                    "/home/smart-design"
                                  }
                                >
                                  <a>Smart Design</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/home/collection"
                                  as={
                                    process.env.PUBLIC_URL + "/home/collection"
                                  }
                                >
                                  <a>Collection</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/home/jewelry"
                                  as={process.env.PUBLIC_URL + "/home/jewelry"}
                                >
                                  <a>Jewelry</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/home/cosmetics"
                                  as={
                                    process.env.PUBLIC_URL + "/home/cosmetics"
                                  }
                                >
                                  <a>Cosmetics</a>
                                </Link>
                              </li>
                            </ul>
                          </Accordion.Collapse>
                        </Accordion>
                      </li>
                      <li className="has-children-submenu">
                        <Accordion>
                          <Accordion.Toggle variant="link" eventKey="0" as="a">
                            Home Group Four
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                            <ul className="sub-menu">
                              <li>
                                <Link
                                  href="/home/swimsuit"
                                  as={process.env.PUBLIC_URL + "/home/swimsuit"}
                                >
                                  <a>Swimsuit</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/home/special"
                                  as={process.env.PUBLIC_URL + "/home/special"}
                                >
                                  <a>Special</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/home/concept"
                                  as={process.env.PUBLIC_URL + "/home/concept"}
                                >
                                  <a>Concept</a>
                                </Link>
                              </li>
                            </ul>
                          </Accordion.Collapse>
                        </Accordion>
                      </li>
                    </ul>
                  </Accordion.Collapse>
                </Accordion>
              </li>
    
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationOverlay;
