import React from "react";

const Header = () => {
	return (
	<section className="h-20 flex items-center justify-around px-4 backdrop-blur-2xl sticky z-2">
		<a href="#about" className="cursor-pointer hover:underline">About</a>
		<a href="#bookstore" className="cursor-pointer hover:underline">BookStore</a>
		<a href="#contact" className="cursor-pointer hover:underline">Contact</a>
	</section>
	)
};

export default Header;
