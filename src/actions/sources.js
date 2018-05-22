export const SOURCES = {
    tmFeed: {
        title: 'TM Feed',
        url: 'https://cors-anywhere.herokuapp.com/https://tmfeed.ru/api/v1/habrahabr-geektimes_top_daily.json',
        jsonProperties: {
            url: 'url',
            title: 'title',
            comments: 'comments_count',
            site: 'site',
            created: 'time_published'
        }
    },
    redditHot: {
        title: 'Reddit Hot',
        api: 'reddit',
        url: `https://www.reddit.com/hot.json`,
        jsonProperties: {
            url: 'url',
            title: 'title',
            comments: 'num_comments',
            site: 'subreddit',
            created: 'created_utc'
        }
    },
    reactjsSubreddit: {
        title: 'reactjs(reddit)',
        api: 'reddit',
        url: `https://www.reddit.com/r/reactjs.json`,
        jsonProperties: {
            url: 'url',
            title: 'title',
            comments: 'num_comments',
            site: 'subreddit',
            created: 'created_utc'
        }
    },
    todayILearnedSubreddit: {
        title: 'todayilearned (reddit)',
        api: 'reddit',
        url: `https://www.reddit.com/r/todayilearned.json`,
        jsonProperties: {
            url: 'url',
            title: 'title',
            comments: 'num_comments',
            site: 'subreddit',
            created: 'created_utc'
        }
    },
    VC: {
        title: 'VC.ru',
        api: 'rssfeed',
        url: `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvc.ru%2Frss%2Fall`,
        jsonProperties: {
            url: 'link',
            title: 'title',
            comments: '',
            site: 'VC',
            created: 'pubDate'
        }
    },
    theVerge: {
        title: 'The Verge',
        api: 'rssfeed',
        url: `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theverge.com%2Frss%2Findex.xml`,
        jsonProperties: {
            url: 'link',
            title: 'title',
            comments: '',
            site: 'The Verge',
            created: 'pubDate'
        }
    },
    nineTo5mac: {
        title: '9to5Mac',
        api: 'rssfeed',
        url: `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2F9to5mac.com%2Ffeed%2F`,
        jsonProperties: {
            url: 'link',
            title: 'title',
            comments: '',
            site: '9to5Mac',
            created: 'pubDate'
        }
    },
}