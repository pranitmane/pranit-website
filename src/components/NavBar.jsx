import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function NavBar(){
    const navigate = useNavigate()
    const location = useLocation()
    const currentRoute = location.pathname

    useEffect(() => {
        animation();
    }, [currentRoute]);

    function animation(){
        const el = document.querySelector('.navTab')
        if (currentRoute === '/'){
            el.style.transform = 'translateX(-92px)'
        } else if (currentRoute === '/blogs'){
            el.style.transform = 'translateX(0px)'
        } else if (currentRoute === '/projects'){
            el.style.transform = 'translateX(92px)'
        }
    }

    return <div className="h-16 w-72 bg-gray-900 flex justify-center text-white rounded-full z-20 relative border-2 border-gray-700">
        <div className="navTab absolute w-24 h-14 bg-gray-700 z-30 mt-[2px] border-2 border-gray-700 rounded-full transition duration-200 ease-in-out"></div>
        <div onClick={()=>navigate("/")} className="cursor-pointer w-20 m-1 p-4 z-40">Home</div>
        <div onClick={()=>navigate("/blogs")} className="cursor-pointer w-20 m-1 p-4 z-40">Blogs</div>
        <div onClick={()=>navigate("/projects")} className="cursor-pointer w-20 m-1 p-4 z-40">Projects</div>
    </div>
}

export default NavBar

