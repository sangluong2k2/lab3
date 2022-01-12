import data from "../data";

const DetailNewsPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return `
        <h1 class="text-center font-bold text-[36px] ">${result.title}</h1>
        <img class="mx-auto "src="${result.img}" />
        <p class="text-justify ">${result.desc}</p>
        `;
    },
};
export default DetailNewsPage;