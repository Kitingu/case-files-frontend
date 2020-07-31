import React, { useState } from 'react';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';
import '../../assets/resources/resources.scss';
import { Link } from 'react-router-dom';
import CourtsHero from '../courts/CourtsHero';
import service3 from '../../images/service_3.jpeg';

const resourceData = [
  {
    id: 1,
    type: 'Journal articles and reports',
    content: `<p> Rachel Ibreck, and Naomi Pendle, 2017, Community Security and Justice under United Nations governance: lessons from chiefs’ courts in South Sudan’s Protection of Civilians Sites. Stability: International Journal of Security and Development. 6(1) 16, pp. 1-17. 
</p>
<a target="_blank" rel="noopener noreferrer" class="resource-button" href='https://www.stabilityjournal.org/articles/10.5334/sta.568/'>Read More </a>


<p>
Rachel Ibreck, and Naomi Pendle, 2017, Community Security and Justice under United Nations governance: lessons from chiefs’ courts in South Sudan’s Protection of Civilians Sites. Stability: International Journal of Security and Development. 6(1) 16, pp. 1-17. 
</p>
<a target="_blank" rel="noopener noreferrer" class="resource-button" href='https://www.stabilityjournal.org/articles/10.5334/sta.568/'>Read More </a>

 `,
  },

  {
    id: 2,
    type: 'Books',
    content: `<p> Rachel Ibreck, 2019, South Sudan’s Injustice System, London: Zed Books,</p>



<a target="_blank" rel="noopener noreferrer" class="resource-button" href='https://www.zedbooks.net/shop/book/south-sudans-injustice-system/'>Read More </a>

 `,
  },
  {
    id: 3,
    type: 'Policy briefs',
    content: `<p> DefendDefenders, 2019, On the Legal Frontline: Lawyers and paralegals as human rights defenders in the East and Horn of Africa:</p>

 



<a class="resource-button" href='https://defenddefenders.org/on-the-legal-frontline-lawyers-and-paralegals-as-human-rights-defenders-in-the-east-and-horn-of-africa/'>Read More </a>
 `,
  },
  {
    id: 4,
    type: 'Blogs',
    content: `<p> Rachel Ibreck and Angelina Daniel Seeka, Rethinking humanitarian solidarity from the perspective of South Sudanese refugees facing discrimination and violence in Cairo </p>

<a target="_blank" rel="noopener noreferrer" class="resource-button" href='https://blogs.lse.ac.uk/crp/2020/03/19/rethinking-humanitarian-solidarity-south-sudan-refugees-cairo-violence-in-cairo/'>Read More </a>
 `,
  },
  {
    id: 5,
    type: 'Podcasts',
    content: `<div>
</div>
 `,
  },
  {
    id: 6,
    type: 'Websites',
    content: `<div>
   <p> <img src='http://justicenetworksea.org/namati.jpeg' alt="namati.org"> </img> </p>
    </hr>
<a target="_blank" rel="noopener noreferrer" class="resource-button" class="resource-button" href='https://namati.org/'> Namati, Legal Empowerment Network </a>
</div>
 `,
  },
];
const ResourceDetails = () => {
  const [current, setCurrent] = useState(6);

  return (
    <>
      <CourtsHero backgroundImage={service3} />
      <div className="jumbotron">
        <div className="court-details">
          <h3>Resources</h3>
          <p>
            Justice Networks in Eastern Africa shares primary data and published
            materials from academic research on law and activism in Eastern
            Africa, making them accessible to other researchers and
            stakeholders. The website was initiated by Dr Rachel Ibreck and
            Justice Africa, as part of a collaborative research project from
            August 2019-July 2020, with funding from a Global Challenges
            Research Fund (GCRF) grant held by Goldsmiths, University of London.
            It serves as a repository for the following resources:
          </p>
        </div>
      </div>

      <div className="legal-boxes small-box">
        {resourceData.map((resource) => (
          <div className={`legal-box current-${resource.id === current}`}>
            <Link
              onClick={() => {
                setCurrent(resource.id);
              }}
            >
              {resource.type}
            </Link>
          </div>
        ))}
      </div>
      <div className="legal-body resource">
        {resourceData
          .filter((resource) => resource.id === current)
          .map((resource) => (
            <div>{ReactHtmlParser(resource.content)}</div>
          ))}
      </div>
    </>
  );
};

export default ResourceDetails;
