import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import NavDropButton from "./NavDropButton";

const NavButton = ({ text, icon, dropdown, isDropDown, onclick, path, position, isSelect, children }) => {

    return (
        <div>
            <Link
                to={path}
                onClick={onclick}
                className={clsx({
                    "w-full flex flex-col items-center justify-between text-white cursor-pointer p-3 hover:bg-[#0A3379] duration-150": position != isSelect,
                    "w-full flex flex-col items-center justify-between text-white cursor-pointer p-3 bg-[#0A3379]": position == isSelect
                })}
            // className="w-full flex flex-row items-center justify-between text-white cursor-pointer p-3 hover:bg-[#0A3379] duration-150"
            // className="w-full flex flex-row items-center justify-between text-white cursor-pointer p-3 bg-[#0A3379]"
            >
                <div className="w-full flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-3 items-center">
                        <i class={`${icon} text-xl`}></i>
                        <p className="text-[15px] font-bold">{text}</p>
                    </div>
                    {isDropDown && (
                        <i
                            // class="fa-solid fa-caret-down text-xl"
                            className={clsx({
                                "fa-solid fa-caret-down text-xl rotate-[-90deg] ": position != isSelect,
                                "fa-solid fa-caret-down text-xl ": position == isSelect,
                            })}
                        ></i>
                    )}
                </div>

            </Link>
            {position == isSelect && (
                <div className="w-full flex flex-col items-end h-auto duration-200">
                    <div className="w-5/6 border-l-2 pl-2">
                        {children}
                    </div>
                </div>
            )}

        </div>
    );
}

export default NavButton;