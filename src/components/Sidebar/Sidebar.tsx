import styles from "./Sidebar.module.css";

import { title, links, settings } from "../../data/sidebar";

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.sidebarContainer}>
        <h1 className={styles.title}>
          {title.main}
          <span className={styles.span}>{title.sub}</span>
        </h1>
        <div className={styles.group}>
          {links.map((link) => (
            <div>
              <p className={styles.groupTitle}>{link.section}</p>
              <ul className={styles.ul}>
                {link.items.map((item) => (
                  <li
                    key={item.name}
                    className={
                      item.name === "Dashboard" ? styles.liUnactive : styles.li
                    }
                  >
                    <item.icon className={styles.icon} />
                    <div className={styles.itemName}>{item.name}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <ul className={styles.settings}>
            <li className={styles.li}>
              <settings.icon className={styles.icon} />
              <div className={styles.itemName}>{settings.title}</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
