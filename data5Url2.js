var data5Url2 = `sno,subject,description,shorturl,longurl
01,Contact List,BPSG 7th sem-2082(Mansir),open word doc,DOCS/studentinfo.docx
02,Contact List,BPSG 7th sem-2082(Mansir),open pdf file,DOCS/studentinfo.pdf
03, LAW, land related act-2021, open doc file, DOCS/landrelatedact2021.docx
04, LAW, civil code-2074, open doc file, DOCS/civilcode2074.docx
05, LAW, PPP Act, open pdf file, DOCS/PPP Act 2075.pdf
05, LAW, PPP Policy, open pdf file, DOCS/PPP Policy 2072.pdf
`;

// Dataset metadata
var data5Url2Info = {
    name: "Laws",
    description: "Important Urls-non git links, color columns",
    emoji: "🔗",
    columns: 5,
    primaryKey: "subject",
    rowColors: {
        // Example: highlight a specific shorturl
        "subject": "blue"
    }
};



