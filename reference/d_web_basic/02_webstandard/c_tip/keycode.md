# keykoce

때로는 키보드를 컨트롤하여 사용하여하는 경우가 있습니다.
이러한 경우를 대비하여, 키보드 이벤트에 대해 간단하게 정리하였습니다.

[TOC]

```javascript
// javascript ----------------------------------------
document.addEventListener("keydown", function(event) {
  console.log(event.which);
}
// jQuery --------------------------------------------
$(document).keydown(function(event) {
  console.log(event.keyCode);
}
```

위 코드는 키보드를 클릭하였을때 나오는 코드를 확인하는 기능입니다 .

---

다음은 키보드를 누른 키와 일치여부를 판단하여 실행처리하게되는 내용입니다. 

```javascript
$(document).keydown(function(event) {
  if (event.keyCode == '37') {
    console.log('좌측 화살키를 누르셨습니다.');
  }
  else if (event.keyCode == '39') {
    console.log('우측 화살키를 누르셨습니다.');
  }
});
```

---

위에서 본 키보드 코드를 분류하여 아래에 표로 작성하였습니다.

|                                          |                                          |                                          |                                          |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| SPACE = 32  <br />PAGEUP = 33<br /> PAGEDN = 34<br />END = 35<br />HOME =36 | ←(중간) = 37<br />↑(중간) = 38<br />→(중간) = 39<br />↓(중간) = 40 | 윈도우(왼쪽) = 91<br />윈도우(오른쪽) = 92<br />기능키 = 93 | NUMLOCK = 144<br />SCROLLLOCK = 145<br />=(중간) = 187<br />-(중간) = 189<br />`(왼쪽콤마) = 192<br />(중간) = 220 |
| 0 = 48 <br />1 = 49 <br />2 = 50<br />3 = 51 <br />4 = 52 <br />5 = 53 <br />6 = 54 <br />7 = 55 <br />8 = 56 <br />9 = 57 | A = 65<br />B = 66<br />C = 67<br />D = 68<br />E = 69<br />F = 70<br />G = 71<br />H = 72<br />I = 73<br />J = 74<br />K = 75<br />L = 76<br />M = 77<br />N = 78<br />O = 79<br />P = 80<br />Q = 81<br />R = 82<br />S = 83<br />T = 84<br />U = 85<br />V = 86<br />W = 87<br />X = 88<br />Y = 89<br />Z = 90 | 0(오른쪽) = 96<br />1(오른쪽) = 97<br />2(오른쪽) = 98<br />3(오른쪽) = 99<br />4(오른쪽) = 100<br />5(오른쪽) = 101<br />6(오른쪽) = 102<br />7(오른쪽) = 103<br />8(오른쪽) = 104<br />9(오른쪽) = 105<br />.(오른쪽) = 110<br />/(오른쪽) = 111<br />*(오른쪽) = 106<br />+(오른쪽) = 107<br />-(오른쪽) = 109 | F1 = 112<br />F2 = 113<br />F3 = 114<br />F4 = 115<br />F5 = 116<br />F6 = 117<br />F7 = 118<br />F8 = 119<br />F9 = 120<br />F10 = 121<br />F11 = 122<br />F12 = 123 |

css-trick에서 정보 판단: https://css-tricks.com/snippets/javascript/javascript-keycodes/

코드입력시 표기해주는 사이트: <http://keycode.info/>

---

출처 : [firejune](https://firejune.com/731/event.keyCode+%EB%B2%88%ED%98%B8%ED%91%9C)

