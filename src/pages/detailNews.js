import Header from "../components/header";

const DetailNewsPage = {
    async render(id) {
        const response = await fetch("http://localhost:3001/post/"+id);
        const data = await response.json();
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