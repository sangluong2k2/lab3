import Header from "../components/header";
import NewsList from "../components/newsList";

const NewsPage = {
    async render() {
        return `
            <div class="header">
                ${Header.render()}
            </div>
            ${await NewsList.render()}
        `;
    },
};
export default NewsPage;