import React from 'react'

export default function HomeSummary(props) {
    const {title, summary, subtitle, imgpath, imgalt, link} = props

    return (
        <section className="findings">
            <nav>
                <a href={title} className="subtitle" aria-label={'View ' + title}>{title}</a>
            </nav>
            <div className="findings-info">
                <img src={imgpath} alt={imgalt} class="size350x350"/>
                <div class="text-content">
                    <h5><a href={`#${link}`} style={{ textDecoration: 'none', color: 'inherit' }}>{subtitle}</a></h5>
                    <p>{summary}</p>
                </div>
            </div>
        </section>
    )
}
