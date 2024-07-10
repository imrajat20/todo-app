import Link from "next/link";
import classes from './MainNavigation.module.css'; 

const MainHeader = () => {

    return (
        <header className={classes.header}>
        <div className={classes.logo}>Tasks To-Do</div>
        <nav>
          <ul>
            <li>
              <Link href='/'>All Tasks</Link>
            </li>
            <li>
              <Link href='/new-task'>Add New task</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
};

export default MainHeader;
