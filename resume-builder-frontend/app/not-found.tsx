import Link from "next/link";

const NotFound = () => {
  return (
    <main className="text-center">
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link href="/">
        Go back to home
      </Link>
    </main>
  )
}

export default NotFound;
