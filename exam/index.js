function getCountNumber(start, end) {
	var res = 0;
	for (var i = start; i < (end + 1); i++) {
		var str = parseInt(i, 10).toString(2);
		str = str.replace(/0/g, "");
		if( str === '11'){
				res++;
		}
	}
	if(res){
		return res;
	}else{
		return false;
	}
	
}


module.exports = {
    firstName: 'Vasily',
    secondName: 'Shatalkin',
	task: getCountNumber
}