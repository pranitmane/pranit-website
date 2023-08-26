import xLogo from '../assets/x-logo.svg'
import githubLogo from '../assets/github-logo.svg'

function Header() {
  return (
    <div className="w-screen h-16 bg-transparent flex justify-between">
      <div className="text-white m-4 font-logo text-2xl">Pranit Mane</div>
      <div className="text-white m-2 flex justify-center align-middle space-x-1">
        <a href="https://github.com/pranitmane" target="blank">
          <img className="h-[40px]"src={githubLogo} alt="github"/>
        </a>
        <a href="https://twitter.com/pranitbmane" target="blank">
          <img className="h-[40px] "src={xLogo} alt="twitter"/>
        </a>
      </div>
    </div>
  );
}

export default Header;
