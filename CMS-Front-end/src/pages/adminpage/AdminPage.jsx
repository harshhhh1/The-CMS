import { UserCard } from "../../components/UserCard";
import { Layout } from "../Layout";


export function AdminPage() {
    return(
        <Layout>
            <div className=" flex flex-col md:flex-row gap-4 p-4 ">
                {/* LEFT SIDE */}
                <div className="w-full lg:w-2/3">
                    {/* CARDS */}
                    <div className="flex gap-4 justify-between flex-wrap">
                        <UserCard type="student"/>
                        <UserCard type="teacher"/>
                        <UserCard type="parent"/>
                        <UserCard type="staff"/>
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className="w-full lg:w-1/3 bg-sky-300">r</div>

            </div>
        </Layout>
    );
}