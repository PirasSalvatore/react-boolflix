
import Flag from 'react-flagkit'

export default function FlagLanguage({ country }) {

    let language = ""

    switch (country) {
        case "EN":
            language = "GB"
            break;
        case "JA":
            language = "JP"
            break;
        case "ZH":
            language = "CN"
            break;
        case "DA":
            language = "DK"
            break;

        default:
            language = country
    }

    return (
        <Flag country={language} />
    )
}