import Banner from "../components/banner";
import Header from "../components/header";
import NewsList from "../components/newsList";

const HomePage = {
    render() {
        return /* html */`
            <div class="header">
                ${Header.render()}
            </div>
            <div class="banner">
                ${Banner.render()}
            </div>
            <div>
                ${NewsList.render()}
            </div>
        `;
    },
};
export default HomePage;