import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <li>
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Categorias</a>
          </Link>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--mega sub-menu--mega--column-3">
            <li className="sub-menu--mega__title">
           
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/categorias/sofas"
                    as={process.env.PUBLIC_URL + "/categorias/sofas"}
                  >
                    <a>Sofás</a>
                  </Link>
                 
                </li>
              </ul>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/categorias/poltronas"
                    as={process.env.PUBLIC_URL + "/categorias/sofas"}
                  >
                    <a>Poltronas</a>
                  </Link>
        
                </li>
              </ul>
            </li>
            
            
          </ul>
        </li>

      </ul>
    </nav>
  );
};

export default Navigation;
