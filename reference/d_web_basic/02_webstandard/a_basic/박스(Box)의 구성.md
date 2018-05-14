## 박스(Box)의 구성

요소(element)들은 CSS에서 흔히 "박스(box)"라고 부르는 사각형 영역을 생성하게 됩니다. 
이러한 박스들은 다음영역들로 이루어져 있습니다.

![img](https://s3.ap-northeast-2.amazonaws.com/opentutorials-user-file/module/484/1349.gif)

### 박스의 구성 요소

- content : 요소가 담고 있는 내용
- padding : content와 border사이의 간격
- border : 테두리 선
- margin : border와 다른 요소 사이의 간격

---

## 약식속성과 개별속성

### 개별 속성

요소가 생성한 박스는 top, right, bottom, left 네 변으로 이루어져 있습니다. 따라서,

margin 속성은 margin-top, margin-right, margin-bottom, margin-left와 같은 개별 속성들이

border 속성은 border-top, border-right, border-bottom, border-left와 같은 개별 속성들이

padding 속성은 padding-top, padding-right, padding-bottom, padding-left와 같은 개별 속성들이 존재하게 됩니다.

---

### 약식속성

반대로 margin-top, margin-right, margin-bottom, margin-left을 한꺼번에 margin속성으로 지정할 수 있는데 이를 약식 속성(shorthand property)이라고 합니다. 마찬가지로 보더와 패딩도 네변의 속성을 하나의 속성으로 지정할 수 있습니다. 즉 다음의 두 CSS는 같습니다

아래와 같습니다.

약식속성의 값이 하나만 있으면 모든 면, 즉 top, right, bottom, left에 동일한 하나의 값이 적용되고,
값이 두개 있으면 첫번째 값은 top과 bottom에 적용되고, 두번째 값은 right, left에 적용됩니다.
값이 세개 있으면 첫번째 값는 top에, 두번째 값은 right와 left에 적용되고, 세번째 값은 bottom에 적용됩니다.
값에 네게 있으면 첫번째 값은 top에 두번째 값은 right에 세번째 값은 bottom에 네번째 값은 left에 각각 적용됩니다.

즉 다음과 같이 적용됩니다.

---

### 약식속성의 값이 하나일때

```css
p { margin: 10px;}
```

아래와 같습니다.

```css
p {
    margin-top: 10px; 
    margin-right: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
}
```

---

### 약식속성의 값이 두개 일때

```css
p { margin: 10px 20px;}
```

아래와 같습니다.

```css
p {
    margin-top: 10px; 
    margin-right: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
}
```

---

### 약식속성의 값이 세개 일때

```css
p { margin: 10px 20px 30px;}
```

아래와 같습니다.

```css
p {
    margin-top: 10px; 
    margin-right: 20px;
    margin-bottom: 30px;
    margin-left: 20px;
}
```

---

### 배경 적용

요소에 배경을 적용하게 되면, 패딩과 보더에는 배경속성이 적용이 되지만, 마진에는 적용되지 않습니다. 마진은 항상 투명한 영역으로 지정되어 있어, 부모요소에서 지정한 배경을 보여줍니다.



---

## 마진통합

### 수직 마진 (top, bottom)

1. 인접한 요소들의 수직 마진(top, bottom)은 통합됩니다.
2. 인접한 두 요소의 마진값이 다르다면 마진값이 큰쪽으로 통합됩니다.
3. 마진은 음수값을 가질 수 있는데 양수마진과 음수마진을 합산한 만큼의 수직마진을 가질 수 있습니다.

<마진이 통합됩니다>
![마진이 통합됩니다](https://s3.ap-northeast-2.amazonaws.com/opentutorials-user-file/module/484/1351.gif)

<마진이 큰쪽으로 통합됩니다>
![img](https://s3.ap-northeast-2.amazonaws.com/opentutorials-user-file/module/484/1352.gif)

 

 

### 수평 마진 (right, left)

1. 수평 마진(right, left)은 통합되지 않습니다.

![img](https://s3.ap-northeast-2.amazonaws.com/opentutorials-user-file/module/484/1353.gif)

2. 요소들이 플로팅되거나, 상대적 위치 혹은 절대적 위치의 요소들도 수평은 물론 수직마진들도 통합되지 않습니다.

![img](https://s3.ap-northeast-2.amazonaws.com/opentutorials-user-file/module/484/1354.gif)