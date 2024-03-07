import classes from "./HeaderNav.module.scss";

function HeaderNav() {
  return (
    <header className={classes.header}>
      <div className={classes["header__search"]}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <input type="search" id="search" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#categories">categories</a>
          </li>
          <li>
            <a href="#builders">website builders</a>
          </li>
          <li>
            <a href="#deals">Today&#39;s deals</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderNav;
