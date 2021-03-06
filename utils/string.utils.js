export function toSlug(title) {
    let slug;
    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();

    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/`|~|!|@|#|\||\$|%|\^|&|\*|\(|\)|\+|=|,|\.|\/|\?|>|<|'|"|:|;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/-----/gi, '-');
    slug = slug.replace(/----/gi, '-');
    slug = slug.replace(/---/gi, '-');
    slug = slug.replace(/--/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/@-|-@|@/gi, '');
    //In slug ra textbox có id “slug”
    return slug;
}

export function searchString(searchText, string) {
    return convertToSearch(string).search(convertToSearch(searchText)) !== -1;
}

export function formatPhoneNumber(tel) {
    var C = tel.replace(/[^0-9xX]/g, "").replace(/[xX]/g, "x");
    var B = "";
    if (C.indexOf("x") > -1) {
        B = " " + C.substr(C.indexOf("x"));
        C = C.substr(0, C.indexOf("x"))
    }
    if (C.length === 10) return C.replace(/(...)(...)(....)/g, "($1) $2 $3") + B;
    if (C.length === 11) return C.replace(/(....)(...)(...)/g, "($1) $2 $3") + B;
    return tel;
}

export const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
// Ex:  
// capitalize('fooBar'); // 'FooBar'
// capitalize('fooBar', true); // 'FooBar'

export const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')
// Ex:
// decapitalize('FooBar'); // 'fooBar'
// decapitalize('FooBar'); // 'fooBar'

export const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
// Ex:
// capitalizeEveryWord('hello world!'); // 'Hello World!'

export function stripHTMLTags(str) {
    return str.replace(/<[^>]*>/g, '');
}

export const averageBy = (arr, fn) => arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) / arr.length;
// Ex:
// averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
// averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5

export function isPhoneNumber(phone) {
    if (!phone) return false;
    return /^(\+?84|0)(1\d{9}|3\d{8}|5\d{8}|7\d{8}|8\d{8}|9\d{8})$/.test(phone);
}

export function isURL(str) {
    var urlRegex = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';
    var url = new RegExp(urlRegex, 'i');
    return str.length < 2083 && url.test(str);
}
