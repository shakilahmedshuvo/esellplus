import { LiaPhoneVolumeSolid } from "react-icons/lia";
import android from "../../../../public/android.png";
import ios from "../../../../public/ios.png";
import { FaFacebookF } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

const SubFooter = () => {
    return (
        <div className="max-w-7xl mx-auto pt-5">

            <div className="grid grid-cols-12">

                <div className="flex items-center col-span-2">
                    <div
                        className="text-2xl rounded-full border p-2 w-fit flex items-center justify-center">
                        <LiaPhoneVolumeSolid />
                    </div>

                    <div className="ms-4">
                        <h2 className="text-2xl font-medium pt-2">
                            8 800 555-55
                        </h2>
                        <p className="text-xs text-gray-400">
                            Working on 8:00 - 22:00
                        </p>
                    </div>
                </div>


                <div className="col-span-10 flex items-center justify-end">

                    <div className="mr-7">
                        <h2 className="font-medium pt-2 text-sm text-end">
                            Download App on Mobile :
                        </h2>
                        <p className="text-xs text-gray-400 text-end">
                            15% discount on your first purchase
                        </p>
                    </div>

                    <div className="w-[25%] flex items-center">
                        <div>
                            <img
                                src={android}
                                alt="" />
                        </div>
                        <div className="ms-2">
                            <img
                                src={ios}
                                alt="" />
                        </div>
                    </div>

                    <div
                        className="text-[#233A95] flex items-center text-lg ms-5">
                        <div className="p-2 rounded-full border ms-2">
                            <FaFacebookF />
                        </div>

                        <div className="p-2 rounded-full border ms-2">
                            <SiTwitter />
                        </div>

                        <div className="p-2 rounded-full border ms-2">
                            <BsInstagram />
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-8" />

            <div className="grid grid-cols-2">

                <div className="text-gray-400 text-xs">
                    Copyright 2023 © ESellPlus. All rights reserved Shakil Ahmed.
                </div>

                <div className="flex items-center text-gray-400 text-xs gap-2">
                    <p>
                        Privacy Policy
                    </p>

                    <p>
                        Terms and Conditions
                    </p>

                    <p>
                        Cookie
                    </p>

                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 640 512">
                            <path
                                fill="currentColor" d="m165 144.7l-43.3 9.2l-.2 142.4c0 26.3 19.8 43.3 46.1 43.3c14.6 0 25.3-2.7 31.2-5.9v-33.8c-5.7 2.3-33.7 10.5-33.7-15.7V221h33.7v-37.8h-33.7zm89.1 51.6l-2.7-13.1H213v153.2h44.3V233.3c10.5-13.8 28.2-11.1 33.9-9.3v-40.8c-6-2.1-26.7-6-37.1 13.1m92.3-72.3l-44.6 9.5v36.2l44.6-9.5zM44.9 228.3c0-6.9 5.8-9.6 15.1-9.7c13.5 0 30.7 4.1 44.2 11.4v-41.8c-14.7-5.8-29.4-8.1-44.1-8.1c-36 0-60 18.8-60 50.2c0 49.2 67.5 41.2 67.5 62.4c0 8.2-7.1 10.9-17 10.9c-14.7 0-33.7-6.1-48.6-14.2v40c16.5 7.1 33.2 10.1 48.5 10.1c36.9 0 62.3-15.8 62.3-47.8c0-52.9-67.9-43.4-67.9-63.4M640 261.6c0-45.5-22-81.4-64.2-81.4s-67.9 35.9-67.9 81.1c0 53.5 30.3 78.2 73.5 78.2c21.2 0 37.1-4.8 49.2-11.5v-33.4c-12.1 6.1-26 9.8-43.6 9.8c-17.3 0-32.5-6.1-34.5-26.9h86.9c.2-2.3.6-11.6.6-15.9m-87.9-16.8c0-20 12.3-28.4 23.4-28.4c10.9 0 22.5 8.4 22.5 28.4zm-112.9-64.6c-17.4 0-28.6 8.2-34.8 13.9l-2.3-11H363v204.8l44.4-9.4l.1-50.2c6.4 4.7 15.9 11.2 31.4 11.2c31.8 0 60.8-23.2 60.8-79.6c.1-51.6-29.3-79.7-60.5-79.7m-10.6 122.5c-10.4 0-16.6-3.8-20.9-8.4l-.3-66c4.6-5.1 11-8.8 21.2-8.8c16.2 0 27.4 18.2 27.4 41.4c.1 23.9-10.9 41.8-27.4 41.8m-126.7 33.7h44.6V183.2h-44.6z" />
                        </svg>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134c-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9c152.3 0 165.1-3.7 204 11.4c60.1 23.3 65.6 79.5 44 140.3c-21.5 62.6-72.5 89.5-140.1 90.3c-43.4.7-69.5-7-75.3 24.2M357.1 152c-1.8-1.3-2.5-1.8-3 1.3c-2 11.4-5.1 22.5-8.8 33.6c-39.9 113.8-150.5 103.9-204.5 103.9c-6.1 0-10.1 3.3-10.9 9.4c-22.6 140.4-27.1 169.7-27.1 169.7c-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9c.7-5.4-1.1 6.1 14.4-91.3c4.6-22 14.3-19.7 29.3-19.7c71 0 126.4-28.8 142.9-112.3c6.5-34.8 4.6-71.4-23.8-92.6" /></svg>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SubFooter;