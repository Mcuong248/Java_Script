// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu
//     Đặt màu văn bản thành #777
//     Đặt kích thước phông chữ thành 2rem
//     Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.

const para = document.getElementById("text")
para.style.color = "#777"
para.style.fontSize = "2rem"
para.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."

// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
const changeColor = document.querySelectorAll("p + ul li")
console.log(changeColor)
changeColor.forEach(element => {
    element.style.color = "blue"
});

// Câu 3:Sử dụng javascript để thực hiện những công việc sau
// 1.Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
// 2.Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
// 3.Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
// 4.Remove thẻ <li> 4
// 5.Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ

// 1.Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const li7 = document.querySelector("ul + ul li:last-child")
console.log(li7)
const li8 = document.createElement("li");
li8.innerText = "Item 8";
const li9 = document.createElement("li");
li9.innerText = "Item 9";
const li10 = document.createElement("li");
li10.innerText = "Item 10";
li7.insertAdjacentElement("afterend", li8)
li8.insertAdjacentElement("afterend", li9)
li9.insertAdjacentElement("afterend", li10)


// 2.Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const li1 = document.querySelector("ul + ul li")
console.log(li1)
li1.style.color = "red"

// 3.Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const li3 = document.querySelector("ul + ul li:nth-child(3)")
console.log(li3)
li3.style.backgroundColor = "blue"

// 4.Remove thẻ <li> 4
li3.nextElementSibling.parentElement.removeChild(li3.nextElementSibling)

// 5.Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const newLi4 = document.createElement("li");
newLi4.innerText = "li mới"
li3.insertAdjacentHTML("afterend", "<li> Đây là thẻ li4 mới </li>")