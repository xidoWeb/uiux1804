# jQuery

## Event

### 기본형태

```js
선택자.on('이벤트', function(){  });  // 해당 선택자에게 이벤트를 발행하면, 뒤의 함수를 실행
```

1. 클릭: `click` (단,마우스 왼쪽버튼 클릭만 허용)
2. 더블클릭: `dblclick`
3. 마우스올렸을경우: `mouseenter`, `mouseover`
4. 마우스벗어났을경우: `mouseleave`, `mouseout`
5. 마우스를 누르고 있는경우: `mousedown`
6. 마우스 키가 올라가는경우: `mouseup`
7. 마우스 휠: `mousewheel` (firefox에서는 `DOMMouseScroll`)
8. 마우스이동: `mousemove`
9. 키보드 키 누를경우: `keydown`
10. 키보드 키올라올경우:`keyup`
11. 터치 오른쪽에서 왼쪽으로: `swipeleft`
12. 터치 왼쪽에서 오른쪽으로: `swiperight`
13. 브라우저 스크롤: `scroll`
14. 브라우저의 사이즈변경: `resize`
15. 이벤트성을가진(a,button, input요소) 포커스를 가진경우: `focus`
16. 포커스가 빠져나가는경우: `blur`

- 각 이벤트가 발생할때에는 html문서의 상황에따라 중복되는 경우도 있다. 

```js
선택자.on('이벤트', function(e){
    e.preventDefault();
});
```

---

















