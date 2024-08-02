import { useEffect, useState } from 'react' 
import FontAdjust from './FontAdjust';
import { useFont } from '../FontContext';

export default function Findings() {
    const { fontSize, fontStyle } = useFont();

    useEffect(() => {
        document.documentElement.style.fontSize = fontSize;
        document.body.style.fontFamily = fontStyle;
    }, [fontSize, fontStyle]);
  
    return (
    <main> 
        <FontAdjust/>
        <div className="page-header">
          <h2 className="topic">Findings from Strength Science</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="article-content">
          <div className="findings-info">
            <img src="imgs/findings3_300x250.jpg" alt="A cartoon muscle filled with meats and other proteins" id="finding1-img"/>
            <div className="text-content">
              <h5><a href="findings/finding1.html">Finding 1</a></h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet eget. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Eget egestas purus viverra accumsan in.</p>
            </div>
          </div>
          
          <div className="findings-info reverse">
            <img src="imgs/finding_1_350x200.jpg" alt="Hands holding a salad on a plate" id="finding2-img"/>
            <div className="text-content">
              <h5><a href="#">Finding 2</a></h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet eget. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Eget egestas purus viverra accumsan in.</p>
            </div>
          </div>
  
          <div className="findings-info">
            <img src="imgs/findings2_300x250.jpg" alt="Woman holding a protein shake" id="finding2-img"/>
            <div className="text-content">
              <h5><a href="#">Finding 3</a></h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet eget. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Eget egestas purus viverra accumsan in.</p>
            </div>
          </div>
  
          <div className="findings-info reverse">
            <img src="imgs/finding_4_300x250.jpeg" alt="Protein powder spilling onto a table" id="finding2-img"/>
            <div className="text-content">
              <h5><a href="#">Finding 4</a></h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet eget. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Eget egestas purus viverra accumsan in.</p>
            </div>
          </div>
  
        </div>
  
      </main>
  )
}
