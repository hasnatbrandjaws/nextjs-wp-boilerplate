import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

export default function Header({ HeaderFooterData }) {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="z-50">
            <div className="container">

                <div className="content">
                    <div className="logo">
                        <Link href="/">
                            <img src={HeaderFooterData.acf?.header.header_logo_url} alt="Header Logo" className="h-10" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:block menu">
                        <ul className="">
                            <li><Link href="/">{HeaderFooterData.acf?.header.header_menu_item_one}</Link></li>
                            <li><Link href="#">{HeaderFooterData.acf?.header.header_menu_item_two}</Link></li>
                            <li><Link href="#">{HeaderFooterData.acf?.header.header_menu_item_three}</Link></li>
                            <li><Link href="#">{HeaderFooterData.acf?.header.header_menu_item_four}</Link></li>
                            <li><Link href="#">{HeaderFooterData.acf?.header.header_menu_item_five}</Link></li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-[30px]">
                        <IoMdMenu />
                    </button>

                    {/* Mobile Menu */}
                    <div className={`mobileMenu ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out md:hidden`}>
                        <div className="flex justify-end p-4">
                            <button onClick={() => setIsMenuOpen(false)} className="menuIcon">
                                <IoMdClose />
                            </button>
                        </div>
                        <div className="menu">
                            <ul className="flex-col !items-start !gap-0 mt-5">
                                <li><Link href="/">{HeaderFooterData.acf?.header.header_menu_item_one}</Link></li>
                                <li><Link href="#.">{HeaderFooterData.acf?.header.header_menu_item_two}</Link></li>
                                <li><Link href="#.">{HeaderFooterData.acf?.header.header_menu_item_three}</Link></li>
                                <li><Link href="#.">{HeaderFooterData.acf?.header.header_menu_item_four}</Link></li>
                                <li><Link href="#.">{HeaderFooterData.acf?.header.header_menu_item_five}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
