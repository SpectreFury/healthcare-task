import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";
import styles from "./HealthDashboard.module.css";
import { IoChevronDown } from "react-icons/io5";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaArrowRight } from "react-icons/fa";
import Activity from "./Activity";
import { dashboardData } from "../../../data/dashboardData";

const HealthDashboard = () => {
  return (
    <div className={styles.healthDashboard}>
      <div className={styles.healthDashboardContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>Dashboard</h1>
          <div className={styles.dropdown}>
            {dashboardData.dropdownLabel}
            <IoChevronDown />
          </div>
        </div>
        <div className={styles.dashboardItems}>
          <div className={styles.cardHuman}>
            <img src={dashboardData.anatomyImage} className={styles.anatomy} />
            <div className={styles.plusMagIcon}>
              <HiMiniMagnifyingGlassPlus />
            </div>
            <div className={styles.healthyHeart}>
              <div>{dashboardData.healthyHeart.emoji}</div>
              <div>{dashboardData.healthyHeart.label}</div>
            </div>
            <div className={styles.healthyLeg}>
              <div>{dashboardData.healthyLeg.emoji}</div>
              <div>{dashboardData.healthyLeg.label}</div>
            </div>
          </div>
          <div className={styles.cardOrganContainer}>
            {dashboardData.organs.map((organ, idx) => (
              <div className={styles.cardOrgan} key={organ.label}>
                <div className={styles.organContainer}>
                  <div className={styles.organTextContainer}>
                    <span className={styles.cardEmoji}>{organ.emoji}</span>
                    <span className={styles.cardText}>{organ.label}</span>
                  </div>
                  <p className={styles.date}>Date: {organ.date}</p>
                  <ProgressBar
                    completed={organ.progress}
                    isLabelVisible={false}
                    height="0.75rem"
                    bgColor={organ.color}
                  />
                </div>
              </div>
            ))}
            <div className={styles.detailsText}>
              {dashboardData.detailsLabel}
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
