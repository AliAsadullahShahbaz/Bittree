import Image from "next/image";
export const  notFound = ()=> {
    return (
        <div className="relative" style={{ zIndex: 0, transition: "all 0.20s ease-in" }}>
            <div
                className="relative overflow-hidden w-full top-0 left-0"
                style={{ height: "370px" }}
            >
                <Image
                    alt={" Descriptive Alt Text "}
                    className="absolute"
                    height={415}
                    width={1100}
                    style={{
                        // top: "-20px",
                        // left: "-20px",
                        zIndex: 1,
                        width: "110%",
                        height: "425px",
                    }}
                    src={"/bg-not.jpeg"}
                />
                <div className="flex justify-center items-center w-full gap-20 my-14 z-40 absolute ">
                <Image width={250} height={250} src="/4.4.png" alt="" />
                <Image width={250} height={250} src="/b-man.png" alt="" />
                <div className="flex flex-col ">
                <Image width={300} height={300} src="/tank.png" alt="" />
                <Image className="" width={300} height={300} src="/water.png" alt="" />
                </div>
                </div>
            </div>
        </div>
    );
}
