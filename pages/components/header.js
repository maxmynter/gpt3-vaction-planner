import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="header-link">
        <Link href="/">Inspire</Link>
      </div>
      <div className="header-link">
        <Link href="/popular">Other Trips</Link>
      </div>
      <div className="header-link">
        <Link href="/how">How it works</Link>
      </div>
    </div>
  );
};

export default Header;
