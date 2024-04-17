import React, { useState } from "react";
import NavButton from "../Button/NavButton";
import NavDropButton from "../Button/NavDropButton";

const Navbar = () => {
    const [isSelect, setIsSelect] = useState(1)
    return (
        <div className="w-1/5 h-screen fixed bg-[#101A33]">
            <div className="h-full w-full">
                <div className="w-full h-1/5 flex justify-center items-center">
                    <p className="font-bold text-3xl text-[#fc0303]">NETLEAK</p>
                </div>
                <ul className="w-full h-3/5 flex flex-col gap-2 ">
                    <NavButton
                        text={"Thống kê"}
                        icon={"fa-solid fa-chart-simple"}
                        isDropDown={false}
                        path={"/thong-ke"}
                        isSelect={isSelect}
                        position={1}
                        onclick={() => setIsSelect(1)}
                    />
                    <NavButton
                        text={"Quản lý người dùng"}
                        icon={"fa-solid fa-user"}
                        isDropDown={true}
                        path={"/nguoi-dung"}
                        isSelect={isSelect}
                        position={2}
                        onclick={() => setIsSelect(2)}
                    />

                    <NavButton
                        text={"Quản lý phim"}
                        icon={"fa-solid fa-film"}
                        isDropDown={true}
                        path={"/phim"}
                        isSelect={isSelect}
                        position={3}
                        onclick={() => setIsSelect(3)}
                    >
                        <div>
                            <NavDropButton
                                name={"Danh sách phim"}
                                path={"/phim"}
                            />
                            <NavDropButton
                                name={"Thêm phim"}
                                path={"/them-phim"}
                            />
                        </div>
                    </NavButton>

                    <NavButton
                        text={"Quản lý thể loại"}
                        icon={"fa-solid fa-list"}
                        isDropDown={true}
                        path={"/the-loai"}
                        isSelect={isSelect}
                        position={4}
                        onclick={() => setIsSelect(4)}
                    >
                        <div>
                            <NavDropButton
                                name={"Danh sách thể loại"}
                                path={"/the-loai"}
                            />
                            <NavDropButton
                                name={"Thêm thể loại"}
                                path={"/them-the-loai"}
                            />
                        </div>
                    </NavButton>

                    <NavButton
                        text={"Quản lý diễn viên"}
                        icon={"fa-solid fa-star"}
                        isDropDown={true}
                        path={"/dien-vien"}
                        isSelect={isSelect}
                        position={5}
                        onclick={() => setIsSelect(5)}
                    >
                        <div>
                            <NavDropButton
                                name={"Danh sách diễn viên"}
                                path={"/dien-vien"}
                            />
                            <NavDropButton
                                name={"Thêm diễn viên"}
                                path={"/them-dien-vien"}
                            />
                        </div>
                    </NavButton>

                    <NavButton
                        text={"Quản lý đội ngũ"}
                        icon={"fa-solid fa-video "}
                        isDropDown={true}
                        path={"/doi-ngu"}
                        isSelect={isSelect}
                        position={6}
                        onclick={() => setIsSelect(6)}
                    >
                        <div>
                            <NavDropButton
                                name={"Danh sách đội ngũ"}
                                path={"/doi-ngu"}
                            />
                            <NavDropButton
                                name={"Thêm đội ngũ"}
                                path={"/them-doi-ngu"}
                            />
                        </div>
                    </NavButton>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;