// Tagged Template
const nama = 'Dliyaulhaq Mufliansyah';
const umur = 16;

function coba(strings, ...values) {
    // let result = '';
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;

    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
}
const str = coba `Halo, nama saya ${nama}, saya berumur ${umur} Tahun.`;
console.log(str);