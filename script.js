function minDate(dates) {
	
    let minYear = 9999;
  	
	for (let x of dates) {
		let year = Number(x.slice(0 , 4));
		minYear = Math.min(year , minYear);
	}

	console.log(minYear);

	dates = dates.filter((ele) => {
		let year = Number(ele.slice(0 , 4));
		if(year == minYear)return ele;
	});


	
	let minMonth = 13;

	for(let x of dates){
	
		let month = Number(x.slice(5 , 7));
		minMonth = Math.min(month , minMonth);
	}

	dates = dates.filter((ele) => {
		let month = Number(ele.slice(5 , 7));
		if(month == minMonth)return ele;
	});

	let minDay = 32;
	for(let x of dates){
		minDay = Math.min(Number(x.slice(8)) , minDay);
	}

	for(let x of dates){
		let day = Number(x.slice(8));
		if(day == minDay)return x;
	}
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];

alert(minDate(dates));