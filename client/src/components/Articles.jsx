import { useEffect, useState } from 'react' 
import FontAdjust from './FontAdjust';
import { useFont } from '../FontContext';
import ApiSearch from './ApiSearch';
import ApiResults from './ApiResults';
import SuggestedSearch from './SuggestedSearch';

export default function Articles() {
    const { fontSize, fontStyle } = useFont();

    // ApiSearch
    const [searchValue, setSearchValue] = useState('');
    // ApiResults
    const [articles, setArticles] = useState([]);
    // default or searched articles displyed
    const [hasSearched, setHasSearched] = useState(false);

    const defaultArticles = [
        {
            title: 'Exercise, Protein Metabolism, and Muscle Growth',
            author: 'Tipton, K.',
            link: 'https://doi.org/10.1123/ijsnem.11.1.109',
            publicationDate: '2001',
            coverImage: '/imgs/articles1_350x350.png',
            coverAlt: 'An assortment of healthy, whole foods',
            abstract: 'Exercise has a profound effect on muscle growth, which can occur only if muscle protein synthesis exceeds muscle protein breakdown; there must be a positive muscle protein balance. Resistance exercise improves muscle protein balance, but, in the absence of food intake, the balance remains negative (i.e., catabolic). The response of muscle protein metabolism to a resistance exercise bout lasts for 24-48 hours; thus, the interaction between protein metabolism and any meals consumed in this period will determine the impact of the diet on muscle hypertrophy.',
        },
        {
            title: 'Creatine in Humans with Special Reference to Creatine Supplementation',
            author: 'Balsom, P.',
            link: 'https://doi.org/10.2165/00007256-199418040-00005',
            publicationDate: 'October 2012',
            coverImage: '/imgs/articles2_200x200.jpg',
            coverAlt: 'Creatine Molecule',
            abstract: 'Since the discovery of creatine in 1832, it has fascinated scientists with its central role in skeletal muscle metabolism. In humans, over 95% of the total creatine (Crtot) content is located in skeletal muscle, of which approximately a third is in its free (Crf) form. The remainder is present in a phosphorylated (Crphos) form. Crf and Crphos levels in skeletal muscle are subject to individual variations and are influenced by factors such as muscle fibre type, age and disease, but not apparently by training or gender.',
        },
        {
            title: 'The effect of resistance training combined with timed ingestion of protein on muscle fiber size and muscle strength',
            author: 'Andersen, L.',
            link: 'https://doi.org/10.1016/j.metabol.2004.07.012',
            publicationDate: 'February 2005',
            coverImage: '/imgs/articles3_200x200.jpg',
            coverAlt: 'Two types of protein powders',
            abstract: 'Acute muscle protein metabolism is modulated not only by resistance exercise but also by amino acids. However, less is known about the long-term hypertrophic effect of protein supplementation in combination with resistance training. The present study was designed to compare the effect of 14 weeks of resistance training combined with timed ingestion of isoenergetic protein vs carbohydrate supplementation on muscle fiber hypertrophy and mechanical muscle performance.',
        },
    ];

    const handleApiSearch = async (newSearch) => {
        try {
            const apiUrl = process.env.NODE_ENV === 'production' 
                ? 'https://strength-science-api.vercel.app/' 
                : 'http://localhost:8080';

            console.log(apiUrl);

            const response = await fetch(`${apiUrl}/api/search?query=${newSearch}`);
            const data = await response.json();

            const articles = data["search-results"]["entry"] || [];
            // Transform the data into a format usable by ApiResults
            const transformedArticles = articles.map((article) => ({

                title: article["dc:title"],
                author: article["dc:creator"],
                link: "http://doi.org/" + article["prism:doi"],
                publicationDate: article["prism:coverDisplayDate"],
                coverImage: '', // No image for searched articles
                abstract: '', // No abstract for searched articles
                //coverImage: 'default-image.jpg', // Placeholder image if not available
                //abstract: article["abstract"] || 'Abstract unavailable',
            }));

            setArticles(transformedArticles);
            setHasSearched(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }   
    };

    useEffect(() => {
        document.documentElement.style.fontSize = fontSize;
        document.body.style.fontFamily = fontStyle;
    }, [fontSize, fontStyle]);
    
    return (
        <main> 
            <FontAdjust/>
            <div className="page-header">
                <h2 className="topic">Articles on Strength Science</h2>
                <p className="topic-description">Access peer reviewed strength science articles! Learn what motivates your diet, training, and mindset in becoming stronger.
                    Instead of blindly going into the first diet or workout plan you see, make an informed decision given real science.
                    Every person, every metabolism, and every body is different, so through research, you can find the data-driven, perfect plan for you!
                </p>
                </div>

                <ApiSearch 
                    searchValue={searchValue} 
                    setSearchValue={setSearchValue} 
                    handleApiSearch={handleApiSearch}
                />

                <div className="suggested-search">
                    <SuggestedSearch 
                    // pass down functions to be used in subcomponent
                        setSearchValue={setSearchValue} 
                        handleApiSearch={handleApiSearch}/>
                </div>

                <div className="article-content">
                    <ApiResults articles={hasSearched ? articles : defaultArticles} isSearch={hasSearched} />
                </div>
        </main>
  );
}
