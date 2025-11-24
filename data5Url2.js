var data5Url2 = `sno,subject,description,shorturl,longurl
01,Contact List,BPSG 7th sem-2082(Mansir),open word doc,DOCS/studentinfo.docx
02,Contact List,BPSG 7th sem-2082(Mansir),open pdf file,DOCS/studentinfo.pdf
03, LAW, land related act, 2021, open doc file, DOCS/landrelatedact2021.docx
`;

// Dataset metadata
var data5Url2Info = {
    name: "Contact",
    description: "Important Urls-non git links, color columns",
    emoji: "🔗",
    columns: 5,
    primaryKey: "subject",
    rowColors: {
        // Example: highlight a specific shorturl
        "subject": "blue"
    }
};



