var fileName = "image(2).jpg";
var fileNames = ["image(2).jpg", "image(2)(1).jpg"];

var fileName = findFileNameWithoutDuplicate(fileName, fileNames);
console.log(fileName);

function findFileNameWithoutDuplicate (fileName, fileNames) {
    if (fileNames.some((el, idx, arr) => el.toUpperCase() == fileName.toUpperCase())) {
        var fileNamePrefix = fileName.substring(0, fileName.lastIndexOf('.'));
        var fileNameSuffix = fileName.substring(fileName.lastIndexOf('.'), fileName.length);
        var regExp = new RegExp(addEscapeCharAbove(fileNamePrefix) + "\\(\\d+\\)" + addEscapeCharAbove(fileNameSuffix));
        var numbersInArray = fileNames.filter((el) => regExp.test(el))
                                    .map((el) => el.replace(new RegExp(addEscapeCharAbove(fileNamePrefix) + "\\("), ""))
                                    .map((el) => el.replace(new RegExp("\\)" + addEscapeCharAbove(fileNameSuffix)), ""))
                                    .map((el) => Number.parseInt(el));
        var maxNumberInArray = Math.max(0, ...numbersInArray);
        // console.log(maxNumberInArray);
    
        fileName = fileNamePrefix + 
                    "(" + (maxNumberInArray + 1) + ")" + 
                    fileNameSuffix
    }
    return fileName;
}

function addEscapeCharAbove(str) {
    return str.replace(/([\(\)\.])/g, "\\$1");
}