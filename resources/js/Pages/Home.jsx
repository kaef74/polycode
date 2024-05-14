import GuestLayout from '@/Layouts/GuestLayout.jsx';
import About from '../Components/HomePage/About.jsx';
import AboutCompiler from '../Components/HomePage/AboutCompiler.jsx';
import AboutCourses from '../Components/HomePage/AboutCourses.jsx';
import AboutLeaderboard from '../Components/HomePage/AboutLeaderboard.jsx';
import JoinUs from '../Components/HomePage/JoinUs.jsx';
import News from '../Components/HomePage/News.jsx';
import Welcome from '../Components/HomePage/Welcome.jsx';
import '../../css/Home.css';
import {Head} from "@inertiajs/react";

export default function Home({ auth }) {
    return (
        <GuestLayout
            auth={auth}
        >
            <Head title="Главная"/>
            <section className='home'>
                <Welcome />
                <News />
                <About />
                <AboutCompiler />
                <AboutCourses />
                <AboutLeaderboard />
                <JoinUs />
            </section>
        </GuestLayout>
    )
}
