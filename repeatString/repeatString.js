const repeatString = function(string, n) { 
        let i;
        let stringresult = "";
        if (n<0) {
            return stringresult = "ERROR";
        } else {
            for (i=0; i<n; i++) {
                stringresult += "hey";
            }
            return stringresult;
        }
    }


module.exports = repeatString
