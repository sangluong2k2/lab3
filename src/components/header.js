const Header = {
    render() {
        return /* html */ `
        <div class="bg-[#191f37] py-4">
        <a href="">
          <img src="https://picsum.photos/250/100" class="mx-auto" alt="">
        </a>
      </div>
      <div class="bg-[#ca7802]">
        <ul class="flex">
          <li><a href="/" class="block px-4 py-3 hover:bg-[#191f37] hover:text-white font-bold">Trang chủ </a></li>
          <li><a href="/news" class="block px-4 py-3 hover:bg-[#191f37] hover:text-white font-bold">Tin tức</a></li>
          <li><a href="/admin" class="block px-4 py-3 hover:bg-[#191f37] hover:text-white font-bold">Admin</a></li>
          <form action="" class="ml-[10px] mt-[10px]">
            <input type="text">
            <button class="border bg-blue-800 ... px-[5px] text-white ... border-none hover:bg-yellow-400 ">Tìm kiếm</button>
          </form>
          <div class="flex ml-[200px]">
          <li clas="ml-[40px]"><a href="/signup" class="block px-4 py-3 hover:bg-[#191f37] hover:text-white font-bold">Đăng kí</a></li>
          <li><a href="/signin" class="block px-4 py-3 hover:bg-[#191f37] hover:text-white font-bold">Đăng nhập</a></li>
          </div>
        </ul>
      </div>
        `;
    },
};
export default Header;