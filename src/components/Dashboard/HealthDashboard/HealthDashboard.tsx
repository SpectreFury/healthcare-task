import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";
import styles from "./HealthDashboard.module.css";

import { IoChevronDown } from "react-icons/io5";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaArrowRight } from "react-icons/fa";
import Activity from "./Activity";

const HealthDashboard = () => {
  return (
    <div className={styles.healthDashboard}>
      <div className={styles.healthDashboardContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>Dashboard</h1>
          <div className={styles.dropdown}>
            This week
            <IoChevronDown />
          </div>
        </div>
        <div className={styles.dashboardItems}>
          <div className={styles.cardHuman}>
            <img src="./anatomy.png" className={styles.anatomy} />
            <div className={styles.plusMagIcon}>
              <HiMiniMagnifyingGlassPlus />
            </div>
          </div>
          <div className={styles.cardOrganContainer}>
            <div className={styles.cardOrgan}>
              <div className={styles.organContainer}>
                <div className={styles.organTextContainer}>
                  <span className={styles.cardEmoji}>🫁</span>
                  <span className={styles.cardText}>Lungs</span>
                </div>
                <p className={styles.date}>Date: 26 Oct 2021</p>
                <ProgressBar
                  completed={75}
                  isLabelVisible={false}
                  height="0.75rem"
                  bgColor="#b44e4e"
                />
              </div>
            </div>
            <div className={styles.cardOrgan}>
              <div className={styles.organContainer}>
                <div>
                  <span className={styles.cardEmoji}>🦷</span>
                  <span className={styles.cardText}>Teeth</span>
                </div>
                <p className={styles.date}>Date: 26 Oct 2021</p>
                <ProgressBar
                  completed={75}
                  isLabelVisible={false}
                  height="0.75rem"
                  bgColor="#7ccbbe"
                />
              </div>
            </div>
            <div className={styles.cardOrgan}>
              <div className={styles.organContainer}>
                <div>
                  <span className={styles.cardEmoji}>🦴</span>
                  <span className={styles.cardText}>Bone</span>
                </div>
                <p className={styles.date}>Date: 26 Oct 2021</p>
                <ProgressBar
                  completed={75}
                  isLabelVisible={false}
                  height="0.75rem"
                  bgColor="#ff7e61"
                />
              </div>
            </div>
            <div className={styles.detailsText}>
              Details
              <div className={styles.arrowIcon}>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
        <Activity />
      </div>
    </div>
  );
};

export default HealthDashboard;
