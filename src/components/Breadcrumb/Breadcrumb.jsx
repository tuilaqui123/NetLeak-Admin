import React from "react";

const Breadcrumb = ({ icon, name, link }) => {
    return (
        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <div className="flex flex-row gap-2 items-center">
                        <i className={`${icon}`}></i>
                        <p className="text-[16px] font-bold">{name}</p>
                    </div>
                </li>
                {link !== "" && (
                    <li>
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-[#3e3e3e] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <div className="flex flex-row gap-2 items-center">
                                <p className="text-[16px] font-bold">{link}</p>
                            </div>
                        </div>
                    </li>
                )}

            </ol>
        </nav>
    );
}

export default Breadcrumb;