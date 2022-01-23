import axios from "axios";
import HeaderAdmin from "../components/headerAdmin";
import { add } from "../api/post";

const AddNews = {
    render(){
        return /*html*/ `
        <div>
        <div class="nav my-[20px]">
            ${HeaderAdmin.render()}
        </div>
          
        <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" id="add-post" method="POST">
              <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                 <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                        <label for="company-website" class="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        
                        <input type="text" name="company-website" id="title-post" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-[5px] sm:text-sm border-gray-300" placeholder="Tiêu đề">
                    </div>
                   </div>
                 </div>
      
                  <div>
                    <label for="about" class="block text-sm font-medium text-gray-700">
                      Desc
                    </label>
                    <div class="mt-1">
                      <textarea id="desc-post" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Nội dung..."></textarea>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div class="mt-1 flex items-center">
                     <input type="file" id="img-post" className="form-control mb-2 mr-sm-2" placeholder="" />
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
      </div>
        `;
    },  
    afterRender(){
      const formAdd = document.querySelector('#add-post');
      formAdd.addEventListener('submit', (e) => {
        e.preventDefault();
        add({
          title: document.querySelector('#title-post').value,
          img: document.querySelector('#img-post').value,
          desc: document.querySelector('#title-post').value,
        })
        .then((result) => console.log(result.data))
        .catch((error) => console.log(error))
      })
    }
};
export default AddNews;
 