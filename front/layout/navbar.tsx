import Link from "next/link";

function NavBar() {
  return (
    <>
      <nav className="d-flex  flex-wrap  p-3 ">
        <Link href="/">
          <a className=" p-2 mr-4 ">Search</a>
        </Link>
        <Link href="/cart">
          <a className=" p-2 mr-4 ">Cart</a>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
