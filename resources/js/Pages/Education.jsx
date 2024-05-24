import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import Books from '../Components/Education/Books.jsx';
import DailyChallenge from '../Components/Education/DailyChallenge.jsx';
import EducationInfo from '../Components/Education/EducationInfo.jsx';
import SuggestedCourses from '../Components/Education/SuggestedCourses/SuggestedCourses.jsx';
import WeeklyChallenge from '../Components/Education/WeeklyChallenge.jsx';
import UserCourses from '../Components/Profile/UserCourses/UserCourses.jsx';
import '../../css/Education.css';

export default function Education({ auth, daily, weekly, serverTime, randomCourses, userCourses }) {
    return (
        <AuthenticatedLayout auth={auth}>
            <section className='education'>
                <div className='education__challenges'>
                    <DailyChallenge daily={daily} serverTime={serverTime} />
                    <WeeklyChallenge weekly={weekly} serverTime={serverTime} />
                </div>
                <div className='education__courses'>
                    <div className='education__usercourses'>
                        <UserCourses courses={userCourses} />
                    </div>
                    <SuggestedCourses courses={randomCourses} />
                </div>
                <EducationInfo />
                <Books />
            </section>
        </AuthenticatedLayout>
    );
}
