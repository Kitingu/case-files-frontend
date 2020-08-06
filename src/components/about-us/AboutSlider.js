import React, { useEffect, useState, useLayoutEffect } from 'react';
import ShowMoreText from 'react-show-more-text';
import ReactHtmlParser from 'react-html-parser';
import '../../assets/aboutSlider.scss';

import back from '../../images/back.png';
import next from '../../images/next.png';
const data = [
  {
    header:
      'Provide insights from research into the law in practice',
    content:
      '<span> in conflict and crisis settings in Eastern Africa, where most people only have access to local courts; and where customary or religious laws and authorities often command legitimacy. Our research demonstrates that efforts to deliver and promote ‘law from below’ continue despite conflict and ‘fragility.’ Documenting court proceedings can enrich our understanding of law, politics and society; it can also enable legal empowerment public scrutiny, and social accountability across the region.</span>',
  },
  {
    header: 'Share knowledge and research materials',
    content:
      'to expand and enrich understanding of the work of local courts and the struggles of civic and legal activists in conflict settings in Eastern Africa.',
  },
  {
    header:
      'Serve as a repository of primary data from internationally-funded research projects',
    content:
      'to enable stakeholders in the region to access, use and interpret these materials. Too often materials gathered through costly and difficult research with participants in Eastern Africa is analysed from a single (usually external) perspective. We believe that novel and ethical ways must be found to widen access to primary data.',
  },
  {
    header: 'Foster networking and strengthen civic and legal activism',
    content:
      'among community paralegals, lawyers, and civil society and community activists committed to justice in Eastern Africa. Their work may be voluntary, and is sometimes dangerous, yet they make practical and timely contributions to the protection and human rights of citizens.',
  },
  {
    header:
      'Connect activists to researchers and encourage participatory action research',
    content:
      'as a viable and ethical method of contributing to academic knowledge.',
  },
];
const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};
export default () => {
  const [slideData, setSlideData] = useState([]);
  const [page, setPage] = useState(0);
  const [itemPerSlide, setItemsPerSlide] = useState(3);
  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width < 600) {
      setSlideData(data.slice(page, page + 1));
      setItemsPerSlide(1);
    }
    if (width > 600 && width < 900) {
      setSlideData(data.slice(page, page + 2));
      setItemsPerSlide(2);
    }
    if (width > 900) {
      setSlideData(data.slice(page, page + 3));
      setItemsPerSlide(3);
    }
  }, [page, width]);

  return (
    <div className="sliderContainer">
      <button
        onClick={() => {
          page > 0 && setPage(page - 1);
        }}
        className="controlButton"
      >
        <img src={back} alt="back" />
      </button>{' '}
      <div className="slides">
        {slideData.map((slide) => (
          <div key={slide.header} className="slide">
            <span className="slider-heading"> {ReactHtmlParser(slide.header)} </span>
            <ShowMoreText width={450} more="Read more" less="read less">
              {ReactHtmlParser(slide.content)}
            </ShowMoreText>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          page < data.length - itemPerSlide && setPage(page + 1);
        }}
        className="controlButton"
      >
        <img src={next} alt="next" />
      </button>
    </div>
  );
};
