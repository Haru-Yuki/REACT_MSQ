const { TABS, TOOLS } = window.FilerobotImageEditor;

const config = {
    source: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg',
    onSave: (editedImageObject, designState) => {
        console.log('saved', editedImageObject, designState);
        downloadImage(editedImageObject);
    },
    annotationsCommon: {
        fill: '#ff0000',
    },
    Text: { text: 'Filerobot...' },
    Rotate: { angle: 90, componentType: 'slider' },
    translations: {
        profile: 'Profile',
        coverPhoto: 'Cover photo',
        facebook: 'Facebook',
        socialMedia: 'Social Media',
        fbProfileSize: '180x180px',
        fbCoverPhotoSize: '820x312px',
    },
    Crop: {
        presetsItems: [
            {
                titleKey: 'classicTv',
                descriptionKey: '4:3',
                ratio: 4 / 3,
                // icon: CropClassicTv, // optional, CropClassicTv is a React Function component. Possible (React Function component, string or HTML Element)
            },
            {
                titleKey: 'cinemascope',
                descriptionKey: '21:9',
                ratio: 21 / 9,
                // icon: CropCinemaScope, // optional, CropCinemaScope is a React Function component.  Possible (React Function component, string or HTML Element)
            },
        ],
        presetsFolders: [
            {
                titleKey: 'socialMedia', // will be translated into Social Media as backend contains this translation key
                // icon: Social, // optional, Social is a React Function component. Possible (React Function component, string or HTML Element)
                groups: [
                    {
                        titleKey: 'facebook',
                        items: [
                            {
                                titleKey: 'profile',
                                width: 180,
                                height: 180,
                                descriptionKey: 'fbProfileSize',
                            },
                            {
                                titleKey: 'coverPhoto',
                                width: 820,
                                height: 312,
                                descriptionKey: 'fbCoverPhotoSize',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    tabsIds: [TABS.ADJUST, TABS.ANNOTATE, TABS.FINETUNE, TABS.FILTERS], // or ['Adjust', 'Annotate', 'Watermark']
    defaultTabId: TABS.ANNOTATE, // or 'Annotate'
    defaultToolId: TOOLS.TEXT, // or 'Text',
};

function downloadImage(imageData) {
    const { imageBase64, fullName } = imageData; // Extract base64 data and full name

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = imageBase64;        // Set the data URI as the href
    link.download = fullName;       // Set the desired file name
    link.style.display = 'none';    // Hide the link element

    // Append the link to the body and click it programmatically
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document after download
    document.body.removeChild(link);
}

// Assuming we have a div with id="editor_container"
const filerobotImageEditor = new window.FilerobotImageEditor(
    document.querySelector('#editor_container'),
    config,
);

filerobotImageEditor.render({
    onClose: (closingReason) => {
        console.log('Closing reason', closingReason);
        filerobotImageEditor.terminate();
    },
});

async function copyBase64ImageToClipboard(base64Image) {
    try {
        // Remove the "data:image/png;base64," part if present
        const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');

        // Convert base64 string to binary data
        const binary = atob(base64Data);
        const array = [];
        for (let i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }

        // Create a Blob from the binary data
        const blob = new Blob([new Uint8Array(array)], { type: 'image/png' });

        // Copy the Blob to the clipboard
        const clipboardItem = new ClipboardItem({ 'image/png': blob });
        await navigator.clipboard.write([clipboardItem]);

        alert('Image copied to clipboard!');
    } catch (error) {
        console.error('Failed to copy image to clipboard:', error);
    }
}

const createCopyButton = () => {
   const saveButton = document.querySelector('.FIE_topbar-save-wrapper button');

   if (saveButton && saveButton.children.length) {
       const copyButton = saveButton.cloneNode();

       copyButton.innerText = 'Copy to clipboard';
       copyButton.disabled = false;
       copyButton.style.marginLeft = '10px';

       copyButton.addEventListener('click', async () => {
           const currentImage = filerobotImageEditor.getCurrentImgData();

           await copyBase64ImageToClipboard(currentImage.imageData.imageBase64);
       })

       saveButton.parentElement.appendChild(copyButton);
   } else {
       setTimeout(createCopyButton, 100);
   }
};

createCopyButton();