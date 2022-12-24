import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import {useState} from "react";


const Resume = () => {

    // <Document file="../../../public/pdf/Resume.pdf" onLoadSuccess={onDocumentLoad}>
    //         <Page height="600" pageNumber={pageNumber}></Page>
    //     </Document>

    var [pageNumber, setPageNumber] = useState(1);
    const [numPage, setNumPage] = useState(null)

    function onDocumentLoad({numPage}) {
            setNumPage(numPage)
            setPageNumber(1)
    }
        return <a href="https://drive.google.com/file/d/1HZUcUKfjOvVWSueBeq5UvYv3Xhw7ctUl/view?usp=share_link">Resume</a>
}

export default Resume


