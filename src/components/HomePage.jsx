

function HomePage(){
    return (
        <div>
        <div className=" flex flex-col md:flex-row justify-center align-middle md:space-x-5 md:flex-wrap font-handlee">
        <div className=" w-1/2 h-48 bg-my-image bg-cover rounded-md mx-auto my-auto p-5 md:w-1/4 md:mx-0 "></div>
        <div className="text-white w-2/3 md:w-1/3 text-left overflow-hidden p-5 md:mx-0 mx-auto">
            <h2 className=" text-2xl font-semibold">Hello, I'm Pranit.</h2>
            <p className="text-xl">A third-year computer engineering student in Pune, India, I specialize in creating outstanding websites and applications using the <span className=" text-green-400">MERN</span> stack.</p>
        </div>
        </div> 
        <hr className="m-10"/>
        <p className="text-gray-400 text-center">The site is under construction 👨‍💻 ☕️, thanks for visiting.</p>
        </div>
    )
}

export default HomePage
