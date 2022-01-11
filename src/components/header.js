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
          <li><a href="/about" class="block px-4 py-3 hover:bg-[#191f37] hover:text-white font-bold">Tuyển sinh</a></li>
          <li><a href="/product" class="block px-4 py-3 hover:bg-[#191f37] hover:text-white font-bold">Chương trình đào tạo</a></li>
          <li><a href="/contact" class="block px-4 py-3 hover:bg-[#191f37] hover:text-white font-bold">Góc sinh viên</a></li>
          <li><a href="/contact" class="block px-4 py-3 hover:bg-[#191f37] hover:text-white font-bold">Tuyển dụng</a></li>
          <form action="" class="ml-[70px] mt-[10px]">
            <input type="text">
            <button class="border bg-blue-800 ... px-[5px] text-white ... border-none hover:bg-yellow-400 ">Tìm kiếm</button>
          </form>
        </ul>
      </div>
        `;
    },
};
export default Header;