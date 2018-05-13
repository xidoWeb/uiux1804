# 알아두면 유용한 팁

[TOC]

---

## 지정위치의 파일 목록을 가져오는 코드(javascript)

 아래코드는 ActiveXObject() 함수를 찾을수 없기에 실행되지 않음

```javascript
<script>

function test(){
  var fso;
  fso = new ActiveXObject("scripting.FileSystemObject"); 
  var srt = fso.GetFolder("d:\\");
  var fc = new Enumerator(srt.files);
  for (; !fc.atEnd(); fc.moveNext())
    document.write(fc.item().name + "<br>\n");
}

</script>
```

``` javascript
var spliteFile = document.all['fileURL'].value;
var arr = spliteFile.split("\\");
var name = arr[arr.length-1];
```



``` javascript
<html> 

<head> 
<meta http-equiv="content-type" content="text/html; charset=euc-kr"> 
<title>제목 없음</title> 
<script language="javascript"> 
<!-- 
var xmlHttp; 

function createXMLHttpRequest() { 
if (window.ActiveXObject) 
xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
else if (window.XMLHttpRequest) 
xmlHttp = new XMLHttpRequest(); 
} 
    
function startRequest() { 
    createXMLHttpRequest(); 
    xmlHttp.OnReadyStateChange = handleStateChange; 
    xmlHttp.open("GET", "file:///C:\\list.txt", true); 

    xmlHttp.send(null); 
} 
    
function handleStateChange() { 
if(xmlHttp.ReadyState==4 && xmlHttp.status==0){ 
alert(xmlHttp.ResponseText); 
} 
} 
// - JavaScript - --> 
</script> 
</head> 

<body bgcolor="white" text="black" link="blue" vlink="purple" alink="red"> 
<p><a href="#" OnClick="startRequest();">파일가져오기</a></p> 
</body> 

</html>
```



---

File System(File Api)의 File Entry를 이용해 FS에 있는 file, directory 출력하기

``` javascript
<!DOCTYPE html>
<meta charset="utf-8">
<html lang="en">
<head>
    <script type='text/javascript'>
        function log(str){
            var logConsole = document.getElementById("debugLog");
            logConsole.innerText += str + "\n";
            //log가 찍힌 뒤 스크롤 맨 밑으로 이동
            logConsole.scrollTop = logConsole.scrollHeight;
        }
 
        console.log = log;
        function createFileSystem(){
            window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
 
            var fileSystem = window.requestFileSystem(window.PERSISTENT, 1024*1024, createdFS, showerr);
        };
             
        function createdFS(e){ fs = e.root; }
        function showerr(e){ log( "Error : " + e.message ); }
        navigator.webkitPersistentStorage.requestQuota(1024*1024, createFileSystem, showerr);
 
        function createFile() {
            if(!fs) {
                log("Error : can't open FS");
                return;
            }
 
            var name = document.getElementById("fileName").value;
            fs.getFile(name, {create: true, exclusive: false}, successCreate, showerr);
        }
         
        function createDir() {
            if(!fs) {
                log("Error : can't open FS");
                return;
            }
            var name = document.getElementById("fileName").value;
            fs.getDirectory(name, {create: true, exclusive: false}, successCreate, showerr);
        }
 
        function successCreate(e) {
            log("file name : " + e.name);
            log("file path : " + e.fullPath)
        }
 
        function clearLog() {
            var logConsole = document.getElementById("debugLog");
            logConsole.innerText = "";
        }
 
        function loadList() {
            var dir = fs.createReader();
            while(dir.readEntries(fileListInDir, showerr)); 
        }
 
        function fileListInDir(file) {
            var fileListBox = document.getElementById("fileList");
            fileListBox.innerHTML = "";
            for(var i in file) {
                if(file[i].isFile)
                    fileListBox.innerHTML += "<a href='#' onclick='openFile(this)'>" + file[i].name + "</a><br />";
            }
        }
 
        function openFile(e) {
            var FileName = e.innerText;
            log(FileName);
            fs.getFile(FileName, {create:false}, successFileOpen, showerr);             
        }
 
        function successFileOpen(e) {
            var readContents = function (e) {
                var reader = new FileReader();
                reader.onload = function(e){
                  document.getElementById("fileContent")
                          .innerText = "Contents : " + e.target.result;
                };
                reader.readAsText(e);
            }
            e.file(readContents, showerr);
        }
    </script>
</head>
<body>
 
<span>
    <input type="text" id="fileName" />
    <input type="button" value="dir생성" onclick="createDir()" />
    <input type="button" value="file생성" onclick="createFile()" />
    <input type="button" value="file 목록" onclick="loadList()" />
</span>
<div id="fileList"></div>
<div id="fileContent"></div>
<div id="debugArea" style="margin-top:100px;">
    <span> Log <input type="button" value="clear" id="clearLog" onclick="clearLog()" /></span>
    <div id="debugLog" style="border:1px;overflow-y:scroll;height:200px"></div>
</div>
</body>
</html>


출처: http://stackov.tistory.com/19 [개인공간]
```

