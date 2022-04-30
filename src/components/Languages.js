import {React} from 'react';
import '../styles/languagesStyles/languages.scss'

const Languages = () => {
    return (
        <div className = "languageContainer"> 
            <p className="languagesTitle">Languages</p>
            <ul className = "languageList">
                <li className = "languageItem">Armenian - mother language</li>
                <li className = "languageItem">Russian - B2-A1</li>
                <li className = "languageItem">English - B1</li>
            </ul>
        </div>
    )
}

export default Languages;