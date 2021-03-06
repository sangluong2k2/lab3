import { getAll, remove } from "../api/post";
import HeaderAdmin from "../components/headerAdmin";


const NewsAdmin = {
    async render () {
      const {data} = await getAll()
        return /*html*/ `
        <div class="nav">
            ${HeaderAdmin.render()}
        </div>
        <div class="my-[20px] ">
            <button class=" font-sans p-1 rounded-[5px] bg-black text-white font-bold"><a href="/admin/news/add">Thêm mới</a></button>
        </div>
        <div class="flex flex-col">
       
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                ${data.map((post) => `
                <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        ${post.title}
                      </div>
                      
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">${post.id}</div>
                
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Admin
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="/admin/news/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                  <button data-id=${post.id} class="btn btn-remove">Remove</button>
                </td>
              </tr>
                    `).join("")}
                 
                  <!-- More people... -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        `;
     },
     afterRender(){
       const buttons = document.querySelectorAll('.btn');
       buttons.forEach(button => {
         const id = button.dataset.id;
         button.addEventListener('click', () => {
          const confirm = window.confirm("Mày có chắc chắn muốn xóa không?");
          if(confirm){
              remove(id).then(() => console.log("Mày đã xóa thành công"));
          }
         })
       })
     }
};
export default NewsAdmin;