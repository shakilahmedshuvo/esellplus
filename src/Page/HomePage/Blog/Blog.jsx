import { useEffect, useState } from "react";

const Blog = () => {
    // blog data load
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch('TipsAndTricks.json')
            .then(res => res.json())
            .then(data => {
                setBlog(data)
            })
    }, []);

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 my-8">

            {/* map section start */}
            {
                blog?.map((item) => (
                    <div key={item?.id}>
                        <img
                            className="rounded-xl w-full"
                            src={item?.blogImg}
                            alt="" />

                        <div>

                            <p className="mt-5 mb-2 text-[#9B9BB4] text-sm font-medium">
                                {item?.blogSubName}
                            </p>

                            <h2 className="text-xl font-medium text-[#202435]">
                                {item?.blogName}
                            </h2>

                            <div className="flex items-center mt-2 text-sm gap-2">
                                <p>{item?.BlogDate}</p>
                                <p>3 Comments</p>
                            </div>

                        </div>
                    </div>
                ))
            }
            {/* map section end */}
        </div>
    );
};

export default Blog;