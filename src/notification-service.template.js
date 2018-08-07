const template = document.createElement('template')

template.innerHTML = `
    <style>
        .web-nc {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            color: #fff;
            font-size: 16px;
            max-width: 290px;
            margin: 0 auto;
            z-index: 999;
        }
        .web-nc-content {
            margin-top: 10px;
            padding: 15px 15px 17px;
            line-height: 1.3;
        }
        .web-nc-content.success {
            background: #43A047;
        }
        .web-nc-content.warning {
            background: #FFB300;
        }
        .web-nc-content.error {
            background: #FF5722;
        }
        .web-nc-content.fadein {
            -webkit-animation: fadein 2s;
            -moz-animation: fadein 2s;
            -ms-animation: fadein 2s;
            -o-animation: fadein 2s;
            animation: fadein 2s;
        }
        .web-nc-content.fadeout {
            -webkit-animation: fadeout 2s;
            -moz-animation: fadeout 2s;
            -ms-animation: fadeout 2s;
            -o-animation: fadeout 2s;
            animation: fadeout 2s;
        }
        @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        @-moz-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        @-webkit-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        @-ms-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        @-o-keyframes fadein {
            from { opacity: 1; }
            to   { opacity: 0; }
        }
        @keyframes fadeout {
            from { opacity: 1; }
            to   { opacity: 0; }
        }
        @-moz-keyframes fadeout {
            from { opacity: 1; }
            to   { opacity: 0; }
        }
        @-webkit-keyframes fadeout {
            from { opacity: 1; }
            to   { opacity: 0; }
        }
        @-ms-keyframes fadeout {
            from { opacity: 1; }
            to   { opacity: 0; }
        }
        @-o-keyframes fadeout {
            from { opacity: 1; }
            to   { opacity: 0; }
        }
    </style>

    <div class="web-nc"></div>
`

export default template
