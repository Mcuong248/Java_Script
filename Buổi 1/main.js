//  Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
//     Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120

function tinhGiaiThua(a)
var n = prompt('Nhap gia tri cua N')
		var gt = 0
		function giaithua(x)
		{
			var giaithua=1;
			for(var i=1;i<=n;i++)
			{
				giaithua*=i
			}
			alert('Giai Thua bang '+giaithua)
		}
var n=giaithua(n)

//  Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
// 		Ví dụ: reverseString(‘hello’) => olleh

function daoNguocChuoi(s){
	let result = '';
	for (let i = s.length; i > -1; i--) {
			result += s.charAt(i);
	  }
	  return result;
	}
	
console.log(daoNguocChuoi('hello'))
	
// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
// 	Ví dụ: translate(‘VN’) => “Xin chào”
// 	translate(‘EN’) => “Hello”

function translate(message) {
	switch (message) {
	  case "VN":
		return "Xin chào";
	  case "EN":
		return "Hello";
	  case "JP":
		return "やあ";
	  case "ISO":
		return "你好";
	  case "DE":
		return "Hallo";
	  default:
		"";
	}
  }
  
  console.log(translate("VN"));


//   Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
//   	Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…”
function subString(s){
    let temp = '';
    for(let i = 0; i < 10 ;i++){
        temp += s.charAt(i);
    }
    return temp + '...';
}

console.log(subString('xinchaocacbandenvoiTechmaster'))
