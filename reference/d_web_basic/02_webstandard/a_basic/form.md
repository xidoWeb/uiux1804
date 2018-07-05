## FORM

FORM: 양방향 통신을 처리할 수 있는 요소중의 하나

```html
<form action="" method="">
    
</form>
```

- **action** :  form영역과 연결하는 서버언어(db정보를 담고있는 언어)
- **method** : 보안처리 기술을 담기 위한 속성
  - post :  보안처리가 되어진 방식(무겁다, 자료를 공개하지 않는다.)
  - get : 공개처리가되어진 방식(가볍다, 공개되어있다.)

```html
<form action="" method="post">
    <fieldset>
       <legend>
           form영역의 제목
        </legend> 
    </fieldset>
</form>
```

- **fieldset** : 공통범위의 영역(div와 유사하지만, 의미를 정확하게 지니고 있다.)
- **legend** : fieldset의 제목

---

- **input** : 무언가를 입력하거나, 선택하게하는 기능을 가진 요소

  - 검색, 아이디, 비밀번호, 동의체크, 시험답안 체크, 확인버튼, 취소버튼, 파일첨부

  - **type** : text, password, checkbox, radio, submit, reset, button, image, search, color ....

  - **value** :  전송할 값을 담는 곳, 무언가를 선택, 체크하는 형식이아닌 **작성하는요소**일경우에는 빈공간없이 비워놓는다.

    ```html
    <input type="text" value="" />
    ```

  - **id** : 이름값을 가지는 속성으로,  함께사용해야하는 요소인 `label`과의 연결로 사용

  - **name** : 이름을 가지는 속성으로, 외부의 연결되는 무서와의 이름 설정

  - **placeholer** : 임시설정되는 기능으로, `input`요소에 작성할 내용을 임시로 보여주는 기능

  - **required** : 유효성설정 반드시 입력해야하는 곳에 작성

- **label** : `input`요소의 `id`이름과 연결하여 사용하는 요소로서 <br /> 접근성에서 마우스 또는 청각설정에 지대한영향을 줌

---

* form영역 내부의 요소들은 대부분 inline 
* 반드시 접근성과의 연관성있게 작성!!
* form영역내부에 `div,p,span,ul,li, h1~6`등의 요소를 함께 사용할 수 있다.

---













