//건너뛰기 링크 생성
//정확도가 0.3 이상인 것 중 각 종류 내에서 가장 정확도 높은 걸로 선택. 
//1,2,3,4,5숫자키 눌러 접근. (아직)
//버튼 style 설정(아직 )

var login = [0,0,0];
var main = [0,0,0];
var navbar = [0,0,0];
var searchbar = [0,0,0];
var sidebar = [0,0,0];

for (let i=1;i<14;i++){
	if (elemList[i][0] > 0.3) {
		if (0< i && i <= 2) {
			if (elemList[i][0] > login[0]) {
				login = elemList[i];
			}
		}
		else if (2 < i && i <= 8) {
			if (elemList[i][0] > main[0]) {
				main = elemList[i];
			}
		}
		else if (i === 9) {
			navbar = elemList[i];
		}
		else if (9 < i && i <= 11) {
			if (elemList[i][0] > searchbar[0]) {
				searchbar = elemList[i];
			}
		}
		else if (11 < i && i <= 13) {
			if (elemList[i][0] > sidebar[0]) {
				sidebar = elemList[i];
			}
		}
	}
}

//찾아낸 element의 id를 이용해 링크 만든다.
function makeLink(coordX,coordY,name) {
	//임시, 나중에 바꾼다. 
	if (coordX === 0 && coordY === 0) return document.createElement('a');

	var elem = document.elementFromPoint(coordX,coordY);
	if (!elem) return
	//만약 id 없다면 상위 element의 id 찾는다. 
	while (elem.id === "") {
		elem = elem.parentNode;
	}

	var skpLink = document.createElement('a');
	skpLink.href = `#${elem.id}`;
	skpLink.style = `position: absolute;
    top: -30px;
    left: 0;
    width: 138px;
    border: 1px solid #4ec53d;
    background: #333;
    text-align: center;`

    var linkText = document.createElement('span');
    linkText.innerText = name;
    linkText.style = `display: inline-block;
    padding: 2px 6px 0 0;
    font-size: 13px;
    line-height: 26px;
    color: #fff;
    letter-spacing: -1px;
    white-space: nowrap;`

	skpLink.appendChild(linkText);
	return skpLink;
}

var linkList = document.createElement('div');
linkList.style = `position: relative`;
linkList.appendChild(makeLink(login[1],login[2],'로그인'));
linkList.appendChild(makeLink(main[1],main[2],'본문'));
linkList.appendChild(makeLink(navbar[1],navbar[2],'메뉴'));
linkList.appendChild(makeLink(searchbar[1],searchbar[2],'검색'));
linkList.appendChild(makeLink(sidebar[1],sidebar[2],'사이드바'));
document.body.prepend(linkList);
return "HELLOOO";

