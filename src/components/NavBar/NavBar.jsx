import { NavBarContainer } from "./NavBar.style"
import { BiSearch, BiCart, BiListMinus } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

export const NavBar = () => {
  return (
    <NavBarContainer>
      <section className="first">
        <h1>J-Shop</h1>  
      </section>
      <section className="second">
        <ul>
          <li>Categories</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </section>
      <section className="third">
        <FiSearch size={25}/>   
        <BiCart size={25}/> 
        <BiListMinus size={30}/>
      </section>
    </NavBarContainer>
  )
}