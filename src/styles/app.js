import styled from 'styled-components/native';

export const color = {
    IconColor: '#9CA3AF',
    stackColor:{
        JavaScript: '#FCD34D',
        Vue: '#059669',
        angular: '#DC2626',
        C:'#1E40AF',
        CSS: '#60A5FA',
        rust: '#FCA5A5',
        TypeScript:'#1E3A8A',
        HTML:'',
        GO:'#60A5FA'
    }
}

export const StackLanguage = (language) => {
    let languageColor;

    language === 'JavaScript' ?
        languageColor = color.stackColor.JavaScript :
        language === 'Vue' ?
            languageColor = color.stackColor.Vue
            : language === 'CSS' ?
                languageColor = color.stackColor.CSS
                : language === 'C#' ?
                    languageColor = color.stackColor.C
                    : language === 'TypeScript' ?
                    languageColor = color.stackColor.TypeScript
                    : language === 'Rust' ?
                    languageColor = color.stackColor.rust
                    : language === 'Go' ?
                    languageColor = color.stackColor.GO
                    : null

                    return languageColor
} 