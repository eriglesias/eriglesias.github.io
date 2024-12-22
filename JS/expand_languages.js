// Language resources data
const languageResources = {
    dutch: [
        {
            title: 'woordenlijst',
            url: 'https://woordenlijst.org/',
            description: 'Look for the proper spelling and forms/conjugation of a word'
        },
        {
            title: 'nporadio1',
            url: 'https://www.nporadio1.nl',
            description: 'Listen to radio in Dutch'
        },
        {
            title: 'schooltv',
            url: 'https://schooltv.nl/',
            description: 'Watch small videos with subtitles and transcription'
        },
        {
            title: 'taaladvies',
            url: 'https://taaladvies.net/',
            description: 'Provides answers to common questions about language and spelling'
        },
        {
            title: 'the dutch online academy',
            url: 'https://thedutchonlineacademy.com/podcast',
            description: 'Listen to a learning tailored podcast with the transcript'
        },
        {
            title: 'taaldrop',
            url: 'https://taaldrop.be/',
            description: 'Get a mail everyday with a dutch text, find the error and see the answer'
        }
    ],
    german: [
        {
            title: 'DWDS',
            url: 'https://www.dwds.de/',
            description: 'a really good online dictionary with the vocabulary from 1600 until today, they may even show you extra info like frequency, where it is more used and other things.'
        }
    ],

    french: [
        {
            title: 'Le Monde diplomatique',
            url: 'https://www.monde-diplomatique.fr/',
            description: 'An example of a newspaper where you can read articles and for some of them listen to them too, you may find also magazine, blogs and other content'
        }
    ],

    italian: [
        {
            title: 'test',
            url: 'https://www.erkike.com',
            description: 'TEST'
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const viewAllButtons = document.querySelectorAll('.view-all');
    const expandedView = document.querySelector('.expanded-view');
    const closeButton = document.querySelector('.close-button');
    
    function toggleExpandedView(language, show = true) {
        if (show) {
            const resources = languageResources[language];
            const expandedGrid = expandedView.querySelector('.expanded-grid');
            const headerTitle = expandedView.querySelector('.expanded-header h2');
            
            // Update header
            headerTitle.textContent = `${language.charAt(0).toUpperCase() + language.slice(1)} Resources`;
            
            // Clear and populate grid
            expandedGrid.innerHTML = '';
            resources.forEach(resource => {
                const item = document.createElement('div');
                item.className = 'expanded-item';
                item.innerHTML = `
                    <h3><a href="${resource.url}" target="_blank">${resource.title}</a></h3>
                    <p>${resource.description}</p>
                `;
                expandedGrid.appendChild(item);
            });
            
            expandedView.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            expandedView.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    viewAllButtons.forEach(button => {
        button.addEventListener('click', function() {
            const language = this.dataset.language;
            toggleExpandedView(language);
        });
    });

    closeButton.addEventListener('click', () => toggleExpandedView(null, false));

    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            toggleExpandedView(null, false);
        }
    });
});