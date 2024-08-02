import { useFont } from '../FontContext';
export default function FontAdjust() {
    const { changeFontSize, changeFontStyle } = useFont();
    return (
    <div className="dropdown">
        <button id="fontcontrol" aria-haspopup="true" aria-expanded="false">
          <span className="small">A</span>
          <span className="large">A</span>
        </button>
        <div id="dropdown-content" role="menu">
            <div className="font-size-options">
              <a href="#" onClick={() => changeFontSize('decrease')}>
                <span className="small">A</span></a>
              <a href="#" onClick={() => changeFontSize('default')}>
                <span className="medium">A</span></a>
              <a href="#" onClick={() => changeFontSize('increase')}>
                <span className="large">A</span></a>
            </div>
            <div className="font-style-options">
                <a href="#" onClick={() => changeFontStyle('serif')} className="serif">Serif</a>
                <a href="#" onClick={() => changeFontStyle('sans-serif')} className="sans-serif">Sans</a>
            </div>
        </div>
    </div>
  )
}
