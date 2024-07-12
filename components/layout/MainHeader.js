import Link from "next/link";
import classes from './MainNavigation.module.css'; 

const MainHeader = () => {

    return (
        <header className={classes.header}>
          <div className={classes.logo}>Tracking Todos/Tasks</div>
          <nav className={classes.nav}>
            <ul>
              <li>
                <Link href='/completed'>Completed Tasks</Link>
              </li>
              <li>
                <Link href='/new-task'>Add New Task</Link>
              </li>
            </ul>
          </nav>
        </header>
    )
};

export default MainHeader;
