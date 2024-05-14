
import { Link } from '@inertiajs/react';
import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";

export default function Authenticated({ auth, user, children }) {
    return (
        < >
            <Header auth={auth} ></Header>
                {children}
            <Footer ></Footer>
        </>
    );
}
