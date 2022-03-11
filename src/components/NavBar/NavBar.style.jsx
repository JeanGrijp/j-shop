import styled from "styled-components";
import media from "../../utils/media";

export const NavBarContainer = styled.nav`

  ${media.mobile} {
    display: none;
  }


  ${media.desktop} {
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    section {
      /* border: 1px solid red; */
      width: 100%;
      height: 100%;
    }

    section.first{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 5%;

      h1 {
        font-family: 'Playfair Display', Serif;
        font-size: 1.5rem;
      }
    }

    section.second ul{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      /* flex-direction: row; */

      li {
        list-style: none;
        cursor: pointer;
        transition: 0.5s;
        font-family: 'ABeeZee', sans-serif;
        font-size: 1rem;
      }

    }

    section.third {
      padding: 0 5%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      * {
        margin: 0 10px;
      }
    }

  }


`;

