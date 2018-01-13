/**
 * Created by Administrator on 2017/1/20 0020.
 */

var nodeJS = {
    existPath: function(path){
        // var fs = require('fs');
        // return fs.existsSync(path);
        return false;
    },
    readFile: function (filePath) {
        // var fs = require('fs');
        // if(nodeJS.existPath(filePath)){
        //     var content = fs.readFileSync(filePath, "utf-8");
        // }
        // else{
        //     return "";
        // }
        // return content;
        return "";
    },
    writeFile: function (filePath, content) {
        // var fs = require('fs');
        // fs.writeFileSync(filePath, content, "utf-8");
    }
}