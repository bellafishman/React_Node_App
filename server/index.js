const express = require('express');
const path = require('path');
const cors = require('cors');

require('dotenv').config({ path: path.resolve(__dirname, '.env') });


const axios = require('axios');

// app is an express application
const app = express();
const corsOptions = {
    origin: 'https://react-node-app-five.vercel.app', // Your client’s URL
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
  };
app.use(cors(corsOptions));

const PORT = 8080;


const API_Key = process.env.SCOPUS_API_KEY;
//console.log(API_Key);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// look for static files in psublic folder
// app.use(express.static('../client/public'));


{ /*

app.get('/', function(req, res) {
    res.sendFile(dir + 'index.html');
});
app.get('/index', function(req, res) {
    res.sendFile(dir + 'index.html');
});
app.get('/about', function(req, res) {
    res.sendFile(dir + 'about.html');
});
app.get('/articles', function(req, res) {
    res.sendFile(dir + 'articles.html');
});
app.get('/findings', function(req, res) {
    res.sendFile(dir + 'findings.html');
});

app.get('/*', function(req, res) {
    res.sendFile(dir + '404.html')
});

*/ }



// API call here
// get cover image:
    // https://api.elsevier.com/content/serial/title/issn/{issn}
// get abstracts:
    // https://api.elsevier.com/content/abstract/doi/{doi}
    // https://api.elsevier.com/content/abstract/scopus_id/{scopus_id}
    // or whatever id the article has ... 
// search keyterms:
    // https://api.elsevier.com/content/search/scopus?start=0&count=10&
    // httpaccept=application/json&query={keyterm}&APIKEY={APIKEY}
// NOTE: adding the parameter content=core to your request culls all “Response Not Found” messages.
app.get('/api/search', async (req, res) => {
    const userQuery = req.query.query;
    console.log(`Received query: ${userQuery}`);
    //console.log(`https://api.elsevier.com/content/search/scopus?start=0&count=10&httpaccept=application/json&query=${userQuery}&APIKEY=${API_Key}&content=core&sort=relevancy;citedby-count`)
    try {
        const response = await axios.get(`https://api.elsevier.com/content/search/scopus?start=0&count=10&httpaccept=application/json&query=${userQuery}&APIKEY=${API_Key}&content=core&sort=relevancy;citedby-count`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.status(500).json({ error: 'Error fetching data from API' });
    }
});


app.get('/api/abstract', async (req, res) => {
    const userQuery = req.query.query;

    try {
        const response = await axios.get(`https://api.elsevier.com/content/search/scopus?start=0&count=10&httpaccept=application/json&query=${userQuery}&APIKEY=${API_Key}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.status(500).json({ error: 'Error fetching data from API' });
    }
});

// Direct routing to react client side router
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.listen(PORT, function() {
    console.log('Listening on http://localhost:'+PORT);
});



