import styles from "./home-header.module.css";
import UserAvatar from "./user-avatar";
import HomeSearch from "./home-search";

interface HomeHeaderProps {}

export default function HomeHeader() {
  return (
    <div className={styles.homeHeaderContainer}>
      <div className={styles.homeHeaderLeftView}>
        <UserAvatar name={"David Nogueira"} size={35} />
        <h1 className={styles.homeHeaderText}>David Nogueira</h1>
      </div>
      <HomeSearch />
    </div>
  );
}
