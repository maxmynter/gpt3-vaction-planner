import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="header-link-container">
        <div className="header-link">
          <Link href="/" className="nextjs-header-link">
            Inspire
          </Link>
        </div>
        <div className="header-link">
          <Link href="/popular" className="nextjs-header-link">
            Other Trips
          </Link>
        </div>
        <div className="header-link">
          <Link href="/how" className="nextjs-header-link">
            How it works
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
