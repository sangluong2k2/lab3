
import { get } from "../api/post";
import Header from "../components/header";


const DetailNewsPage = {
    async render(id) {
        const {data} = await get(id);
        return `
        <div class="header">
            ${Header.render()}
        </div>
        <h1 class="text-center font-bold text-[36px] ">${data.title}</h1>
        <img class="mx-auto "src="${data.img}" />
        <p class="text-justify ">${data.desc}</p>
        `;
    },
};
export default DetailNewsPage;