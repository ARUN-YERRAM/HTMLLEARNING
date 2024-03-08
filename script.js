// // console.log("Hello world from ARUN YERRAM");

document.addEventListener("DOMContentLoaded", function () {
    const rightsList = document.getElementById("rights-list");
    const documentContent = document.getElementById("document-content");
    const languageSelect = document.getElementById("language-select")

    const rightsData = [
        "The right to free speech.",
        "The right to a fair trial.",
        "The right to privacy.",
        "Right to Speak.",
        "Right to be heard.",
        "Right to freedom of expression.",
        "Right to know.",
        "Right to Information.",
        "Right to Equality.",
        "Right to freedom of association.",
        "Right to fair dealing.",
        "Right to Privacy.",
        "Right to Freedom.",
        "Right to Education.",
        "Right to Justice.",
        "Right to be informed.",
        "Right to be heard.",
        "Right to a fair trial.",
        "Right to be free from discrimination.",
        "Right to freddom of  Press",
        "Right to freedom of assembly.",
        // 
    ];

    const legalDocuments = {
        en: "English legal document content goes here.",
        // es: "Contenido del documento legal en español va aquí.",
        // fr: "Contenu du document légal en français va ici."
        Tel : "Telugu legal document content goes here.",
        hin : "Hindi legal document content goes here.",
        mar : "Marathi legal document content goes here.",
        tam : "Tamil legal document content goes here.",
        kan : "Kannada legal document content goes here.",

    };
    

    function populateRightsList(data) {
        data.forEach((right) => {
            const listItem = document.createElement("li");
            listItem.textContent = right;
            rightsList.appendChild(listItem);
        });
    }
    
    // Function to update the displayed document content based on language selection
    function updateDocumentContent(language) {
        documentContent.textContent = legalDocuments[language];
    }
     // Populate the rights list and set an initial document language
    populateRightsList(rightsData);
    updateDocumentContent(languageSelect.value)

    // Event listener to update document content on language selection change
    languageSelect.addEventListener("change", function () {
        const selectedLanguage = languageSelect.value;
        updateDocumentContent(selectedLanguage);
    });
});








// document.addEventListener("DOMContentLoaded", function () {
//     const documentForm = document.getElementById("document-form");
//     const documentInput = document.getElementById("document-input");
//     const documentList = document.getElementById("document-list");

//     // Function to handle document submission
//     documentForm.addEventListener("submit", function (event) {
//         event.preventDefault();
        
//         const file = documentInput.files[0];

//         if (file) {
//             const listItem = document.createElement("li");
//             listItem.textContent = `Uploaded document: ${file.name}`;
//             documentList.appendChild(listItem);
            
//             // You can now process and store the uploaded document as needed.
//         }
//     });
// });
