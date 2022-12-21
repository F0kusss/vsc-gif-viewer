## Использованные возможности VS Code

1. <b>Webview:</b> <br>
Webview - удобный способ создать собственный вид для редактирования файлов. VCS построена на Electron - весь вид VCS по сути веб страницы.
2. <b>Inputbox:</b> <br>
Принимает ввод от пользователя. Бывает двух типов: string и undefined. Undefined, если пользователь нажмет на крестик, а не введкт значение.

## Механизм подключения плагинов

Подключение плагинов происходит по принципу <b>lazy load</b>. Плагин загружается только тогда, когда наступает activationEvents. Они прописываются в 'package.json'.
После в качестве входной точки используется 'extension.ts'. В нем мы сообщаем VSC что у нас используется (в данном проекте - комманда gif-viewer.view).
Также в package.json описывается контекст акцивации (по комманде, при открытии файлы и т.д.) в 'contributes'.

## Механизм активации плагина

1. После наступления activationEvent VS Code закгружает расширение и получает список комманд.
2. При наступлении контекста отработки какой-либо комманды VSC испольняет ее.
3. VSC открывает InputBox для пользователя, где происходит ввод входных данных.
4. Создание WebView панели и HTML кода, который мы в нее передаем, после чего видим нашу GIF на экране.