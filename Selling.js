import React, {useState, useEffect} from 'react';
import logo from './images/StagingHome.JPG';
import logo2 from './images/FinalSaving.JPG';
import logo3 from './images/HouseWorth.JPG';
import logo4 from './images/BeforePossession.JPG';
import '../BuyP/Buying.css';

/*This code showcases use of React Hooks, Responsive Design, Code Organization and Reusability, State Mangement and Event Handling. */

function Selling() { 
    const [option, setOption] = useState('staging') /* Using two states to hold what option user is on and what layout to render */
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768) 

    function handleOptionChange(newOption) { /*Created this function to determine what happens when the user clicks a different picture (option */
        setOption(newOption)
        localStorage.setItem('option', newOption)
    }

    useEffect(() => { /* To remember last option chosen by user and react accordingly to screen size changes */
        const savedOption = localStorage.getItem('option')
        setOption(savedOption ? savedOption : 'staging')

        const handleResize = () => setIsMobile(window.innerWidth <= 768)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    function decidedOptionView() { /* Function rendering different sections depending on chosen option */
        
        if ( option === 'staging' ) {
            return(
            <div className="sections">
                <p>talk abt how to stage ur home and why its important</p>
            </div>
            );
        } else if ( option === 'saving') {
            return (
                <div className="sections">
                    <p>Talk abt how much you will make out of a sale, what the lawyer takes etc and what the seller gets in the end</p>
                </div>
            )
        } else if (option === 'houseWorth') {
            return (
                <div className="sections">
                    <p>How to decide how much ur home is worth, and maybe if the offer u get is good or not</p>
                </div>
            )
        } else {
            return(
                <div className="sections">
                    <p>what to do before possession eg cleaning etc</p>
                </div>
            )
        }
    }


    return ( /* The section that will be displayed on screen */
        <div>
            <div className='navBar'> 
                <div className="eachImg">
                    //Constists of an image which runs the function with variable staging when clicked, they also have a description at bottom
                    <img src={logo} onClick={() => handleOptionChange('staging')}/>  
                    <p>Stage your home to sell</p>                                   
                    {isMobile && option === 'staging' && decidedOptionView()} 
                    //If user is using a mobile to see website the larger text will appear right below image 
                </div>    
                <div className="eachImg">
                    <img src={logo2} onClick={() => handleOptionChange('saving')}/>
                    <p>Your net profit after selling</p>
                    {isMobile && option === 'saving' && decidedOptionView()}
                </div>
                <div className="eachImg">
                    <img src={logo3} onClick={() => handleOptionChange('houseWorth')}/>
                    <p>How much is your house worth</p>
                    {isMobile && option === 'houseWorth' && decidedOptionView()}
                </div>
                <div className="eachImg">
                    <img src={logo4} onClick={() => handleOptionChange('beforePossession')}/>
                    <p>Pre-possession checklist</p>
                    {isMobile && option === 'beforePossession' && decidedOptionView()}
                </div>
            </div>

            {!isMobile && decidedOptionView()} 

        </div>
    )
}

export default Selling; 

