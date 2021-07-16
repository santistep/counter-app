// Stateless Functional Component //

const NavBar = ({ totalCounters }) => {
  return (
    <nav class="navbar navbar-light bg-light navbar-fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
