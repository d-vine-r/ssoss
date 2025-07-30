import Image from "next/image";
import React from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";

const Header = () => {
	return (
	<section className="h-20 flex backdrop-blur justify-center items-center w-full fixed top-0 shadow-md px-4 z-50">
		<div className="w-full flex flex-end">
			<Link href={'/'} className="cursor-pointer">
			<h1 className="p-4 w-full text-2xl font-semibold tracking-tighter">Sam O. Salau</h1></Link>
		</div>
		<div className="justify-center-safe items-center flex w-max bg-transparent text-white">
			<a href="/about" className="cursor-pointer px-8 hover:underline">About</a>
			<a href="#bookstore" className="cursor-pointer px-8 hover:underline">Ministry</a>
			<a href="/contact" className="cursor-pointer px-8 hover:underline">Contact</a>
		</div>
		<div className="p-4 items-center"></div>
		<ThemeToggle/>
	</section>
	)
};

export default Header;
