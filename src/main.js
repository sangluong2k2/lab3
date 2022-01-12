import Navigo from "navigo";
import AboutPage from "./pages/about";
import AddNews from "./pages/addNews";
import admin from "./pages/admin";
import DetailNewsPage from "./pages/detailNews";
import EditNews from "./pages/editNews";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import NewsAdmin from "./pages/newsAdmin";
import signIn from "./pages/signin";
import signUp from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
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
    "/admin": () => {
        print(admin.render());
    },
    "/admin/news": () => {
        print(NewsAdmin.render())
    },
    "/admin/news/add": () => {
        print(AddNews.render())
    },
    "/admin/news/:id/edit" : ({data}) => {
        const { id } = data;
        print(EditNews.render(id));
    },
});
router.resolve();