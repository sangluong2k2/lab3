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

const print =  async (content, id) => {
    document.getElementById("article").innerHTML = await content.render(id);
};

router.on({
    "/": () =>  print(HomePage),
    "/about": () => print(AboutPage),
    "/news": () => print(NewsPage),
    "/news/:id": (data) => print(DetailNewsPage, data.data.id),
    "/signup": () => print(signUp),
    "/signin": () => print(signIn),
    "/admin": () => print(admin),
    "/admin/news": () => print(NewsAdmin),
    "/admin/news/add": () => print(AddNews),
    "/admin/news/:id/edit" : ({data}) => print(EditNews, data.data.id),
});
router.resolve();