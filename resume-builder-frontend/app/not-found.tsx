import Link from "next/link";
import styles from './not-found.module.css';

const NotFound = () => {
  return (
    <main className={styles.error__box}>
      <section className={styles.error__container}>
        <div className={styles.error__content}>
          <h2 className={styles.error__code}>404</h2>
          <p className={styles.error__title}>Page Not Found</p>
          <p className={styles.error__text}>Oops! The page you are looking for does not exist.</p>
          <Link href="/" className={styles.error_btn}>
            Go back to home
          </Link>
        </div>
      </section>
      <section className={styles.error__icon_container}>
        <svg className={styles.error__icon} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M10 2C5.5935666 2 2 5.5935666 2 10C2 14.406433 5.5935666 18 10 18C12.023929 18 13.871701 17.237039 15.283203 15.990234L16 16.707031L16 18L19.585938 21.585938C20.137937 22.137937 21.033938 22.137938 21.585938 21.585938C22.137938 21.033938 22.137938 20.137938 21.585938 19.585938L18 16L16.707031 16L15.990234 15.283203C17.237039 13.871701 18 12.023929 18 10C18 5.5935666 14.406433 2 10 2 z M 10 4C13.325553 4 16 6.6744469 16 10C16 13.325553 13.325553 16 10 16C6.6744469 16 4 13.325553 4 10C4 6.6744469 6.6744469 4 10 4 z M 7 8 A 1 1 0 0 0 6 9 A 1 1 0 0 0 7 10 A 1 1 0 0 0 8 9 A 1 1 0 0 0 7 8 z M 13 8 A 1 1 0 0 0 12 9 A 1 1 0 0 0 13 10 A 1 1 0 0 0 14 9 A 1 1 0 0 0 13 8 z M 10 10.996094C9.0937311 10.996094 8.186669 11.271242 7.4179688 11.820312 A 1.0002525 1.0002525 0 1 0 8.5820312 13.447266C9.4106306 12.855409 10.589369 12.855409 11.417969 13.447266 A 1.0002524 1.0002524 0 0 0 12.582031 11.820312C11.813331 11.271242 10.906269 10.996094 10 10.996094 z" />
        </svg>
      </section>
    </main>
  )
}

export default NotFound;
