function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="text-2xl font-bold">
        CRAV
      </div>

      <ul className="flex gap-6 list-none">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/spices">Our Spices</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;