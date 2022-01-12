import Navigo from "navigo";
import Header from "./components/header";
import AboutPage from "./pages/about";
import admin from "./pages/admin";
import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import signIn from "./pages/signin";
import signUp from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("article").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/news": () => {
        print(NewsPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/signup": () => {
        print(signUp.render());
    },
    "/signin": () => {
        print(signIn.render());
    },
    "/admin/dashboard": () => {
        print(admin.render())
    }
});
router.resolve();