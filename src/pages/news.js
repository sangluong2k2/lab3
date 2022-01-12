import Header from "../components/header";
import NewsList from "../components/newsList";

const NewsPage = {
    render() {
        return `
            <div class="header">
                ${Header.render()}
            </div>
            ${NewsList.render()}
        `;
    },
};
export default NewsPage;