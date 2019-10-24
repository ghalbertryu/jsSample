var fileName = "image.jpg";
var fileNames = ["image.jpg", "image(1).jpg"];

var fileName = findFileNameWithoutDuplicate(fileName, fileNames);
console.log(fileName);


function findFileNameWithoutDuplicate (fileName, fileNames) {
    if (fileNames.some((el, idx, arr) => el.toUpperCase() == fileName.toUpperCase())) {
        var fileNamePrefix = fileName.substring(0, fileName.lastIndexOf('.'));
        var fileNameSuffix = fileName.substring(fileName.lastIndexOf('.'), fileName.length );
        var regExp = new RegExp(fileNamePrefix + "\\(\\d+\\)" + fileNameSuffix, "");
        var numbersInArray = fileNames.filter((el) => regExp.test(el))
                                    .map((el) => el.replace(new RegExp(fileNamePrefix + "\\(", ""), ""))
                                    .map((el) => el.replace(new RegExp("\\)" + fileNameSuffix, ""), ""))
                                    .map((el) => Number.parseInt(el));
        var maxNumberInArray = Math.max(0, numbersInArray);
        // console.log(maxNumberInArray);
    
        fileName = fileNamePrefix + 
                    "(" + (maxNumberInArray + 1) + ")" + 
                    fileNameSuffix
    }
    return fileName;
}