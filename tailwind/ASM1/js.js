function selectOption(element) {
    // Xóa lớp active khỏi tất cả các nút
    document.querySelectorAll('.flex span').forEach(btn => {
        btn.classList.remove('bg-blue-500', 'text-white');
        btn.classList.add('bg-gray-200', 'text-black');
    });

    // Thêm lớp active vào nút đã chọn
    element.classList.add('bg-blue-500', 'text-white');
    element.classList.remove('bg-gray-200', 'text-black');

    // Cập nhật trạng thái checked cho radio gốc
    element.previousElementSibling.checked = true;
}
let count = 1;

function increase() {
    count++;
    document.getElementById("number").innerText = count;
}

function decrease() {
    if (count > 1) {
        count--;
        document.getElementById("number").innerText = count;
    }
}
