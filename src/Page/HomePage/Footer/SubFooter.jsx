import { LiaPhoneVolumeSolid } from "react-icons/lia";

const SubFooter = () => {
    return (
        <div className="max-w-7xl mx-auto pt-5 flex justify-between">

            <div className="flex items-center">
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


            <div className="grid grid-cols-3">
                <div>
                    <h2 className="font-medium pt-2">
                        Download App on Mobile :
                    </h2>
                    <p className="text-xs text-gray-400">
                        15% discount on your first purchase
                    </p>
                </div>

            </div>

        </div>
    );
};

export default SubFooter;