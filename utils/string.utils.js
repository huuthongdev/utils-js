export default function ToSlug(title) {
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

export function SearchString(searchText, string) {
    return convertToSearch(string).search(convertToSearch(searchText)) !== -1;
}

export function FormatPhoneNumber(tel) {
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