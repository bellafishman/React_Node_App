import { useEffect, useState } from 'react' 
import FontAdjust from './FontAdjust';
import { useFont } from '../FontContext';

export default function Finding_1() {
    const { fontSize, fontStyle } = useFont();

    useEffect(() => {
        document.documentElement.style.fontSize = fontSize;
        document.body.style.fontFamily = fontStyle;
    }, [fontSize, fontStyle]);
  
    return (
    <div>Finding_1</div>
  )
}
