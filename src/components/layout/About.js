import React,{useState} from "react";
import { Link } from "react-router-dom";
import placeholder from "../../images/placeholder.png";
import placeholder2 from '../../images/placeholder2.png';
import placeholder3 from '../../images/placeholder3.png';
const data = [
  {
    id: 0,
    header: 'Town Court Report, Torit, South Sudan, 2015',
    content:
      'This case was heard in a customary C court in Torit on 20 July 2015. This concerns a dispute over some property, the defendant borrowed building materials from the plaintiff and refuses to pay her on the grounds that they belonged to her former husband. The judge refused to make a ruling until the ex-husband can be brought in. It’s illustrative of the way customary courts uphold patriarchal norms, in that this woman has been separated from her husband for 6 years, and yet a case over her property still needs to involve her husband who doesn’t even reside in that region. This case was recorded by observer TL.',
    image: placeholder,
  },
  {
    id: 1,
    header: 'Customary Court Report, Wau, South Sudan, 2015',
    content:
      'This case was heard in a customary A court in Wau on the 16th of July 2015. The defendant, a SPLA soldier, is found guilty of sexually assaulting a minor and is sentenced to 14 years in prison. This case is another example of customary courts handling cases that should be heard in statutory courts and is also an example of a customary court charging and imprisoning an SPLA soldier. This case was recorded by observer EJJ.',
    image: placeholder2,
  },
  {
    id: 2,
    header: 'Customary Court Report, Juba Protection of Civilians Site 2016',
    content:
      'This case was heard in a customary A court in Juba PoC 3 on 23 May 2016. The plaintiff is trying to claim compensation from the defendant for impregnating his daughter outside of marriage. This is a fairly straightforward case that serves as a good example for how customary courts in the PoC deal with pregnancy cases outside of marriage. The case was recorded by observer GP.',
    image: placeholder3,
  },
];
const CompanyDetails = () => {
  const [contentHead, setContentHead] = useState('');
  return (
    <>
      <div className="jumbotron">
        <div className="about">
          <h2>Explore our resources in the archive</h2>

          <p>
            We share data and published materials from academic research on
            justice in Eastern Africa, making them accessible to other
            researchers and stakeholders.
          </p>
        </div>
        <div className="boxes">
          {data.map(box=>{
            return (
              <div key={box.id} className="box">
                <img src={box.image} alt="" />
                <div className="details">
                  <h4>{box.header}</h4>
                  {contentHead === box.id && (
                    <>
                      <p className="box-content"> {box.content}</p>
                    </>
                  )}
                  <Link
                  to=""
                    onClick={() =>
                      setContentHead(contentHead === box.id ? '' : box.id)
                    }
                  >
                    {contentHead === box.id ? 'Read Less' : 'Read More'}
                  </Link>
                </div>
              </div>
            );
          })}
       
          
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
