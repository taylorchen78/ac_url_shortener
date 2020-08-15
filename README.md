# URL shortener

A simple website using Node.js and Express.

URL shortener is a free website to shorten URL which makes it easy to remember.

## Feature

User can input URL.

User can copy output shorten URL and browse website with shorten URL.

![Screenshot](/public/img/screenshot_url_shorten.JPG)

## Test url seed
| Original URL                | Shorten URL                                   |
| --------------------------- | --------------------------------------------- |
| https://www.google.com.tw/  | https://evening-tor-33186.herokuapp.com/obK3k |
| https://www.youtube.com/    | https://evening-tor-33186.herokuapp.com/Jmtrp |
| https://tw.alphacamp.co/    | https://evening-tor-33186.herokuapp.com/Hz2VO |

## Web package
- Node.js v10.15.0
- Express v4.17.1
- Express-Handlebars v5.1.0
- Mongoose v5.9.27
- Clipboard v2.0.6

## Installation
1. Open terminal and download project
```
git clone https://github.com/taylorchen78/ac_url_shortener.git
```

2. Enter project folder
```
cd ac_url_shortener
```

3. Install npm
```
npm install express
```

4. Run seed generator
```
npm run seed
```

5. Run project
```
nodemon app.js or npm run dev
```

## Open expense website
Browse https://afternoon-escarpment-38115.herokuapp.com with Heroku server 