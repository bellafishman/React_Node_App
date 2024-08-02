import { useEffect, useState } from 'react' 
import FontAdjust from './FontAdjust';
import { useFont } from '../FontContext';
import HomeSummary from './HomeSummary';

export default function Home(props) {
    const { fontSize, fontStyle } = useFont();

    useEffect(() => {
        document.documentElement.style.fontSize = fontSize;
        document.body.style.fontFamily = fontStyle;
    }, [fontSize, fontStyle]);

    return (
    <div>
        <div className="keyphrase">
            <FontAdjust />
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <section className="about">
            <h2 className="subtitle">Intro</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <nav>
                <a href="about" aria-label="Learn more">Learn More</a>
            </nav>
        </section>

        <HomeSummary title={'articles'}
                     subtitle={'Exercise, Protein Metabolism, and Muscle Growth'}
                     summary={'Exercise has a profound effect on muscle growth, which can occur only if muscle protein synthesis exceeds muscle protein breakdown; there must be a positive muscle protein balance. Resistance exercise improves muscle protein balance, but, in the absence of food intake, the balance remains negative (i.e., catabolic). The response of muscle protein metabolism to a resistance exercise bout lasts for 24-48 hours; thus, the interaction between protein metabolism and any meals consumed in this period will determine the impact of the diet on muscle hypertrophy.'} 
                     imgpath={'imgs/articles1_350x350.png'}
                     imgalt={'An assortment of healthy, whole foods'}
                     link={'https://doi.org/10.1123/ijsnem.11.1.109'}>
        </HomeSummary>

        <HomeSummary title={'findings'}
                     subtitle={''}
                     summary={'Access blog posts updating and reflecting on recent research on strength science!'} 
                     imgpath={'imgs/findings3_350x350.jpg'}
                     imgalt={'Cartoon muscle filled with raw meat'}
                     link={''}>
        </HomeSummary>
    </div>
    )
}
