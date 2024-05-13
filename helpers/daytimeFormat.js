const isValidDate = dateString => {
  // Biểu thức chính quy kiểm tra định dạng YYYY-MM-DD
  var regex = /^\d{4}-\d{2}-\d{2}$/;

  // Kiểm tra nếu chuỗi phù hợp với định dạng và cũng là ngày hợp lệ
  if (!regex.test(dateString)) return false;

  var parts = dateString.split('-');
  var year = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var day = parseInt(parts[2], 10);

  // Kiểm tra xem ngày, tháng, năm có hợp lệ hay không
  if (
    year < 1000 ||
    year > 9999 ||
    month == 0 ||
    month > 12 ||
    day == 0 ||
    day > 31
  )
    return false;

  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Kiểm tra năm nhuận
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    monthLength[1] = 29;

  // Kiểm tra ngày có hợp lệ trong tháng
  return day <= monthLength[month - 1];
};

const isFutureDate = dateString => {
  // Tạo một đối tượng Date từ chuỗi đầu vào
  const inputDate = new Date(dateString);

  // Tạo một đối tượng Date từ thời gian hiện tại
  const currentDate = new Date();

  // So sánh ngày nhập vào với ngày hiện tại
  return inputDate > currentDate;
};

const calculateAge = dobString => {
  // Tạo một đối tượng Date từ chuỗi đầu vào
  const dob = new Date(dobString);

  // Tạo ngày hiện tại
  const now = new Date();

  // Lấy ra năm của ngày sinh và ngày hiện tại
  const dobYear = dob.getFullYear();
  const nowYear = now.getFullYear();

  // Tính tuổi bằng cách lấy hiệu của năm hiện tại và năm sinh
  let age = nowYear - dobYear;

  // Kiểm tra xem ngày sinh trong năm hiện tại đã qua chưa
  // Nếu chưa, giảm tuổi đi 1
  if (now < new Date(nowYear, dob.getMonth(), dob.getDate())) {
    age--;
  }

  return age;
};

export { isValidDate, isFutureDate, calculateAge };
