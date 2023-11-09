# Slides
This repository contains slides for my presentations.

- **Efficient Neural Ranking using Forward Indexes and Lightweight Encoders**\
  Jurek Leonhardt, Henrik Müller, Koustav Rudra, Megha Khosla, Abhijit Anand, Avishek Anand\
  Journal paper (TOIS, just accepted)\
    [ACM](https://dl.acm.org/doi/10.1145/3631939) | [arXiv](https://arxiv.org/abs/2311.01263) | [slides](https://mrjleo.github.io/slides/tois24_fast-forward-indexes) | [code](https://github.com/mrjleo/fast-forward-indexes)

- **Efficient and Explainable Neural Ranking**\
  Jurek Leonhardt\
  PhD thesis\
  [slides](https://mrjleo.github.io/slides/phd)

- **Efficient Neural Ranking using Forward Indexes**\
  Jurek Leonhardt, Koustav Rudra, Megha Khosla, Abhijit Anand, Avishek Anand\
  Full paper (TheWebConf 2022)\
  [ACM](https://dl.acm.org/doi/10.1145/3485447.3511955) | [arXiv](https://arxiv.org/abs/2110.06051) | [slides](https://mrjleo.github.io/slides/www22_fast-forward-indexes) | [code](https://github.com/mrjleo/fast-forward-indexes)

## Local Development
Clone the repository and run the commands below.

### Using Docker
First, build the image:
```
docker build -t slides-dev .
```

Next, run a container:
```
docker run -d \
  --mount type=bind,src="$(pwd)",target=/slides \
  -p 8000:8000 -p 35729:35729 \
  --name slides-dev-container \
  slides-dev
```

Finally, compile the LaTeX figues (this only needs to be done once):
```
docker exec -it slides-dev-container npm run compile_latex
```

Navigate your browser to http://localhost:8000/.

### Without Docker
Install the dependencies:
* [node.js](https://nodejs.org/en/)
* [pdf2svg](https://github.com/dawbarton/pdf2svg)
* [Inconsolata (font)](https://fonts.google.com/specimen/Inconsolata)
* [Libertine (font)](https://libertine-fonts.org/)
* A LaTeX distribution, e.g., [TeX Live](https://tug.org/texlive/)

Install the node modules:
```
npm install
```

Compile the LaTeX figues (this only needs to be done once):
```
npm run compile_latex
```

In order to work with live reloading, start a local server:
```
npm start
```

Navigate your browser to http://localhost:8000/.

## Libraries
- [reveal.js](https://revealjs.com/)
- [charts.css](https://chartscss.org/)
- [KaTeX](https://katex.org/)
- [PGF/TikZ](https://ctan.org/pkg/pgf)
- [PGFPlots](https://ctan.org/pkg/pgfplots)

## Attribution
Some slides contain icons created by [juicy_fish](https://www.flaticon.com/authors/juicy-fish/) ([Flaticon](https://www.flaticon.com/)).
