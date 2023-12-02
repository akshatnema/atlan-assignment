import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center">
    <div className='flex justify-center gap-2 w-fit'>
      <div className='logo'>
        <Link to='/'>
          <img src='vite.svg' width='50vw' height='100%' alt='atlan logo' />
        </Link>
      </div>
      <div className="heading text-3xl font-bold m-auto">
        SQL Query Executor
      </div>
    </div>
    </div>

  );
};

export default Header;
