var _templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex: none;\n    align-self: center;\n    align-items: center;\n    justify-content: center;\n    word-break: keep-all;\n    cursor: pointer;\n    position: relative;\n    outline: none;\n    margin: 1.1em;\n    padding: 0px 10px;\n    text-decoration: none;\n    line-height:30px;\n    text-align: center;\n    \n    background : ", ";\n\n    font-size: ", ";\n\n    border: 1px solid ", ";\n    border-radius: 2px;\n    color:", ";\n    &:hover{\n        background-color: ", ";\n      }\n"], ["\n    display: flex;\n    flex: none;\n    align-self: center;\n    align-items: center;\n    justify-content: center;\n    word-break: keep-all;\n    cursor: pointer;\n    position: relative;\n    outline: none;\n    margin: 1.1em;\n    padding: 0px 10px;\n    text-decoration: none;\n    line-height:30px;\n    text-align: center;\n    \n    background : ", ";\n\n    font-size: ", ";\n\n    border: 1px solid ", ";\n    border-radius: 2px;\n    color:", ";\n    &:hover{\n        background-color: ", ";\n      }\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';

var hexa = function hexa(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha >= 0) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
};

export var BasicButton = styled.button(_templateObject, function (props) {
    return props.primary ? props.theme.button.primaryBg : props.theme.button.background ? props.theme.button.background : props.theme.button.defaultBg;
}, function (_ref) {
    var theme = _ref.theme;
    return theme.button.smallFontSize;
}, function (props) {
    return props.primary ? props.theme.button.borderPrimary : props.theme.button.borderDefault;
}, function (props) {
    return props.primary ? props.theme.button.primaryTextColor : props.theme.textColor;
}, function (props) {
    return props.backgroundColor ? hexa(props.backgroundColor, 0.9) : props.primary ? hexa(props.theme.button.hoverPrimary, 0.9) : "";
});