# 웹폰트 사용하기 (웹폰트 101)

## 1. 웹폰트란?

방문자의 로컬 컴퓨터에 폰트 설치 여부와 상관 없이 온라인의 특정 서버에 위치한 폰트 파일을 다운로드하여 화면에 표시해주는 웹 전용 폰트입니다.
예를 들면, 웹폰트를 사용하지 않았을 경우 **나눔고딕 폰트 미설치 PC**에서는 기본 폰트인 돋움 폰트가 노출되고 **나눔고딕 폰트 설치 PC**에서는 나눔고딕 폰트가 노출됩니다.
[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-62-1024x469.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-62)
하지만 웹폰트를 사용할 경우에는 **나눔고딕 폰트 설치 유무와 상관 없이** 나눔고딕 폰트가 노출됩니다.
[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-63)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-63)

## 2. 웹폰트를 사용하기 위해 알아야 @font-face 속성

CSS

| 123456789101112131415 | @font-face {  font-family: NanumSquareWeb;  src: local(NanumSquareR),       local(NanumSquare),       url(NanumSquareR.eot?#iefix) format('embedded-opentype'),       url(NanumSquareR.woff) format('woff'),       url(NanumSquareR.ttf) format('truetype');  font-style: normal;  font-weight: normal;  unicode-range: U+0-10FFFF;} h1 {  font-family: NanumSquareWeb, sans-serif;} |
| --------------------- | ---------------------------------------- |
|                       |                                          |

나눔스퀘어 폰트를 웹폰트로 사용하려고 위의 코드처럼 @font-face를 적용합니다. @font-face에는 font-family, src, font-style, font-weight, unicode-range 속성을 사용할 수 있습니다.

### 2-1. font-family

CSS 문서에서 사용할 웹폰트 패밀리명 입니다.

CSS

| 1234 | @font-face {  font-family: NanumSquareWeb;   src: url(NanumSquareR.woff) format('woff')} |
| ---- | ---------------------------------------- |
|      |                                          |

위의 코드는 ‘내가 사용할 웹폰트 패밀리명을 NanumSquareWeb으로 하겠다’ 라고 선언한 예 입니다.
font-family에서 선언한 웹폰트 패밀리명과 사용할 웹폰트 명이 반드시 같아야 하는 것은 아닙니다.

CSS

| 1234 | @font-face {  font-family: '블로그 제목';   src: url(NanumSquareR.woff) format('woff')} |
| ---- | ---------------------------------------- |
|      |                                          |

위의 코드처럼 웹폰트 패밀리명을 ‘블로그 제목’으로 정하고 하고 나눔스퀘어 폰트를 사용해도 상관 없습니다. 하지만 유지보수를 위해서는 웹폰트 패밀리명과 사용할 폰트명을 동일하게 해주는 것이 좋습니다.
\* IE 11 이하에서는 font-family에 선언한 웹폰트 패밀리명이 31자 이상이 되면 적용이 되지 않습니다(한글, 영문 모두). 그러므로 IE를 고려하려면 웹폰트 패밀리명을 정할 때에도 주의하셔야 합니다. [참고](https://msdn.microsoft.com/en-us/library/windows/desktop/dd183499(v=vs.85).aspx)
[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-64-1024x136.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-64)

### 2-2. src

로컬에 이미 설치 된 폰트의 경로를 적는 local() 속성과 다운로드 할 웹폰트의 주소를 적는 url() 속성이 있습니다. 두 속성 모두 콤마(,)를 사용하여 여러번 중첩해서 사용할 수 있으며 마지막에 오는 속성에 세미콜론만 붙여주면 됩니다.
브라우저에 적용할 수 있는 폰트를 찾을 때까지 선언한 순서대로 이동합니다.

CSS

| 12345678 | @font-face {  font-family: NanumSquareWeb;   src: local(NanumSquareR), /* 첫번째 */       local(NanumSquare), /* 두번째 */       url(NanumSquareR.eot), /* 세번째 */       url(NanumSquareR.woff), /* 네번째 */       url(NanumSquareR.ttf); /* 다섯번째 */} |
| -------- | ---------------------------------------- |
|          |                                          |

위 코드는 local(NanumSquareR) → local(NanumSquare) → url(NanumSquareR.eot) → url(NanumSquareR.woff) → url(NanumSquareR.ttf) 순으로 폰트를 찾습니다.
만약 나눔스퀘어 폰트가 설치되지 않은 PC 사용자가 크롬브라우저를 통해 웹 사이트에 접속하면 local(NanumSquareR) → local(NanumSquare) → url(NanumSquareR.eot) → url(NanumSquareR.woff) 순으로 이동하여 NanumSquareR.woff 파일이 적용 됩니다. 왜냐하면 크롬브라우저에서는 .eot파일을 지원해주지 않기 때문입니다. [참고](https://www.w3schools.com/cssref/css3_pr_font-face_rule.asp)
즉, 불필요한 다운로드가 일어나게 됩니다.
[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-65-1024x143.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-65)

이러한 불필요한 다운로드를 막기 위해서 format 속성을 사용합니다. format 속성을 사용하면 브라우저에서 지원 가능한 파일만 다운로드 받을 수 있습니다.

CSS

| 12345678 | @font-face {  font-family: NanumSquareWeb;   src: local(NanumSquareR), /* 첫번째 */       local(NanumSquare), /* 두번째 */       url(NanumSquareR.eot) format('embedded-opentype'),       url(NanumSquareR.woff) format('woff'), /* 세번째 */       url(NanumSquareR.ttf) format('truetype'); /* 네번째 */} |
| -------- | ---------------------------------------- |
|          |                                          |

위의 코드로 변경하게 되면 지원 불가능한 .eot파일은 건너 뛰고 local(NanumSquareR) → local(NanumSquare) → url(NanumSquareR.woff) 순으로 이동하여 NanumSquareR.woff 파일이 적용 됩니다.
[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-66-1024x107.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-66)

\* IE 8 이하브라우저에서는 local() 속성을 인식하지 못하고, 사용자 로컬에 폰트가 잘 못 설치된 경우 원하는 화면이 노출되지 않을 수 있기 때문에 local() 속성을 대부분 사용하지 않습니다.

### 2-3. font-weight, font-style

폰트이름을 하나로 하고 여러개의 스타일을 표현하고자 할 때 사용합니다.

CSS

| 1234567891011121314151617181920 | @font-face {  font-family: NanumSquareWeb;  src: url(NanumSquareL.woff) format('woff');  font-weight: 300;}@font-face {  font-family: NanumSquareWeb;  src: url(NanumSquareR.woff) format('woff');  font-weight: 400;}@font-face {  font-family: NanumSquareWeb;  src: url(NanumSquareB.woff) format('woff');  font-weight: 700;}@font-face {  font-family: NanumSquareWeb;  src: url(NanumSquareEB.woff) format('woff');  font-weight: 800;} |
| ------------------------------- | ---------------------------------------- |
|                                 |                                          |

위의 코드를 보면  웹폰트 패밀리명은 NanumSquareWeb으로 하나지만 font-weight를 이용하여 사용할 웹폰트를 다르게 선언하고 있습니다.(@font-face에 적용한 font-weight는 일반적으로 사용되는 굵기에 대응하는 값을 적어주는 것이 좋습니다. [참고](https://developer.mozilla.org/en/docs/Web/CSS/font-weight#Common_weight_name_mapping))
font-weight가 300일 경우에는 NanumSquareL.woff,
font-weight가 400일 경우에는 NanumSquareR.woff,
font-weight가 700일 경우에는 NanumSquareB.woff,
font-weight가 800일 경우에는 NanumSquareEB.woff 가 적용됩니다.
font-weight 200, font-weight 600은 선언이 안되있는데 font-weight: 200과 font-weight:600일 경우 어떤 웹폰트가 적용될까요?

CSS

| 12345678 | h1 {  font-family: NanumSquareWeb, sans-serif;  font-weight: 200; /* ? */}h2 {  font-family: NanumSquareWeb, sans-serif;  font-weight: 600; /* ? */} |
| -------- | ---------------------------------------- |
|          |                                          |

만약 정확히 주어진 font-weight를 사용할 수 없다면 실제로 렌더링 되는 font-weight를 결정하기 위해 다음과 같은 규칙 적용 됩니다. [참고](https://developer.mozilla.org/en/docs/Web/CSS/font-weight#Fallback_weights)

- 만약 font-weight가 600 이상이면, 가능한 큰 font-weight 중 가장 가까운 font-weight가 적용됩니다.(만약 없다면 작은 font-weight 중 가까운 font-weight)

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-15-1024x188.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-15)

- 만약 font-weight가 300 이하이면, 가능한 작은 font-weight 중 가장 가까운 font-weight가 적용됩니다(만약 없다면 큰 font-weight 중 가까운 font-weight)

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-16-1024x188.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-16)

- 만약 font-weight가 400이면, 500이 적용되고 500이 없으면 300 이하일 때 규칙이 적용됩니다.

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-17-1024x190.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-17)

- 만약 font-weight가 500이면, 400이 적용되고 400이 없으면 300 이하일 때 규칙이 적용됩니다.

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-18-1024x190.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-18)

위의 규칙에 따르면 **font-weight: 200**은 가능한 작은 font-weight 중 가까운 font-weight: 300이 적용되어 **NanumSquareL 폰트가 적용**되고,** font-weight: 600**은 가능한 큰 font-weight 중 가까운 font-weight: 700이 적용되어** NanumSquareB가 적용**됩니다.

CSS

| 12345678 | h1 {  font-family: NanumSquareWeb, sans-serif;  font-weight: 200; /* NanumSquareL */}h2 {  font-family: NanumSquareWeb, sans-serif;  font-weight: 600; /* NanumSquareB */} |
| -------- | ---------------------------------------- |
|          |                                          |

\* IE 8 이하에서 font-weight 관련된 이슈가 있습니다.

- font-weight: 100 ~ 500은 normal로 , font-weight: 600~900은 bold로 렌더링 됩니다.
  [![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-67-564x1024.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-67)
- font-weight: 600이 적용되지 않을 수 있습니다.
  [![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-68)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-68)

이 이슈는 font-weight를 사용하지 않고 웹폰트 패밀리명을 굵기마다 각각 다르게 설정하면 해결할 수 있습니다.

CSS

| 12345678 | @font-face {  font-family: NanumSquareWeb-Light;  src: url(NanumSquareL.woff) format('woff');}@font-face {  font-family: NanumSquareWeb-Regular;  src: url(NanumSquareR.woff) format('woff');} |
| -------- | ---------------------------------------- |
|          |                                          |

### 2-4. unicode-range

사용할 유니코드의 범위를 정합니다. 유니코드 범위 내 사용하는 문자가 없으면 웹폰트를 다운로드 하지 않습니다.([유니코드 표](https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C_0000~0FFF))

#### 2-4-1. 단일코드

U+AC01 처럼 단일 유니코드를 사용할 수 있습니다. 콤마(,)를 이용해서 두 개 이상의 값도 넣을 수 있습니다.

CSS

| 12345 | @font-face {  font-family: NanumSquareWeb;  src: url(NanumSquareL.woff) format('woff');  unicode-range: U+AC01, U+AC08;} |
| ----- | ---------------------------------------- |
|       |                                          |

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-72-1024x186.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-72)

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-70-1024x52.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-70)

U+AC01은 ‘각’에 해당하고 U+AC08은 ‘갈’에 해당하므로 ‘각’과 ‘갈’ 부분이 변경되었습니다.

#### 2-4-2. 범위코드

‘-‘ 를 이용하여 유니코드 범위를 설정하여 사용할 수 있습니다.

CSS

| 12345 | @font-face {  font-family: NanumSquareWeb;  src: url(NanumSquareL.woff) format('woff');  unicode-range: U+AC07-AC0A, U+AC00;} |
| ----- | ---------------------------------------- |
|       |                                          |

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-73-1024x189.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-73)

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-74-1024x51.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-74)

U+AC07-AC0A는 ‘갇갈갉갊’에 해당하고 U+AC00은 ‘가’에 해당하므로 ‘갇갈갉갊’과 ‘가’ 부분이 변경되었습니다.

#### 2-4-3. 와일드카드

‘?’를 이용하여 유니코드 범위를 설정할 수 있습니다. ‘?’는 임의의 16진수 중 하나로 0 ~ F 의 값이 들어갈 수 있습니다.

CSS

| 12345 | @font-face {  font-family: NanumSquareWeb;  src: url(NanumSquareL.woff) format('woff');  unicode-range: U+003?;} |
| ----- | ---------------------------------------- |
|       |                                          |

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-75)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-75)

#### [![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-76-1024x51.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-76)

U+003? 는 U+0030, U+0031, U+0032, … , U+003E, U+003F 이고 U+0030-003F 입니다. 그러므로 범위에 해당하는 ‘0123456789:;<=>?’ 부분이 변경되었습니다.

#### 2-4-4. 사용법

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-77-1024x300.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-77)

unicode-range는 네이버 사전처럼 다국어를 지원해주는 사이트에서 웹폰트를 적용할 때 사용하면 좋습니다.
왼쪽 그림과 오른쪽 그림은 동일한 UI를 사용하고 있는 아랍어 사전, 캄보디아어 사전 입니다.
아랍어 사전일 때는 아랍어에 해당하는 웹폰트를 다운로드 하면 되고, 캄보디아어 사전일 때는 캄보디아어에 해당하는 웹폰트를 다운로드 하면 됩니다. 아랍어 사전일 때 캄보디아어에 해당하는 웹폰트를 다운로드 해도 적용할 수가 없어서 용량 낭비이기 때문입니다.

CSS

| 12345678910 | @font-face {   font-family: NanumSquareWeb;  src: url(NanumSquareR.woff) format('woff'); /* 나눔스퀘어 전체 */  unicode-range: U+06??; /* 아랍어 */}@font-face {  font-family: NanumSquareWeb;  src: url(NanumSquareR.woff) format('woff'); /* 나눔스퀘어 전체 */  unicode-range: U+1780-17FF; /* 캄보디아어 */} |
| ----------- | ---------------------------------------- |
|             |                                          |

만약 나눔스퀘어체가 모든 언어를 포함하고 있을 때, 위의 코드처럼 작성하면 될 것 같지만 잘못된 코드입니다.  아랍어를 사용해도 NanumSquareR.woff(3MB) 파일을 다운로드 하고 캄보디아어를 사용해도 NanumSquareR.woff(3MB) 파일을 다운로드 하기 때문입니다.  unicode-range를 사용하지 않는 것과 같습니다.

CSS

| 12345678910 | @font-face {   font-family: NanumSquareWeb;  src: url(NanumSquareR-Arab.woff) format('woff'); /* 나눔스퀘어 아랍어 부분 */  unicode-range: U+06??; /* 아랍어 */}@font-face {  font-family: NanumSquareWeb;  src: url(NanumSquareR-Cambodia.woff) format('woff'); /* 나눔스퀘어 아랍어 부분 */  unicode-range: U+1780-17FF; /* 캄보디아어 */} |
| ----------- | ---------------------------------------- |
|             |                                          |

그래서 폰트 파일도 나누어야 합니다. 위의 코드를 보면 아랍어에 해당하는 유니코드에는 NanumSquareR-Arab.woff(14KB), 캄보디아어에 해당하는 유니코드에는 NanumSquareR-Cambodia.woff(7KB)를 url에 적용했습니다. 그래서 아랍어를 사용하는 곳에서는 NanumSquareR-Arab.woff(14KB)만 다운로드하고 캄보디아어를 사용하는 곳에서는 NanumSquareR-Cambodia.woff(7KB)만 다운로드 하게 됩니다.
NanumSquareR.woff(3MB)를 다운로드 하는 것 보다 많은 용량을 줄일 수 있습니다.

## 3. 브라우저별 대응 방법

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-19-1024x223.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-19)

위 그림을 보면 브라우저마다 지원하는 파일종류가 다르다는 것을 알 수 있습니다. EOT는 IE 브라우저만 지원을 하고 WOFF는 모든 브라우저에서 지원을 합니다. 그래서 모든 브라우저에서 웹폰트를 사용하려면 src 속성에 코드를 추가해야 합니다.

### 3-1. IE 6~8

IE 6~8은 EOT 파일만 지원하므로 EOT 파일을 내려받도록 해야합니다.

CSS

| 12345 | @font-face {  font-family: NanumSquareWeb;  src: url(NanumSquareR.eot) format('embedded-opentype'),        url(NanumSquareR.ttf) format('truetype');} |
| ----- | ---------------------------------------- |
|       |                                          |

위 코드처럼 작성하면 될 것 같지만 IE 6~8은 format(’embedded-opentype’) 처럼 포맷명을 해석하지 못합니다. 그래서 위의 코드는 다음과 같이 해석됩니다.

CSS

| 1234 | @font-face {  font-family: NanumSquareWeb;  src: url(NanumSquareR.eot%format('embedded-opentype')%url(NanumSquareR.ttf)%format('truetype'));} |
| ---- | ---------------------------------------- |
|      |                                          |

format부분을 하나의 문자열로 인식하기 때문에 url에 긴 문자열이 들어가서 결국 Not Found가 발생합니다.

CSS

| 12345 | @font-face {  font-family: NanumSquareWeb;  src: url(NanumSquareR.eot?#iefix) format('embedded-opentype'), /* IE 6 ~ 8 */       url(NanumSquareR.ttf) format('truetype');} |
| ----- | ---------------------------------------- |
|       |                                          |

그래서 위 코드처럼 파일명 뒤에 물음표(?)를 추가합니다. 물음표 이후의 구문은 쿼리문으로 인식하기 때문에 모두 무시되어 NanumSquare.eot? 파일을 다운로드 하기 때문입니다.

### 3-2. IE 호환성 보기 모드

IE 호환성 보기 모드에서는 물음표(?) 속임수를 사용할 수 없습니다. 물음표(?)를 추가해도 format이 속성이 있거나 url이 속성이 한 번 더 사용된 경우 인식을 하지 못하기 때문입니다. 그래서 src를 따로 구분하여 별도 정의해 줍니다.

CSS

| 123456 | @font-face {  font-family: NanumSquareWeb;  src: url(NanumSquareR.eot); /* IE 호환성 보기 */  src: url(NanumSquareR.eot#iefix) format('embedded-opentype'), /* IE 6 ~ 8 */       url(NanumSquareR.ttf) format('truetype');} |
| ------ | ---------------------------------------- |
|        |                                          |

IE 6 ~ 8 에서 local() 속성을 인식하지 못하는 것을 이용하여 물음표(?) 속임수 대신에 스마일(![☺](https://s.w.org/images/core/emoji/2.3/svg/263a.svg))을 사용할 수 있습니다.

CSS

| 123456 | @font-face {  font-family: NanumSquareWeb;  src: url(NanumSquareR.eot); /* IE 호환성 보기 */  src: local(![☺](https://s.w.org/images/core/emoji/2.3/svg/263a.svg)), /* IE 6 ~ 8 */       url(NanumSquareR.ttf) format('truetype');} |
| ------ | ---------------------------------------- |
|        |                                          |

### 

### 3-3. 모던 브라우저

W3C의 표준을 비교적 빠르게 잘 반영하는 웹 브라우저(IE9+, Chrome, Safari, Opera..) 들은 WOFF를 지원합니다.

CSS

| 1234567 | @font-face {  font-family: NanumSquareWeb;  src: url(NanumSquareR.eot); /* IE 호환성 보기 */  src: url(NanumSquareR.eot#iefix) format('embedded-opentype'), /* IE 6 ~ 8 */       url(NanumSquareR.woff) format('woff'), /* 모던 브라우저 */       url(NanumSquareR.ttf) format('truetype');} |
| ------- | ---------------------------------------- |
|         |                                          |

### 3-4. 구 모바일 브라우저

WOFF나 TTF 포맷을 지원하지 않던 몇몇 구 버전 모바일 웹 브라우저(예를들어 Safari 4.3 이하, Android 4.3 이하, Opera Mobile 10 이하 등)들을 위해 CSS2에서 폰트로 활용할 수 있도록 명시 된 SVG(Scalable Vector Graphics) 포맷을 이용하기도 합니다.
SVG 포맷의 서체는 하나의 파일 안에 여러 서체를 넣고 ID(ex. #NanumGothicRegular)를 부여하여 개별적으로 호출 할 수 있고, SVG Viewer가 탑재된 모든 기기에서 표현 할 수 있는 장점이 있지만, 서체에 대한 폰트 **힌팅** 정보가 없기 때문에 작은 글씨를 표현할 때 가독성이 떨어지는 단점도 있습니다.

CSS

| 12345678 | @font-face {  font-family: NanumSquareWeb;  src: url(NanumSquareR.eot); /* IE 호환성 보기 */  src: url(NanumSquareR.eot#iefix) format('embedded-opentype'), /* IE 6 ~ 8 */       url(NanumSquareR.woff) format('woff'), /* 모던 브라우저 */       url(NanumSquareR.ttf) format('truetype'),       url(NanumSquareR.svg#NanumSquareR) format('svg'); /* 구 모바일 브라우저 */} |
| -------- | ---------------------------------------- |
|          |                                          |

> **힌팅이란?**
> 윤관선 글자 정보에 약간의 힌트(hint)를 주어 폰트를 비트맵으로 변환할 때 그 힌트를 이용하여 글자의 변형이나 왜곡 없이 더 나은 출력 결과를 얻게 만든다는 의미에서 붙여진 용어 입니다. 즉, 모니터상에서 글씨가 보다 뚜렷하게 보이게끔 글자 스스로 약간 글모양을 변형시키는 기술 입니다.[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-21-1024x574.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-21)
>
> 첫번째 줄 ‘활’은 힌팅이 적용되지 않은 폰트인데 확대했을 때 깨져 보이는 부분이 있지만 두번째 줄 ‘활’은 힌팅이 적용되어있고 확대 했을 때 깨짐이 덜합니다.

### 3-4. WOFF2 지원 브라우저

WOFF1 버전에 비해 평균 30%정도 압축 형식을 제공(경우에 따라 최대 50%)하는 WOFF2를 추가합니다.

CSS

| 123456789 | @font-face {   font-family: NanumSquareWeb;  src: url(NanumSquareR.eot); /* IE 호환성 보기 */  src: url(NanumSquareR.eot#iefix) format('embedded-opentype'), /* IE 6 ~ 8 */       url(NanumSquareR.woff2) format('woff2'), /* WOFF2 지원 브라우저 */       url(NanumSquareR.woff) format('woff'), /* 모던 브라우저 */       url(NanumSquareR.ttf) format('truetype'),       url(NanumSquareR.svg#NanumSquareR) format('svg'); /* 구 모바일 브라우저 */} |
| --------- | ---------------------------------------- |
|           |                                          |

### 3-5. 정리

현재 뮤직 서비스에서 사용하고 있는 코드 입니다.(구버전 모바일 브라우저 대응을 위한 SVG는 삭제되었습니다)

CSS

| 12345678 | @font-face {  font-family: NanumSquare;  src: url(NanumSquareR.eot); /* IE 호환성 보기 */  src: url(NanumSquareR.eot#iefix) format('embedded-opentype'), /* IE 6 ~ 8 */       url(NanumSquareR.woff2) format('woff2'), /* WOFF2 지원 브라우저 */       url(NanumSquareR.woff) format('woff'), /* 모던 브라우저 */       url(NanumSquareR.ttf) format('truetype');} |
| -------- | ---------------------------------------- |
|          |                                          |

위의 코드를 가지고 브라우저별로 접속했을 때 어떤 폰트가 다운로드 되는지 알아보겠습니다.

1. **IE 6~8** 로 접근하면 NanumSquareR.eot? 가 다운로드 됩니다.

2. **IE 호환성 보기** 로 접근하면 NanumSquareR.eot 가 다운로드 됩니다.

3. IE 9이상

    

   으로 접근하면 NanumSquareR.eot? 가 다운로드 됩니다.

   - 만약 url(../webfont/NanumSquare/NanumSquareR.eot?#iefix) format('embedded-opentype')  부분을 local("![☺](https://s.w.org/images/core/emoji/2.3/svg/263a.svg)")  로 바꾸면 NanumSquareR.woff가 다운로드 됩니다.

4. **Safari **로 접근할 때는 NanumSquareR.woff가 다운로드 됩니다.

5. **Chrome, firefox, opera **로 접근할 때는 NanumSquareR.woff2가 다운로드 됩니다.

 

아래의 코드는 모든 브라우저를 대응하고 IE에서 eot 파일이 아닌 woff 파일을 로드받을 수 있게 하는 코드입니다.

CSS

| 12345678 | @font-face {   font-family: NanumSquare;  src: url(NanumSquareR.eot); /* IE 6 ~ 8, IE 호환성 보기 */  src: local(![☺](https://s.w.org/images/core/emoji/2.3/svg/263a.svg)),       url(NanumSquareR.woff2) format('woff2'), /* IE Edge, WOFF2 지원 브라우저 */       url(NanumSquareR.woff) format('woff'), /* IE 9+, 모던 브라우저 */       url(NanumSquareR.ttf) format('truetype');} |
| -------- | ---------------------------------------- |
|          |                                          |

## 4. 웹폰트를 파일 관리 방법

### 4-1. 서버에 직접 업로드 하는 경우

XHTML

| 1234567 | <!-- font.html --><head>  <link rel="stylesheet" href="style.css"></head><body>  <h1>안녕하세요</h1></body> |
| ------- | ---------------------------------------- |
|         |                                          |

CSS

| 123456789101112 | /* style.css */@font-face {   font-family: NanumSquareWeb;   src: url(NanumSquareR.eot); /* IE 호환성 보기 */   src: url(NanumSquareR.eot#iefix) format('embedded-opentype'), /* IE 6 ~ 8 */        url(NanumSquareR.woff2) format('woff2'), /* WOFF2 지원 브라우저 */       url(NanumSquareR.woff) format('woff'), /* 모던 브라우저 */       url(NanumSquareR.ttf) format('truetype');}h1 {  font-family: NanumSquareWeb, sans-serif;} |
| --------------- | ---------------------------------------- |
|                 |                                          |

서버에 직접 업로드하는 경우는 css에 @font-face를 직접 선언해 주어야 합니다. 폰트의 종류가 많을 수록 @font-face를 많이 선언해야 해서 복잡하지만 기준브라우저에 따라 코드를 추가, 삭제 할 수 있습니다. 그리고 다른 CDN을 이용하는 것 보다 속도가 빠르고 안전합니다.

### 4-2. 구글 CDN을 이용하는 경우

XHTML

| 12345678 | <!-- font.html --><head>  <link rel="stylesheet" href="//fonts.googleapis.com/earlyaccess/notosanskr.css">  <link rel="stylesheet" href="style.css"></head><body>  <h1>안녕하세요</h1></body> |
| -------- | ---------------------------------------- |
|          |                                          |

CSS

| 1234 | /* style.css */h1 {  font-family: 'Noto Sans KR', sans-serif;} |
| ---- | ---------------------------------------- |
|      |                                          |

구글 CDN을 이용하면 별도의 @font-face를 정의하지 않아도 되기 때문에 편리하지만 서버에 직접 업로드하는 것보다 속도가 느리고 구글 CDN 서버가 제대로 동작하지 않을 때는 웹폰트를 제공받지 못 할 수 있습니다. 구글 CDN의 경우 @font-face에 WOFF와 WOFF2만 지원하므로 IE 6~8, IE 호환성 보기 모드에서는 웹폰트를 사용할 수 없습니다.
그래서 서버가 있으면 직접 서버에 업로드하여 사용하는 것이 좋습니다.

## 4. 로컬 서버 vs 구글 웹폰트 로드 차이

예상했던 대로 로컬서버에서 파일을 로드하는게 더 빠릅니다.
로컬서버에서 불러올 때:

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-22)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-22)

구글에서 불러올 때:

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-23)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-23)

하지만 티스토리와 같이 폰트를 서버에서 올릴 수 없을 경우 구글 웹폰트를 로드해서 사용할 수 있습니다.

## 5. 구글 웹폰트를 빠르게 로드하는 팁

- HEAD 파일에서 CSS보다 더 빠르게 로드 해야 합니다.
- 참조링크를 사용합니다.
  - 가져다 사용하는 경우는 css내에서 @import방법, 참조링크를 사용하는 방법, 자바스크립트를 이용하는방법 3가지가 있는데 참조링크를 이용하면 HTML의 최상위에 코드를 넣을 수 있으며, CSS 파일보다 더 빠르게 로드될 수 있습니다. @import 코드는 CSS 파일안에 넣어야 하는데 이는 스타일 되지 않은 텍스트가 번쩍거리는 현상을 일으킬 수 있습니다.(flash of unstyled text:FOUT)
- 적은 폰트를 로드 해야 합니다.
- 표제를 위한 볼드타입과 기사를 위한 가독성이 좋은 폰트(최대 2개의 폰트)를 선정하는 것이 좋습니다.
  - 폰트는 많을 수록 로딩 시간이 더 길어집니다.
- 폰트 로드 코드를 결합해서 사용합니다
  - 코드 한 줄에 여러 구글 폰트를 로드할 수 있습니다. 로드하려는 각 폰트마다 한 줄 코드를 넣을 필요가 없습니다. Open Sans와 Oswald 폰트를 사용하고 싶으면 아래 처럼 한 줄에 적으면 좋습니다.

잘못된 예

XHTML

| 12   | <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald"> |
| ---- | ---------------------------------------- |
|      |                                          |

잘된 예

XHTML

| 1    | <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans\|Oswald"> |
| ---- | ---------------------------------------- |
|      |                                          |

폰트의 기본 옵션을 로드하는 것이 좋습니다.

- 한 가지 옵션만 선택했을 때:

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-24)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-24)

- 많은 옵션을 선택했을 때:

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-25)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-25)

- 구글에서 제공하는 Google Webfont Loader를 사용합니다.

## 6. 웹폰트를 사용하지 않는 이유

### 6.1 IE브라우저에서 깜빡거리는 현상(FOUC – Flash Of Unstyled Content)발생

웹폰트파일이 완전히 로드되기 전까지 기본서체(굴림)가 노출되었다가, 웹폰트가 로드 완료되면 웹폰트(나눔스퀘어체)로 바뀝니다. 화면이 움찔되는듯 보일 수 있으며, 글자가 클수록 도드라져 보입니다.

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-26)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-26)

FOUC 현상 발생 샘플페이지 <https://codepen.io/witblog/full/WRLzBx/>

#### 6.1.1 해결방법 – fontfaceobserver.js 사용

위의 현상은 웹폰트를 적용하지 않는 대표적인 이유 중 한 가지인데요. 이는 스크립트를 통해 어느정도 개선이 가능합니다. 잘 알려진 fontfaceobserver.js를 적용했을 때 결과입니다.(“MP3 30곡” 텍스트를 제외한 나머지만 적용되어 있습니다.) 지원브라우저: Chrome, FireFox, Opera, Safari, IE8+, Android WebKit

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-27)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-27)

스크립트 적용 url: <http://codepen.io/witblog/full/JEwZWG/>
이미지로 적용했을 때와 많은 차이가 없습니다.

해결방안은 웹폰트가 로드되기 전에는 텍스트를 미노출 시켰다가(기본서체가 미노출되도록) 웹폰트가 완전히 로드된 후 노출시키는 방식입니다.
적용 방식은 다음과 같습니다.

#### 웹폰트가 로드되기 전, 웹폰트가 로드된 후 적용할 스타일을 추가합니다.

CSS

```html
<style>
 @font-face { /* 웹폰트 사용 선언 및 경로 설정 */
	font-family: NanumSquare; /* 나눔스퀘어 선언 */
	src: url(NanumSquareR.eot); /*  IE9+ 호환성 보기 일때 불러올 서체 */
	src: url(NanumSquareR.eot?#iefix) format('embeded-opentype');  /*  IE6~8, IE9+ 일때 불러올 서체 */
	url(NanumSquareR.woff) format(woff); /*  대부분의 브라우저(Chrome, Safari.. 등)에서 불러올 서체 */
	url(NanumSquareR.ttf) format('truetype');
}
.nanumsquare{ /* 웹폰트가 로드되기 전에 적용되는 클래스 */
	/* 텍스트 숨김 */
	visibility: hidden;
}
.fonts_loaded .nanumsquare{ /* 웹폰트가 완전히 로드되었을 때 적용되는 클래스 */
	/* 나눔스퀘어체를 적용하고 텍스트 보임 */
	font-family: NanumSquare, sans-serif !important;
	visibility: visible;
}
</style>
```



#### 폰트가 로드되었는지 체크해주는 스크립트를 추가합니다.

XHTML

```html
<a href="http://fontfaceobserver/fontfaceobserver.js">
  http://fontfaceobserver/fontfaceobserver.js
</a>
 
	var font = new FontFaceObserver('NanumSquare', {}); // 사용할 서체 선언
	font.load().then(function() { // 폰트가 완전히 로드 되면
		document.documentElement.className += " fonts_loaded"; // css를 사용할 수 있도록 클래스 추가
		console.log("Font is available"); // 성공메세지 출력
	}, function() { // 폰트가 완전히 로드되지 않으면
		console.log("Font is not available"); // 실패메세지 출력
	});
```



#### 6.1.2 해결방법 – Google Webfont Loader 사용

- 구글 웹폰트를 로드 할 때는 구글에서 제공하는 Google Webfont Loader를 사용하여 FOUC 현상을 막을 수 있습니다.

XHTML

```html
<a href="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js">
  https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js
</a>
<link rel="stylesheet" href="style.css">
 
	WebFont.load({
		google: {
			families: ['Droid Sans', 'Droid Serif']
		}
	});
```



웹폰트 로더를 사용할 때 :

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-29)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-29)

웹폰트 로더를 사용하지 않을 때(FOUT 현상):

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-28)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-28)

#### 웹폰트 로더 적용 방법

- loading: 모든 폰트에 대해 요청중이다.
- active: 모든 폰트가 랜더링 되었다.
- inactive: 폰트가 브라우저에서 지원이 되지 않거나 로드가 되지 않았다.
- fontloading: 특정 한 폰트가 로딩중이다.
- fontactive: 특정 한 폰트가 랜더링 되었다.
- fontinactive: 특정 한 폰트가 로드되지 않았다.

fontloading, fontactive, fontinactive는 폰트가 여러개 일 때 순차적으로 붙고 loading, active, inactive는 전체 폰트에 대해서 한 번만 붙습니다.
예를 들어, droid sans와 droid sans-serif 폰트를 로드하게 되면 아래와 같이 클래스가 적용됩니다.

XHTML

```html
<html lang="ko" class="wf-droidsans-n4-active wf-droidserif-n4-active wf-active">
```



이를 통해서 구글 웹폰트 로더를 사용하면 구글 웹폰트로 로드되는 시간동안 변화를 체크하여 웹폰트를 사용한 곳만 숨김처리 하거나, 전체를 숨김처리 한 후 보여줄 수 있는 코드를 작성할 수 있습니다.

폰트가 적용된 곳만 숨겼다가 모두 로드 되면 보여주기

CSS

```css
.wrap {	background:#00f;	color: #fff;}
h2 {visibility: hidden;	font-family: 'Droid Sans', sans-serif;;} 
.wf-active h2 {visibility: visible;	font-family: 'Droid Sans', sans-serif;;}
```

![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-30)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-30)

전체 숨김 처리 후 폰트가 로드 될 시 나타내기

CSS

```css
.wrap {	visibility: hidden;	background:#00f; color: #fff; font-family: 'Droid Sans', sans-serif;;} 
.wf-active { visibility: visible; font-family: 'Droid Sans', sans-serif;;}
```



[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-31)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-31)

### 6.2 웹폰트의 용량이 커서 성능에 문제가 있다.

실제로 이미지폰트를 많이 사용하지 않는 경우에는 웹폰트를 사용하는 것보다 이미지 폰트를 사용하는 것이 좋습니다.

- 이미지폰트 적용 페이지: 이미지 용량 136KB
- 웹폰트 적용 페이지: 웹폰트 용량 273KB

웹폰트를 적용했을 때 137KB정도 용량이 더 크지만, 웹폰트, 이미지폰트 모두 사이트에 한 번 접속하면 캐시에 저장되고 이후에 접속할 때 마다 캐시에서 불러와 사용합니다. 그러므로 이미지폰트를 여러 페이지에 사용할 경우 이미지폰트보다 웹폰트를 사용하는 것이 효율적입니다.

예를 들어 아래 동선과 같이 여러 페이지를 이동한다고 가정했을 때를 비교해보겠습니다.
뮤직홈 → 이용권 구매 → 알뜰 이용권 자세히 보기

**웹폰트 적용환경** 사용자A는 뮤직홈에 처음 접속했을 때 웹폰트가 다운받아지고 캐시에 저장됩니다. 이 후 이용권 구매, 알뜰 이용권 자세히 보기 페이지에서는 캐시에 저장된 웹폰트를 불러 사용합니다.

**이미지 적용환경** 사용자B는 뮤직홈, 이용권 구매, 알뜰 이용권 자세히 보기 에서 이미지파일 136KB를 받기 때문에 총 408KB를 다운받게 됩니다.

이미지폰트도 캐시를 이용하지만 각 페이지에서 사용한 이미지가 모두 다른 파일이기 때문입니다.(모두 같은 이미지파일에 저장하게되면 이미지용량이 너무 커지게 됩니다.)

### 웹폰트를 좀 더 빠르게 로드하는 방법

#### 6.2.1 data-uri로 웹폰트 사용하기

이미지처럼 웹 폰트도 data-uri로 사용할 수 있는데 Font Squirrel에서 제공하는 Webfont Generator를 사용하면 쉽게 data-uri로 만들어 낼 수 있습니다.

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-32-551x1024.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-32)

사용할 폰트 파일(TTF, OTF)를 업로드하고 Expert 옵션을 선택하여 세부사항을 선택합니다. 위의 사진에서는 WOFF만 지정했지만 TTF폰트만 있다면 다른 타입의 폰트 파일도 만들 수 있습니다. 하단의 CSS부분에서는 Base64 Encode를 지정합니다. 맨 아래 합법적인 폰트라고 체크만 해주면 다운로드받을 수 있습니다.

대표적인 성능 측정사이트 3군데에서 비교해보았습니다.

#### 핑덤(<http://tools.pingdom.com/>)

- data-uri 사용

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-33)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-33)

- data-uri 미사용

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-34)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-34)

data-uri를 사용했을 때 파일크기가 약 37KB가 증가했지만 속도는 0.04초 빨랐습니다. 또한 여기서는 REQUEST가 data-uri까지 포함하여 8개로 나오지만 웹페이지에서 REQUREST 파일 수는 7로 REQUEST가 하나 줄었습니다.

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-35)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-35)

#### GT 매트릭스(<https://gtmetrix.com/>)

- data-uri 사용

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-36-1024x153.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-36)

- data-uri 미사용

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-37-1024x391.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-37)

data-uri를 사용했을 때 파일크기가 약 37KB가 증가했지만 속도는 0.1초 빨랐습니다. REQUREST 역시 7개로 한 개 줄었습니다.

#### 웹페이지테스트(<http://www.webpagetest.org/>)

- data-uri 사용

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-38)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-38)

- data-uri 미사용

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-39-1024x823.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-39)

data-uri를 사용했을 때 파일크기가 약 37KB가 증가했지만 속도는 0.1초 빨랐습니다. REQUEST 역시 7개로 한 개 줄었습니다.

#### data-uri를 사용했을 때의 특징

- data-uri로 접근한 이유 중 하나는 HTTP 리퀘스트 수를 줄이기 위함입니다. 웹페이지에서는 리소스를 가져오는 요청이 많이 발생하므로 CSS Sprites처럼 HTTP 요청개수를 줄여서 속도를 높이려는 것입니다. 물론 CSS Sprite처럼 다수의 요청을 하나로 만들 수 있는 것은 아니고 CSS를 받은 다음에 font를 가져오는 요청 대신 CSS를 받을 때 한꺼번에 받도록 한 것입니다.
- 웹폰트의 용량이 큰 경우에는 가져오는데 FOUC 현상이 발생할 수 있습니다. data-uri는 한꺼번에 같이 받으므로 이러한 현상을 줄일 수 있습니다.
- font 파일은 브라우저가 캐싱하지만, data-uri는 별도로 캐싱하지 않습니다. 그래서 data-uri를 사용할 파일(CSS)에 캐싱 정책을 주어야 합니다.
- data-uri를 가진 파일을 캐싱하더라도 사용하려면 브라우저가 data-uri를 처리해야 하는데 이는 페이지를 열 때마다 매번 처리합니다. 그러므로 data-uri를 너무 많이 쓰는 것은 좋지 않고 사용하더라도 바이너리를 받아서 사용하는 것과 비교해서 사용해야 합니다.
- 웹폰트를 사용하면 파이어폭스가 크로스 도메인을 허용하지 않아서 폰트가 제대로 다운로드 되지 않는 문제가 발생할 수 있습니다. CDN이나 폰트 파일을 내려주는 곳에서 CORS를 설정해야 폰트 파일이 제대로 로드되는데 data-uri를 사용하면 이런 설정 없이도 파이어폭스에서 웹 폰트를 사용할 수 있습니다.

참고: <https://blog.outsider.ne.kr/1138>

#### 6.2.2 preload, prefetch 사용

preload, prefetch 를 통하여 IE11+, Chrome, Firefox, Opera, Android Webkit 에서는 웹폰트로드를 좀 더 빠르게 할 수 있습니다.
**지원 브라우저**
prefetch:

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-40-1024x234.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-40)

preload:

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-41-1024x223.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-41)

preload를 적용하지 않았을 때는 CSS파일 다운이 완료된 후 웹폰트를 다운받기 시작합니다.

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-44-1024x274.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-44)[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-42-1024x182.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-42)

preload를 적용했을 때는 css파일과 동시에 다운로드 받기 시작합니다.

[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-45-1024x274.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-45)[![img](http://wit.nts-corp.com/wp-content/uploads/2017/02/-43-1024x186.)](http://wit.nts-corp.com/wp-content/uploads/2017/02/-43)

---

참고: <https://www.bramstein.com/writing/preload-hints-for-web-fonts.html>

출처: Posted by [김 원준](http://wit.nts-corp.com/author/junewon) in [Research](http://wit.nts-corp.com/category/research)