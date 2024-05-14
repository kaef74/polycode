import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";

export default function Guest({ auth, children }) {
    return (
        <>
            <Header auth={auth} ></Header>
                {children}
            <Footer ></Footer>
        </>
    );
}
