import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompleteChallenge } from "../components/CompleteChallenge";

import styles from '../styles/pages/home.module.css';
import { Countdown } from "../components/Countdown";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      
      <section>
      <div>
        <Profile />
        <CompleteChallenge />
        <Countdown />
        </div>
        <div>
          
          </div>
      </section>
    </div>
  )
}
